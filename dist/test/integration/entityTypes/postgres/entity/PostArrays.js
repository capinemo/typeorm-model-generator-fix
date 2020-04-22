"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let PostArrays = class PostArrays {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], PostArrays.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PostArrays.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("int2", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "int2", void 0);
__decorate([
    typeorm_1.Column("int4", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "int4", void 0);
__decorate([
    typeorm_1.Column("int8", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "int8", void 0);
__decorate([
    typeorm_1.Column("smallint", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "smallint", void 0);
__decorate([
    typeorm_1.Column("integer", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "integer", void 0);
__decorate([
    typeorm_1.Column("bigint", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "bigint", void 0);
__decorate([
    typeorm_1.Column("decimal", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "decimal", void 0);
__decorate([
    typeorm_1.Column("numeric", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "numeric", void 0);
__decorate([
    typeorm_1.Column("real", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "real", void 0);
__decorate([
    typeorm_1.Column("float", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "float", void 0);
__decorate([
    typeorm_1.Column("float4", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "float4", void 0);
__decorate([
    typeorm_1.Column("float8", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "float8", void 0);
__decorate([
    typeorm_1.Column("double precision", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "doublePrecision", void 0);
__decorate([
    typeorm_1.Column("money", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "money", void 0);
__decorate([
    typeorm_1.Column("character varying", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "characterVarying", void 0);
__decorate([
    typeorm_1.Column("varchar", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "varchar", void 0);
__decorate([
    typeorm_1.Column("character", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "character", void 0);
__decorate([
    typeorm_1.Column("char", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "char", void 0);
__decorate([
    typeorm_1.Column("text", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "text", void 0);
__decorate([
    typeorm_1.Column("citext", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "citext", void 0);
__decorate([
    typeorm_1.Column("hstore", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "hstore", void 0);
__decorate([
    typeorm_1.Column("bytea", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "bytea", void 0);
__decorate([
    typeorm_1.Column("bit", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "bit", void 0);
__decorate([
    typeorm_1.Column("varbit", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "varbit", void 0);
__decorate([
    typeorm_1.Column("bit varying", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "bitVarying", void 0);
__decorate([
    typeorm_1.Column("timetz", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "timetz", void 0);
__decorate([
    typeorm_1.Column("timestamptz", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "timestamptz", void 0);
__decorate([
    typeorm_1.Column("timestamp with time zone", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "timestampWithTimeZone", void 0);
__decorate([
    typeorm_1.Column("date", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "date", void 0);
__decorate([
    typeorm_1.Column("time", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "time", void 0);
__decorate([
    typeorm_1.Column("time without time zone", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "timeWithoutTimeZone", void 0);
__decorate([
    typeorm_1.Column("time with time zone", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "timeWithTimeZone", void 0);
__decorate([
    typeorm_1.Column("interval", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "interval", void 0);
__decorate([
    typeorm_1.Column("bool", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "bool", void 0);
__decorate([
    typeorm_1.Column("boolean", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "boolean", void 0);
__decorate([
    typeorm_1.Column("point", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "point", void 0);
__decorate([
    typeorm_1.Column("line", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "line", void 0);
__decorate([
    typeorm_1.Column("lseg", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "lseg", void 0);
__decorate([
    typeorm_1.Column("box", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "box", void 0);
__decorate([
    typeorm_1.Column("path", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "path", void 0);
__decorate([
    typeorm_1.Column("polygon", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "polygon", void 0);
__decorate([
    typeorm_1.Column("circle", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "circle", void 0);
__decorate([
    typeorm_1.Column("cidr", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "cidr", void 0);
__decorate([
    typeorm_1.Column("inet", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "inet", void 0);
__decorate([
    typeorm_1.Column("macaddr", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "macaddr", void 0);
__decorate([
    typeorm_1.Column("tsvector", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "tsvector", void 0);
__decorate([
    typeorm_1.Column("tsquery", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "tsquery", void 0);
__decorate([
    typeorm_1.Column("uuid", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "uuid", void 0);
__decorate([
    typeorm_1.Column("xml", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "xml", void 0);
__decorate([
    typeorm_1.Column("json", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "json", void 0);
__decorate([
    typeorm_1.Column("jsonb", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "jsonb", void 0);
__decorate([
    typeorm_1.Column("int4range", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "int4range", void 0);
__decorate([
    typeorm_1.Column("int8range", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "int8range", void 0);
__decorate([
    typeorm_1.Column("numrange", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "numrange", void 0);
__decorate([
    typeorm_1.Column("tsrange", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "tsrange", void 0);
__decorate([
    typeorm_1.Column("tstzrange", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "tstzrange", void 0);
__decorate([
    typeorm_1.Column("daterange", { array: true }),
    __metadata("design:type", Array)
], PostArrays.prototype, "daterange", void 0);
PostArrays = __decorate([
    typeorm_1.Entity("PostArrays")
], PostArrays);
exports.PostArrays = PostArrays;
//# sourceMappingURL=PostArrays.js.map