"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoles = void 0;
const Role_1 = __importDefault(require("../models/Role"));
const createRoles = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const count = yield Role_1.default.estimatedDocumentCount();
        if (count > 0)
            return;
        const values = yield Promise.all([
            new Role_1.default({ name: "user" }).save(),
            new Role_1.default({ name: "moderator" }).save(),
            new Role_1.default({ name: "admin" }).save()
        ]);
        console.log(values);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createRoles = createRoles;
