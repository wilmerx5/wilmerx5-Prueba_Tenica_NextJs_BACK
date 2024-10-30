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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_utils_1 = require("../lib/bcrypt.utils");
const user_entity_1 = require("./user.entity");
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async createUser(user) {
        try {
            const existingUser = await user_entity_1.default.findOne({ email: user.email });
            if (existingUser) {
                throw new Error('Email is already registered');
            }
            const hashedPassword = await (0, bcrypt_utils_1.hashPassword)(user.password);
            const newUser = new user_entity_1.default({
                name: user.name,
                email: user.email,
                password: hashedPassword,
                phone: user.phone,
            });
            const savedUser = await newUser.save();
            return savedUser?.id;
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async logIn(user) {
        try {
            const foundUser = await user_entity_1.default.findOne({ email: user.email });
            if (!foundUser) {
                throw new Error('User or password incorrect');
            }
            const isPasswordValid = await (0, bcrypt_utils_1.comparePassword)(user.password, foundUser.password);
            if (!isPasswordValid) {
                throw new Error('User or password incorrect');
            }
            const payload = { userId: foundUser._id, email: foundUser.email };
            const token = this.jwtService.sign(payload);
            return token;
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async getUser(userId) {
        try {
            return await user_entity_1.default.findById(userId)
                .select('name email phone')
                .exec();
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map