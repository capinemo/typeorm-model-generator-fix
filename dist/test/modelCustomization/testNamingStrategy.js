"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NamingStrategy = require("../../src/NamingStrategy");
function relationIdName(relationId, relation) {
    return `${NamingStrategy.relationIdName(relationId, relation)}`;
}
exports.relationIdName = relationIdName;
function relationName(relation) {
    return `${NamingStrategy.relationName(relation)}_A`;
}
exports.relationName = relationName;
function entityName(oldEntityName) {
    return `${NamingStrategy.entityName(oldEntityName)}_B`;
}
exports.entityName = entityName;
function columnName(oldColumnName) {
    return `${NamingStrategy.columnName(oldColumnName)}_C`;
}
exports.columnName = columnName;
//# sourceMappingURL=testNamingStrategy.js.map