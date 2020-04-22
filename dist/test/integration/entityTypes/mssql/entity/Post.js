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
    typeorm_1.Column("bigint"),
    __metadata("design:type", String)
], Post.prototype, "bigint", void 0);
__decorate([
    typeorm_1.Column("bit"),
    __metadata("design:type", Boolean)
], Post.prototype, "bit", void 0);
__decorate([
    typeorm_1.Column("decimal"),
    __metadata("design:type", Number)
], Post.prototype, "decimal", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], Post.prototype, "int", void 0);
__decorate([
    typeorm_1.Column("money"),
    __metadata("design:type", Number)
], Post.prototype, "money", void 0);
__decorate([
    typeorm_1.Column("numeric"),
    __metadata("design:type", Number)
], Post.prototype, "numeric", void 0);
__decorate([
    typeorm_1.Column("smallint"),
    __metadata("design:type", Number)
], Post.prototype, "smallint", void 0);
__decorate([
    typeorm_1.Column("smallmoney"),
    __metadata("design:type", Number)
], Post.prototype, "smallmoney", void 0);
__decorate([
    typeorm_1.Column("tinyint"),
    __metadata("design:type", Number)
], Post.prototype, "tinyint", void 0);
__decorate([
    typeorm_1.Column("float"),
    __metadata("design:type", Number)
], Post.prototype, "float", void 0);
__decorate([
    typeorm_1.Column("real"),
    __metadata("design:type", Number)
], Post.prototype, "real", void 0);
__decorate([
    typeorm_1.Column("date"),
    __metadata("design:type", Date)
], Post.prototype, "dateObj", void 0);
__decorate([
    typeorm_1.Column("datetime2"),
    __metadata("design:type", Date)
], Post.prototype, "datetime2", void 0);
__decorate([
    typeorm_1.Column("datetime"),
    __metadata("design:type", Date)
], Post.prototype, "datetime", void 0);
__decorate([
    typeorm_1.Column("datetimeoffset"),
    __metadata("design:type", Date)
], Post.prototype, "datetimeoffset", void 0);
__decorate([
    typeorm_1.Column("smalldatetime"),
    __metadata("design:type", Date)
], Post.prototype, "smalldatetime", void 0);
__decorate([
    typeorm_1.Column("time"),
    __metadata("design:type", Date)
], Post.prototype, "timeObj", void 0);
__decorate([
    typeorm_1.Column("char"),
    __metadata("design:type", String)
], Post.prototype, "char", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], Post.prototype, "text", void 0);
__decorate([
    typeorm_1.Column("varchar"),
    __metadata("design:type", String)
], Post.prototype, "varchar", void 0);
__decorate([
    typeorm_1.Column("nchar"),
    __metadata("design:type", String)
], Post.prototype, "nchar", void 0);
__decorate([
    typeorm_1.Column("ntext"),
    __metadata("design:type", String)
], Post.prototype, "ntext", void 0);
__decorate([
    typeorm_1.Column("nvarchar"),
    __metadata("design:type", String)
], Post.prototype, "nvarchar", void 0);
__decorate([
    typeorm_1.Column("binary"),
    __metadata("design:type", Buffer)
], Post.prototype, "binary", void 0);
__decorate([
    typeorm_1.Column("image"),
    __metadata("design:type", Buffer)
], Post.prototype, "image", void 0);
__decorate([
    typeorm_1.Column("varbinary"),
    __metadata("design:type", Buffer)
], Post.prototype, "varbinary", void 0);
__decorate([
    typeorm_1.Column("hierarchyid"),
    __metadata("design:type", String)
], Post.prototype, "hierarchyid", void 0);
__decorate([
    typeorm_1.Column("sql_variant"),
    __metadata("design:type", String)
], Post.prototype, "sqlVariant", void 0);
__decorate([
    typeorm_1.Column("timestamp"),
    __metadata("design:type", Date)
], Post.prototype, "timestamp", void 0);
__decorate([
    typeorm_1.Column("uniqueidentifier"),
    __metadata("design:type", String)
], Post.prototype, "uniqueidentifier", void 0);
__decorate([
    typeorm_1.Column("xml"),
    __metadata("design:type", String)
], Post.prototype, "xml", void 0);
__decorate([
    typeorm_1.Column("geometry"),
    __metadata("design:type", String)
], Post.prototype, "geometry", void 0);
__decorate([
    typeorm_1.Column("geography"),
    __metadata("design:type", String)
], Post.prototype, "geography", void 0);
Post = __decorate([
    typeorm_1.Entity("Post")
], Post);
exports.Post = Post;
//# sourceMappingURL=Post.js.map