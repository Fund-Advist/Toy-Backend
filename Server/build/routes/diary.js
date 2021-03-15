"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const diary_1 = __importDefault(require("../controllers/diary"));
const router = express_1.default.Router();
router.post('/create/diary', diary_1.default.createDiary);
router.get('/get/diarys', diary_1.default.getAllDiarys);
module.exports = router;
//# sourceMappingURL=diary.js.map