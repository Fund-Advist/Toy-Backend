"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const diary_1 = __importDefault(require("../models/diary"));
const mongoose_1 = __importDefault(require("mongoose"));
const createDiary = (req, res, next) => {
    let { title, content } = req.body;
    const diary = new diary_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        title,
        content
    });
    // mongodb의 insert()는 id의 duplicate 체크를 진행하지만(동일 id있을 시 오류), 
    // save()는 동일 id값이 들어오면 update를 한다. 없으면 그냥 추가
    // 그리고 save() 함수 변경시 변경/추가 여부를 결과값으로 알려준다.
    return diary.save()
        .then(result => {
        // 201-> 성공시
        return res.status(201).json({
            // result를 diary에 담아서 보내줘라
            diary: result
        });
    })
        .catch((error) => {
        // 500-> 실패 했다면
        return res.status(500).json({
            // message에 에러 메세지를 넣어서 보낸다
            message: error.message,
            error
        });
    });
};
const getAllDiarys = (req, res, next) => {
    diary_1.default.find()
        .exec()
        .then(results => {
        // 200-> 성공 했다면
        return res.status(200).json({
            // results(Diary.find())를 diarys 라는 이름으로 보냄
            diarys: results,
            // results의 개수를 count라는 이름으로 보냄
            count: results.length
        });
    })
        .catch((error) => {
        // 500-> 실패 했다면
        return res.status(500).json({
            // message에 에러 메세지를 넣어서 보낸다
            message: error.message,
            error
        });
    });
};
exports.default = { createDiary, getAllDiarys };
//# sourceMappingURL=diary.js.map