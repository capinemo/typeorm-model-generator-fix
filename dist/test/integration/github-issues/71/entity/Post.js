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
const PostReader_1 = require("./PostReader");
const PostAuthor_1 = require("./PostAuthor");
const PostCategory_1 = require("./PostCategory");
const PostDetails_1 = require("./PostDetails");
let Post = class Post {
};
__decorate([
    typeorm_1.Column("int", {
        // nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(type => PostAuthor_1.PostAuthor, PostAuthor => PostAuthor.id, {
    // onDelete: "CASCADE",
    // onUpdate: "CASCADE"
    }),
    __metadata("design:type", PostAuthor_1.PostAuthor)
], Post.prototype, "postAuthor", void 0);
__decorate([
    typeorm_1.OneToOne(type => PostReader_1.PostReader, PostReader => PostReader.id),
    __metadata("design:type", PostReader_1.PostReader)
], Post.prototype, "postReader", void 0);
__decorate([
    typeorm_1.OneToOne(type => PostCategory_1.PostCategory, PostCategory => PostCategory.id, {
    // onDelete: "RESTRICT",
    // onUpdate: "RESTRICT"
    }),
    __metadata("design:type", PostCategory_1.PostCategory)
], Post.prototype, "postCategory", void 0);
__decorate([
    typeorm_1.OneToOne(type => PostDetails_1.PostDetails, PostDetails => PostDetails.id, {
    // onDelete: "SET NULL",
    // onUpdate: "SET NULL"
    }),
    __metadata("design:type", PostDetails_1.PostDetails)
], Post.prototype, "postDetails", void 0);
Post = __decorate([
    typeorm_1.Entity("Post")
], Post);
exports.Post = Post;
//# sourceMappingURL=Post.js.map