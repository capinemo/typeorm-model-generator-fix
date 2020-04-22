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
let EverythingEntity = class EverythingEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], EverythingEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], EverythingEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ length: 32 }),
    __metadata("design:type", String)
], EverythingEntity.prototype, "shortTextColumn", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], EverythingEntity.prototype, "numberColumn", void 0);
__decorate([
    typeorm_1.Column("integer"),
    __metadata("design:type", Number)
], EverythingEntity.prototype, "integerColumn", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], EverythingEntity.prototype, "intColumn", void 0);
__decorate([
    typeorm_1.Column("smallint"),
    __metadata("design:type", Number)
], EverythingEntity.prototype, "smallintColumn", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], EverythingEntity.prototype, "date", void 0);
EverythingEntity = __decorate([
    typeorm_1.Entity("EverythingEntity")
], EverythingEntity);
exports.EverythingEntity = EverythingEntity;
//# sourceMappingURL=EverythingEntity.js.map