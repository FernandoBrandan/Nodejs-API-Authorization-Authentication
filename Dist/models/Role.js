"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLES = void 0;
const mongoose_1 = require("mongoose");
exports.ROLES = ["user", "moderator", "admin"];
const roleSchema = new mongoose_1.Schema({
    name: String,
}, {
    versionKey: false,
});
exports.default = (0, mongoose_1.model)("Role", roleSchema);
