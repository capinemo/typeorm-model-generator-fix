"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const chai = require("chai");
const ts = require("typescript");
const fs = require("fs-extra");
const path = require("path");
const chaiSubset = require("chai-subset");
const flatMap = require("array.prototype.flatmap");
const yn = require("yn");
const eslint_1 = require("eslint");
const EntityFileToJson_1 = require("../utils/EntityFileToJson");
const Engine_1 = require("../../src/Engine");
const GTU = require("../utils/GeneralTestUtils");
const ModelCustomization_1 = require("../../src/ModelCustomization");
const ModelGeneration_1 = require("../../src/ModelGeneration");
require("dotenv").config();
flatMap.shim();
chai.use(chaiSubset);
const { expect } = chai;
it("Column default values", async () => {
    const testPartialPath = "test/integration/defaultValues";
    await runTestsFromPath(testPartialPath, true);
});
it("Platform specific types", async () => {
    const testPartialPath = "test/integration/entityTypes";
    await runTestsFromPath(testPartialPath, true);
});
describe("GitHub issues", async () => {
    const testPartialPath = "test/integration/github-issues";
    await runTestsFromPath(testPartialPath, false);
});
describe("TypeOrm examples", async () => {
    const testPartialPath = "test/integration/examples";
    await runTestsFromPath(testPartialPath, false);
});
async function runTestsFromPath(testPartialPath, isDbSpecific) {
    const resultsPath = path.resolve(process.cwd(), `output`);
    if (!fs.existsSync(resultsPath)) {
        fs.mkdirSync(resultsPath);
    }
    const dbDrivers = GTU.getEnabledDbDrivers();
    dbDrivers.forEach(dbDriver => {
        const newDirPath = path.resolve(resultsPath, dbDriver);
        if (!fs.existsSync(newDirPath)) {
            fs.mkdirSync(newDirPath);
        }
    });
    const files = fs.readdirSync(path.resolve(process.cwd(), testPartialPath));
    if (isDbSpecific) {
        await runTest(dbDrivers, testPartialPath, files);
    }
    else {
        files.forEach(folder => {
            runTestForMultipleDrivers(folder, dbDrivers, testPartialPath);
        });
    }
}
function runTestForMultipleDrivers(testName, dbDrivers, testPartialPath) {
    it(testName, async () => {
        const driversToRun = selectDriversForSpecificTest();
        const modelGenerationPromises = driversToRun.map(async (dbDriver) => {
            const { generationOptions, driver, connectionOptions, resultsPath, filesOrgPathTS } = await prepareTestRuns(testPartialPath, testName, dbDriver);
            let dbModel = [];
            switch (testName) {
                case "144":
                    dbModel = await Engine_1.dataCollectionPhase(driver, Object.assign(connectionOptions, {
                        databaseName: "db1,db2"
                    }), generationOptions);
                    break;
                default:
                    dbModel = await Engine_1.dataCollectionPhase(driver, connectionOptions, generationOptions);
                    break;
            }
            dbModel = ModelCustomization_1.default(dbModel, generationOptions, driver.defaultValues);
            ModelGeneration_1.default(connectionOptions, generationOptions, dbModel);
            const filesGenPath = path.resolve(resultsPath, "entities");
            compareGeneratedFiles(filesOrgPathTS, filesGenPath);
            return {
                dbModel,
                generationOptions,
                connectionOptions,
                resultsPath,
                filesOrgPathTS,
                dbDriver
            };
        });
        await Promise.all(modelGenerationPromises);
        compileGeneratedModel(path.resolve(process.cwd(), `output`), dbDrivers);
    });
    function selectDriversForSpecificTest() {
        switch (testName) {
            case "39":
                return dbDrivers.filter(dbDriver => !["mysql", "mariadb", "oracle", "sqlite"].includes(dbDriver));
            case "93":
                return dbDrivers.filter(dbDriver => ["mysql", "mariadb"].includes(dbDriver) // Only db engines supported by typeorm at the time of writing
                );
            case "144":
                return dbDrivers.filter(dbDriver => ["mysql", "mariadb"].includes(dbDriver));
            case "248":
                return dbDrivers.filter(dbDriver => dbDriver === "postgres");
            default:
                return dbDrivers;
        }
    }
}
async function runTest(dbDrivers, testPartialPath, files) {
    const modelGenerationPromises = dbDrivers
        .filter(driver => files.includes(driver))
        .map(async (dbDriver) => {
        const { generationOptions, driver, connectionOptions, resultsPath, filesOrgPathTS } = await prepareTestRuns(testPartialPath, dbDriver, dbDriver);
        let dbModel = await Engine_1.dataCollectionPhase(driver, connectionOptions, generationOptions);
        dbModel = ModelCustomization_1.default(dbModel, generationOptions, driver.defaultValues);
        ModelGeneration_1.default(connectionOptions, generationOptions, dbModel);
        const filesGenPath = path.resolve(resultsPath, "entities");
        compareGeneratedFiles(filesOrgPathTS, filesGenPath);
        return {
            dbModel,
            generationOptions,
            connectionOptions,
            resultsPath,
            filesOrgPathTS,
            dbDriver
        };
    });
    await Promise.all(modelGenerationPromises);
    compileGeneratedModel(path.resolve(process.cwd(), `output`), dbDrivers);
}
function compareGeneratedFiles(filesOrgPathTS, filesGenPath) {
    const filesOrg = fs
        .readdirSync(filesOrgPathTS)
        .filter(val => val.toString().endsWith(".ts"));
    const filesGen = fs
        .readdirSync(filesGenPath)
        .filter(val => val.toString().endsWith(".ts"));
    expect(filesOrg, "Errors detected in model comparison").to.be.deep.equal(filesGen);
    const generatedEntities = filesOrg.map(file => EntityFileToJson_1.default.convert(fs.readFileSync(path.resolve(filesGenPath, file))));
    const originalEntities = filesGen.map(file => EntityFileToJson_1.default.convert(fs.readFileSync(path.resolve(filesOrgPathTS, file))));
    generatedEntities
        .flatMap(entity => entity.columns
        .filter(column => column.relationType === "ManyToMany" &&
        column.joinOptions.length > 0)
        .map(v => {
        return {
            ownerColumn: v,
            ownerEntity: entity
        };
    }))
        .forEach(({ ownerColumn, ownerEntity }) => {
        const childColumn = generatedEntities
            .find(childEntity => childEntity.entityName.toLowerCase() ===
            ownerColumn.columnTypes[0]
                .substring(0, ownerColumn.columnTypes[0].length - 2)
                .toLowerCase())
            .columns.find(column => column.columnTypes[0].toLowerCase() ===
            `${ownerEntity.entityName}[]`.toLowerCase());
        childColumn.joinOptions = ownerColumn.joinOptions.map(options => {
            return Object.assign(Object.assign({}, options), { joinColumns: options.inverseJoinColumns, inverseJoinColumns: options.joinColumns });
        });
    });
    // TODO: set relation options on ManyToMany to both side of relation
    generatedEntities
        .map((ent, i) => [ent, originalEntities[i], filesOrg[i]])
        .forEach(([generated, original, file]) => {
        expect(generated, `Error in file ${file}`).to.containSubset(original);
    });
}
// TODO: Move(?)
// eslint-disable-next-line import/prefer-default-export
function compileGeneratedModel(filesGenPath, drivers, lintGeneratedFiles = true) {
    const currentDirectoryFiles = [];
    drivers.forEach(driver => {
        const entitiesPath = path.resolve(filesGenPath, driver, "entities");
        if (fs.existsSync(entitiesPath)) {
            currentDirectoryFiles.push(...fs
                .readdirSync(entitiesPath)
                .filter(fileName => fileName.length >= 3 &&
                fileName.substr(fileName.length - 3, 3) === ".ts")
                .map(v => path.resolve(filesGenPath, driver, "entities", v)));
        }
    });
    const compiledWithoutErrors = GTU.compileTsFiles(currentDirectoryFiles, {
        experimentalDecorators: true,
        sourceMap: false,
        emitDecoratorMetadata: true,
        target: ts.ScriptTarget.ES2016,
        moduleResolution: ts.ModuleResolutionKind.NodeJs,
        module: ts.ModuleKind.CommonJS
    });
    expect(compiledWithoutErrors, "Errors detected while compiling generated model").to.equal(true);
    if (lintGeneratedFiles) {
        const cli = new eslint_1.CLIEngine({ configFile: "test/configs/.eslintrc.js" });
        const lintReport = cli.executeOnFiles(currentDirectoryFiles);
        lintReport.results.forEach(result => result.messages.forEach(message => {
            console.error(`${result.filePath}:${message.line} - ${message.message}`);
        }));
        expect(lintReport.errorCount).to.equal(0);
        expect(lintReport.warningCount).to.equal(0);
    }
}
exports.compileGeneratedModel = compileGeneratedModel;
async function prepareTestRuns(testPartialPath, testName, dbDriver) {
    const filesOrgPathJS = path.resolve(process.cwd(), testPartialPath, testName, "entity");
    const filesOrgPathTS = path.resolve(process.cwd(), testPartialPath, testName, "entity");
    const resultsPath = path.resolve(process.cwd(), `output`, dbDriver);
    fs.removeSync(resultsPath);
    const driver = Engine_1.createDriver(dbDriver);
    const generationOptions = GTU.getGenerationOptions(resultsPath);
    switch (testName) {
        case "65":
            generationOptions.relationIds = true;
            break;
        case "sample18-lazy-relations":
            generationOptions.lazy = true;
            break;
        case "144":
            // eslint-disable-next-line no-case-declarations
            let connectionOptions;
            switch (dbDriver) {
                case "mysql":
                    connectionOptions = {
                        host: String(process.env.MYSQL_Host),
                        port: Number(process.env.MYSQL_Port),
                        databaseName: String(process.env.MYSQL_Database),
                        user: String(process.env.MYSQL_Username),
                        password: String(process.env.MYSQL_Password),
                        databaseType: "mysql",
                        schemaName: "ignored",
                        ssl: yn(process.env.MYSQL_SSL, { default: false }),
                        skipTables: []
                    };
                    break;
                case "mariadb":
                    connectionOptions = {
                        host: String(process.env.MARIADB_Host),
                        port: Number(process.env.MARIADB_Port),
                        databaseName: String(process.env.MARIADB_Database),
                        user: String(process.env.MARIADB_Username),
                        password: String(process.env.MARIADB_Password),
                        databaseType: "mariadb",
                        schemaName: "ignored",
                        ssl: yn(process.env.MARIADB_SSL, { default: false }),
                        skipTables: []
                    };
                    break;
                default:
                    break;
            }
            await driver.ConnectToServer(connectionOptions);
            if (!(await driver.CheckIfDBExists("db1"))) {
                await driver.CreateDB("db1");
            }
            if (!(await driver.CheckIfDBExists("db2"))) {
                await driver.CreateDB("db2");
            }
            await driver.DisconnectFromServer();
            break;
        default:
            break;
    }
    const connectionOptions = await GTU.createModelsInDb(dbDriver, filesOrgPathJS);
    return {
        generationOptions,
        driver,
        connectionOptions,
        resultsPath,
        filesOrgPathTS
    };
}
//# sourceMappingURL=runTestsFromPath.test.js.map