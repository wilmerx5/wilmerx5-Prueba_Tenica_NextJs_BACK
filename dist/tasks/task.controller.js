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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const tasks_service_1 = require("./tasks.service");
let TasksController = class TasksController {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    async getTasks(request, res) {
        try {
            const userId = request['user']['userId'];
            const tasks = await this.tasksService.getAllTask(userId);
            res.status(200).json({ "status": "success", data: tasks });
        }
        catch (e) {
            res.status(400).json({ "status": "error", "message": "error fetching tasks" });
        }
    }
    async getTask(id, res) {
        try {
            const task = await this.tasksService.getTask(id);
            res.status(200).json({ "status": "success", data: task });
        }
        catch (e) {
            res.status(400).json({ "status": "error", "message": e.message });
        }
    }
    async createTask(createTaskDTO, res, request) {
        try {
            const userId = request['user']['userId'];
            const task = await this.tasksService.createTask(createTaskDTO, userId);
            res.status(201).json({ "status": "success", data: task });
        }
        catch (e) {
            res.status(400).json({ "status": "error", "message": "error creating task" });
        }
    }
    async deleteTask(id, res) {
        try {
            const idDeleted = await this.tasksService.deleteTask(id);
            res.status(200).json({ "status": "success", data: idDeleted });
        }
        catch (e) {
            res.status(400).json({ "status": "error", "message": e.message });
        }
    }
    async updateTask(id, updateTaskDTO, res) {
        try {
            const idUpdatedTask = await this.tasksService.updateTask(updateTaskDTO, id);
            res.status(200).json({ "status": "success", data: idUpdatedTask });
        }
        catch (e) {
            res.status(400).json({ "status": "error", "message": e.message });
        }
    }
};
exports.TasksController = TasksController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getTasks", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getTask", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "createTask", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "deleteTask", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "updateTask", null);
exports.TasksController = TasksController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
//# sourceMappingURL=task.controller.js.map