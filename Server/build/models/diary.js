"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
//{ date : "2020131", title : "test2", imgList : "", content : "아아2" } 
const dairySchema = new mongoose_1.Schema({
    // required : 꼭 입력해야 한다. 
    title: { type: String, required: true },
    content: String,
    extraInformation: String
}, {
    // 업데이트 된 날짜 자동으로 알려줌
    timestamps: true
});
// 이벤트를 주는 것-스키마에 붙는 함수
// pre : ''하기 전
// post : '' 한 후
dairySchema.post('save', function () {
    this.extraInformation = "처음 등록하고 내용을 수정한 적 있음";
});
// interface 형식이 Diary를 Diary스키마에 넣는다(정의는 위에 diarySchema) 
exports.default = mongoose_1.default.model('Diary', dairySchema);
//# sourceMappingURL=diary.js.map