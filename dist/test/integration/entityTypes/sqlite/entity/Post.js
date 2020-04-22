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
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], Post.prototype, "int", void 0);
__decorate([
    typeorm_1.Column("integer"),
    __metadata("design:type", Number)
], Post.prototype, "integer", void 0);
__decorate([
    typeorm_1.Column("int2"),
    __metadata("design:type", Number)
], Post.prototype, "int2", void 0);
__decorate([
    typeorm_1.Column("int8"),
    __metadata("design:type", Number)
], Post.prototype, "int8", void 0);
__decorate([
    typeorm_1.Column("tinyint"),
    __metadata("design:type", Number)
], Post.prototype, "tinyint", void 0);
__decorate([
    typeorm_1.Column("smallint"),
    __metadata("design:type", Number)
], Post.prototype, "smallint", void 0);
__decorate([
    typeorm_1.Column("mediumint"),
    __metadata("design:type", Number)
], Post.prototype, "mediumint", void 0);
__decorate([
    typeorm_1.Column("bigint"),
    __metadata("design:type", String)
], Post.prototype, "bigint", void 0);
__decorate([
    typeorm_1.Column("unsigned big int"),
    __metadata("design:type", String)
], Post.prototype, "unsignedBigInt", void 0);
__decorate([
    typeorm_1.Column("character"),
    __metadata("design:type", String)
], Post.prototype, "character", void 0);
__decorate([
    typeorm_1.Column("varchar"),
    __metadata("design:type", String)
], Post.prototype, "varchar", void 0);
__decorate([
    typeorm_1.Column("varying character"),
    __metadata("design:type", String)
], Post.prototype, "varyingCharacter", void 0);
__decorate([
    typeorm_1.Column("nchar"),
    __metadata("design:type", String)
], Post.prototype, "nchar", void 0);
__decorate([
    typeorm_1.Column("native character"),
    __metadata("design:type", String)
], Post.prototype, "nativeCharacter", void 0);
__decorate([
    typeorm_1.Column("nvarchar"),
    __metadata("design:type", String)
], Post.prototype, "nvarchar", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], Post.prototype, "text", void 0);
__decorate([
    typeorm_1.Column("blob"),
    __metadata("design:type", Buffer)
], Post.prototype, "blob", void 0);
__decorate([
    typeorm_1.Column("clob"),
    __metadata("design:type", String)
], Post.prototype, "clob", void 0);
__decorate([
    typeorm_1.Column("real"),
    __metadata("design:type", Number)
], Post.prototype, "real", void 0);
__decorate([
    typeorm_1.Column("double"),
    __metadata("design:type", Number)
], Post.prototype, "double", void 0);
__decorate([
    typeorm_1.Column("double precision"),
    __metadata("design:type", Number)
], Post.prototype, "doublePrecision", void 0);
__decorate([
    typeorm_1.Column("float"),
    __metadata("design:type", Number)
], Post.prototype, "float", void 0);
__decorate([
    typeorm_1.Column("numeric"),
    __metadata("design:type", Number)
], Post.prototype, "numeric", void 0);
__decorate([
    typeorm_1.Column("decimal"),
    __metadata("design:type", Number)
], Post.prototype, "decimal", void 0);
__decorate([
    typeorm_1.Column("boolean"),
    __metadata("design:type", Boolean)
], Post.prototype, "boolean", void 0);
__decorate([
    typeorm_1.Column("date"),
    __metadata("design:type", String)
], Post.prototype, "date", void 0);
__decorate([
    typeorm_1.Column("datetime"),
    __metadata("design:type", Date)
], Post.prototype, "datetime", void 0);
Post = __decorate([
    typeorm_1.Entity("Post")
], Post);
exports.Post = Post;
//# sourceMappingURL=Post.js.map