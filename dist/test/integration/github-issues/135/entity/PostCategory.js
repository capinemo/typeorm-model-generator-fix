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
const Post_1 = require("./Post");
let PostCategory = class PostCategory {
};
__decorate([
    typeorm_1.Column("int", {
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], PostCategory.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToMany(type => Post_1.Post, Post => Post.id),
    __metadata("design:type", Array)
], PostCategory.prototype, "posts", void 0);
PostCategory = __decorate([
    typeorm_1.Entity("PostCategory")
], PostCategory);
exports.PostCategory = PostCategory;
//# sourceMappingURL=PostCategory.js.map