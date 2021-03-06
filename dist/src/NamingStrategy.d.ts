import { Relation } from "./models/Relation";
import { RelationId } from "./models/RelationId";
import { Entity } from "./models/Entity";
import { Column } from "./models/Column";
export declare function enablePluralization(value: boolean): void;
export declare function relationIdName(relationId: RelationId, relation: Relation, owner?: Entity): string;
export declare function relationName(relation: Relation, owner?: Entity): string;
export declare function entityName(oldEntityName: string, entity?: Entity): string;
export declare function columnName(oldColumnName: string, column?: Column): string;
