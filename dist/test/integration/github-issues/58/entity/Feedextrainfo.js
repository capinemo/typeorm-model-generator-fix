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
const Users_1 = require("./Users");
const Quests_1 = require("./Quests");
let Feedextrainfo = class Feedextrainfo {
};
__decorate([
    typeorm_1.PrimaryColumn({ name: "FeedOwnerId" }),
    __metadata("design:type", Number)
], Feedextrainfo.prototype, "feedOwnerId", void 0);
__decorate([
    typeorm_1.PrimaryColumn({ name: "QuestId" }),
    __metadata("design:type", Number)
], Feedextrainfo.prototype, "questId", void 0);
__decorate([
    typeorm_1.PrimaryColumn({ name: "ReaderId" }),
    __metadata("design:type", Number)
], Feedextrainfo.prototype, "readerId", void 0);
__decorate([
    typeorm_1.OneToOne(type => Users_1.Users, FeedOwnerId => FeedOwnerId.feedextrainfo),
    typeorm_1.JoinColumn({ name: "FeedOwnerId" }),
    __metadata("design:type", Users_1.Users)
], Feedextrainfo.prototype, "feedOwner", void 0);
__decorate([
    typeorm_1.OneToOne(type => Quests_1.Quests, QuestId => QuestId.feedextrainfo),
    typeorm_1.JoinColumn({ name: "QuestId" }),
    __metadata("design:type", Quests_1.Quests)
], Feedextrainfo.prototype, "quest", void 0);
__decorate([
    typeorm_1.OneToOne(type => Users_1.Users, ReaderId => ReaderId.feedextrainfo2),
    typeorm_1.JoinColumn({ name: "ReaderId" }),
    __metadata("design:type", Users_1.Users)
], Feedextrainfo.prototype, "reader", void 0);
__decorate([
    typeorm_1.Column("int", {
        name: "MostUpdatedFeedEntryIdUserRead"
    }),
    __metadata("design:type", Number)
], Feedextrainfo.prototype, "mostUpdatedFeedEntryIdUserRead", void 0);
Feedextrainfo = __decorate([
    typeorm_1.Entity("feedextrainfo"),
    typeorm_1.Index("feedExtraInfo_FeedOwnerId_idx", ["feedOwnerId"], { unique: true }),
    typeorm_1.Index("feedExtraInfo_ReaderId_idx", ["readerId"], { unique: true }),
    typeorm_1.Index("feedExtraInfo_QuestId_idx", ["questId"], { unique: true })
], Feedextrainfo);
exports.Feedextrainfo = Feedextrainfo;
//# sourceMappingURL=Feedextrainfo.js.map