"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true, default: 'pending' },
    userId: { type: String, required: true },
    createdAt: {
        type: Date,
        default: () => {
            const date = new Date();
            date.setUTCHours(date.getUTCHours() - 5);
            return date;
        }
    },
    expiresAt: {
        type: Date,
        default: () => {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + 15);
            return currentDate;
        }
    }
});
const TaskModel = mongoose_1.default.model('Task', TaskSchema);
exports.default = TaskModel;
//# sourceMappingURL=task.entity.js.map