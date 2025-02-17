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
exports.getMenuItemsByMenuId = exports.createMenuItem = void 0;
const db_1 = __importDefault(require("../config/db"));
const createMenuItem = (menu_id, name, description, price) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query("INSERT INTO deepnetsoftschema.menu_item (menu_id, name, description, price) VALUES ($1, $2, $3, $4) RETURNING *", [menu_id, name, description, price]);
    return result.rows[0];
});
exports.createMenuItem = createMenuItem;
const getMenuItemsByMenuId = (menu_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query("SELECT * FROM deepnetsoftschema.menu_item WHERE menu_id = $1", [menu_id]);
    return result.rows;
});
exports.getMenuItemsByMenuId = getMenuItemsByMenuId;
