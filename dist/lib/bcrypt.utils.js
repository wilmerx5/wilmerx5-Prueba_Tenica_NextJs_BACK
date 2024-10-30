"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = hashPassword;
exports.comparePassword = comparePassword;
const bcrypt = require("bcrypt");
const saltRounds = 10;
async function hashPassword(password) {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}
async function comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}
//# sourceMappingURL=bcrypt.utils.js.map