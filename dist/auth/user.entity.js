"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSChema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, },
    phone: { type: String, required: true, },
});
const UserModel = mongoose_1.default.model('User', UserSChema);
exports.default = UserModel;
//# sourceMappingURL=user.entity.js.map