import { Column } from "./Column";
import { Relation } from "./Relation";
import { Index } from "./Index";
import { RelationId } from "./RelationId";
export declare type Entity = {
    sqlName: string;
    tscName: string;
    database?: string;
    schema?: string;
    columns: Column[];
    relationIds: RelationId[];
    relations: Relation[];
    indices: Index[];
    fileImports: string[];
    activeRecord?: true;
    generateConstructor?: true;
};
