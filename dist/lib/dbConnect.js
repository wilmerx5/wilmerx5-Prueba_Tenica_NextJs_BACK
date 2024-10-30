"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://wilmerx6:pruebafullstack1@pruebanextjs.lj2td.mongodb.net/?retryWrites=true&w=majority&appName=PruebaNextJS';
if (!MONGODB_URI) {
    throw new Error('Por favor define la variable de entorno MONGODB_URI');
}
let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}
async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };
        cached.promise = mongoose_1.default.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
exports.default = dbConnect;
//# sourceMappingURL=dbConnect.js.map