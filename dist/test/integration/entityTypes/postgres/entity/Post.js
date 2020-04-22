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
let Post = class Post {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("int2"),
    __metadata("design:type", Number)
], Post.prototype, "int2", void 0);
__decorate([
    typeorm_1.Column("int4"),
    __metadata("design:type", Number)
], Post.prototype, "int4", void 0);
__decorate([
    typeorm_1.Column("int8"),
    __metadata("design:type", String)
], Post.prototype, "int8", void 0);
__decorate([
    typeorm_1.Column("smallint"),
    __metadata("design:type", Number)
], Post.prototype, "smallint", void 0);
__decorate([
    typeorm_1.Column("integer"),
    __metadata("design:type", Number)
], Post.prototype, "integer", void 0);
__decorate([
    typeorm_1.Column("bigint"),
    __metadata("design:type", String)
], Post.prototype, "bigint", void 0);
__decorate([
    typeorm_1.Column("decimal"),
    __metadata("design:type", String)
], Post.prototype, "decimal", void 0);
__decorate([
    typeorm_1.Column("numeric"),
    __metadata("design:type", String)
], Post.prototype, "numeric", void 0);
__decorate([
    typeorm_1.Column("real"),
    __metadata("design:type", Number)
], Post.prototype, "real", void 0);
__decorate([
    typeorm_1.Column("float"),
    __metadata("design:type", Number)
], Post.prototype, "float", void 0);
__decorate([
    typeorm_1.Column("float4"),
    __metadata("design:type", Number)
], Post.prototype, "float4", void 0);
__decorate([
    typeorm_1.Column("float8"),
    __metadata("design:type", Number)
], Post.prototype, "float8", void 0);
__decorate([
    typeorm_1.Column("double precision"),
    __metadata("design:type", Number)
], Post.prototype, "doublePrecision", void 0);
__decorate([
    typeorm_1.Column("money"),
    __metadata("design:type", String)
], Post.prototype, "money", void 0);
__decorate([
    typeorm_1.Column("character varying"),
    __metadata("design:type", String)
], Post.prototype, "characterVarying", void 0);
__decorate([
    typeorm_1.Column("varchar"),
    __metadata("design:type", String)
], Post.prototype, "varchar", void 0);
__decorate([
    typeorm_1.Column("character"),
    __metadata("design:type", String)
], Post.prototype, "character", void 0);
__decorate([
    typeorm_1.Column("char"),
    __metadata("design:type", String)
], Post.prototype, "char", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], Post.prototype, "text", void 0);
__decorate([
    typeorm_1.Column("citext"),
    __metadata("design:type", String)
], Post.prototype, "citext", void 0);
__decorate([
    typeorm_1.Column("hstore"),
    __metadata("design:type", String)
], Post.prototype, "hstore", void 0);
__decorate([
    typeorm_1.Column("bytea"),
    __metadata("design:type", Buffer)
], Post.prototype, "bytea", void 0);
__decorate([
    typeorm_1.Column("bit"),
    __metadata("design:type", String)
], Post.prototype, "bit", void 0);
__decorate([
    typeorm_1.Column("varbit"),
    __metadata("design:type", String)
], Post.prototype, "varbit", void 0);
__decorate([
    typeorm_1.Column("bit varying"),
    __metadata("design:type", String)
], Post.prototype, "bitVarying", void 0);
__decorate([
    typeorm_1.Column("timetz"),
    __metadata("design:type", String)
], Post.prototype, "timetz", void 0);
__decorate([
    typeorm_1.Column("timestamptz"),
    __metadata("design:type", Date)
], Post.prototype, "timestamptz", void 0);
__decorate([
    typeorm_1.Column("timestamp"),
    __metadata("design:type", Date)
], Post.prototype, "timestamp", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone"),
    __metadata("design:type", Date)
], Post.prototype, "timestampWithoutTimeZone", void 0);
__decorate([
    typeorm_1.Column("timestamp with time zone"),
    __metadata("design:type", Date)
], Post.prototype, "timestampWithTimeZone", void 0);
__decorate([
    typeorm_1.Column("date"),
    __metadata("design:type", String)
], Post.prototype, "date", void 0);
__decorate([
    typeorm_1.Column("time"),
    __metadata("design:type", String)
], Post.prototype, "time", void 0);
__decorate([
    typeorm_1.Column("time without time zone"),
    __metadata("design:type", String)
], Post.prototype, "timeWithoutTimeZone", void 0);
__decorate([
    typeorm_1.Column("time with time zone"),
    __metadata("design:type", String)
], Post.prototype, "timeWithTimeZone", void 0);
__decorate([
    typeorm_1.Column("interval"),
    __metadata("design:type", Object)
], Post.prototype, "interval", void 0);
__decorate([
    typeorm_1.Column("bool"),
    __metadata("design:type", Boolean)
], Post.prototype, "bool", void 0);
__decorate([
    typeorm_1.Column("boolean"),
    __metadata("design:type", Boolean)
], Post.prototype, "boolean", void 0);
__decorate([
    typeorm_1.Column("enum", { enum: ["A", "B", "C"] }),
    __metadata("design:type", String)
], Post.prototype, "enum", void 0);
__decorate([
    typeorm_1.Column("point"),
    __metadata("design:type", Object)
], Post.prototype, "point", void 0);
__decorate([
    typeorm_1.Column("line"),
    __metadata("design:type", String)
], Post.prototype, "line", void 0);
__decorate([
    typeorm_1.Column("lseg"),
    __metadata("design:type", Object)
], Post.prototype, "lseg", void 0);
__decorate([
    typeorm_1.Column("box"),
    __metadata("design:type", Object)
], Post.prototype, "box", void 0);
__decorate([
    typeorm_1.Column("path"),
    __metadata("design:type", String)
], Post.prototype, "path", void 0);
__decorate([
    typeorm_1.Column("polygon"),
    __metadata("design:type", String)
], Post.prototype, "polygon", void 0);
__decorate([
    typeorm_1.Column("circle"),
    __metadata("design:type", Object)
], Post.prototype, "circle", void 0);
__decorate([
    typeorm_1.Column("cidr"),
    __metadata("design:type", String)
], Post.prototype, "cidr", void 0);
__decorate([
    typeorm_1.Column("inet"),
    __metadata("design:type", String)
], Post.prototype, "inet", void 0);
__decorate([
    typeorm_1.Column("macaddr"),
    __metadata("design:type", String)
], Post.prototype, "macaddr", void 0);
__decorate([
    typeorm_1.Column("tsvector"),
    __metadata("design:type", String)
], Post.prototype, "tsvector", void 0);
__decorate([
    typeorm_1.Column("tsquery"),
    __metadata("design:type", String)
], Post.prototype, "tsquery", void 0);
__decorate([
    typeorm_1.Column("uuid"),
    __metadata("design:type", String)
], Post.prototype, "uuid", void 0);
__decorate([
    typeorm_1.Column("xml"),
    __metadata("design:type", String)
], Post.prototype, "xml", void 0);
__decorate([
    typeorm_1.Column("json"),
    __metadata("design:type", Object)
], Post.prototype, "json", void 0);
__decorate([
    typeorm_1.Column("jsonb"),
    __metadata("design:type", Object)
], Post.prototype, "jsonb", void 0);
__decorate([
    typeorm_1.Column("int4range"),
    __metadata("design:type", String)
], Post.prototype, "int4range", void 0);
__decorate([
    typeorm_1.Column("int8range"),
    __metadata("design:type", String)
], Post.prototype, "int8range", void 0);
__decorate([
    typeorm_1.Column("numrange"),
    __metadata("design:type", String)
], Post.prototype, "numrange", void 0);
__decorate([
    typeorm_1.Column("tsrange"),
    __metadata("design:type", String)
], Post.prototype, "tsrange", void 0);
__decorate([
    typeorm_1.Column("tstzrange"),
    __metadata("design:type", String)
], Post.prototype, "tstzrange", void 0);
__decorate([
    typeorm_1.Column("daterange"),
    __metadata("design:type", String)
], Post.prototype, "daterange", void 0);
__decorate([
    typeorm_1.Column("geography"),
    __metadata("design:type", String)
], Post.prototype, "geography", void 0);
Post = __decorate([
    typeorm_1.Entity("Post")
], Post);
exports.Post = Post;
//# sourceMappingURL=Post.js.map