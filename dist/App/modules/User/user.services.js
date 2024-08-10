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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const createUserInToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    payload.role = "user";
});
const getAllUserInToDb = (query) => __awaiter(void 0, void 0, void 0, function* () {
});
const getSingleUserInToDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
});
const updateUserInToDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
});
const deleteUserInToDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.UserServices = {
    createUserInToDb,
    getAllUserInToDb,
    getSingleUserInToDb,
    updateUserInToDb,
    deleteUserInToDb
};
