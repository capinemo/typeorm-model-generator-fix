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
const PostDetail_1 = require("./PostDetail");
const PostCategory_1 = require("./PostCategory");
const PostAuthor_1 = require("./PostAuthor");
const PostInformation_1 = require("./PostInformation");
const PostImage_1 = require("./PostImage");
const PostMetadata_1 = require("./PostMetadata");
let Post = class Post {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "text", void 0);
__decorate([
    typeorm_1.ManyToMany(type => PostCategory_1.PostCategory, {
    // cascade: true
    }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Post.prototype, "postCategories", void 0);
__decorate([
    typeorm_1.ManyToMany(type => PostDetail_1.PostDetail, details => details.posts, {
    // cascade: true
    }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Post.prototype, "postDetails", void 0);
__decorate([
    typeorm_1.ManyToMany(type => PostImage_1.PostImage, image => image.posts, {
    // cascade: true
    }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Post.prototype, "postImages", void 0);
__decorate([
    typeorm_1.ManyToMany(type => PostMetadata_1.PostMetadata, metadata => metadata.posts),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Post.prototype, "postMetadata", void 0);
__decorate([
    typeorm_1.ManyToMany(type => PostInformation_1.PostInformation, information => information.posts, {
    // cascade: true
    }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Post.prototype, "postInformations", void 0);
__decorate([
    typeorm_1.ManyToMany(type => PostAuthor_1.PostAuthor, author => author.posts),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Post.prototype, "postAuthors", void 0);
Post = __decorate([
    typeorm_1.Entity("Post")
], Post);
exports.Post = Post;
//# sourceMappingURL=Post.js.map