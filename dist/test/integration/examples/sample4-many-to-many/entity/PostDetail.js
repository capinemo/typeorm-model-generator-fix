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
let PostDetail = class PostDetail {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PostDetail.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PostDetail.prototype, "authorName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PostDetail.prototype, "comment", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PostDetail.prototype, "metadata", void 0);
__decorate([
    typeorm_1.ManyToMany(type => Post_1.Post, post => post.postDetails),
    __metadata("design:type", Array)
], PostDetail.prototype, "posts", void 0);
PostDetail = __decorate([
    typeorm_1.Entity("PostDetail")
], PostDetail);
exports.PostDetail = PostDetail;
//# sourceMappingURL=PostDetail.js.map