"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
router.get("/", (_req, res) => {
    res.send("fetching all entry diaries");
});
router.post("/", (_req, res) => {
    res.send("Saving a diary");
});
exports.default = router;
