/// <reference types="node" />
declare class EntityJson {
    entityName: string;
    entityOptions: {
        [key: string]: string | boolean;
    };
    columns: EntityColumn[];
    indices: EntityIndex[];
}
declare class EntityColumn {
    columnName: string;
    columnTypes: string[];
    columnOptions: {
        [key: string]: string | boolean;
    };
    joinOptions: {
        [key: string]: string | boolean;
    }[];
    relationType: "OneToOne" | "OneToMany" | "ManyToOne" | "ManyToMany";
    isOwnerOfRelation: boolean;
}
declare class EntityIndex {
    indexName: string;
    columnNames: string[];
    isUnique: boolean;
}
export default class EntityFileToJson {
    static getEntityOptions(trimmedLine: string, ent: EntityJson): void;
    static getColumnOptionsAndType(trimmedLine: string, col: EntityColumn): void;
    static getRelationOptions(trimmedLine: string, col: EntityColumn): void;
    static getIndexOptions(trimmedLine: string, ind: EntityIndex): void;
    static convert(entityFile: Buffer): EntityJson;
    static isPartOfMultilineStatement(statement: string): boolean;
}
export {};
