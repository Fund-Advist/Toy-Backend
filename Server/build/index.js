"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
// .이 하나면 그 파일이 있던 폴더로
// ..이면 그 파일이 있던 폴더의 폴더로
const config_1 = __importDefault(require("./config/config"));
const diary_1 = __importDefault(require("./routes/diary"));
const app = express_1.default();
//mongoose 연결
mongoose_1.default
    .connect(config_1.default.mongo.url, config_1.default.mongo.options)
    .then((result) => {
    console.log('connected');
})
    .catch((error) => {
    console.log(error.message);
});
// log 정보 보기
app.use((req, res, next) => {
    console.log(`METHOD : [${req.method}] - URL : [${req.url}] - STATUS : [${res.statusCode}] - IP : [${req.socket}]`);
    next();
});
//body-parser 등록 
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// cors 등록
app.use(cors_1.default());
// 페이지 상 그냥 띄우기
app.get("/", (req, res, next) => {
    res.send("hello");
});
// 라우터를 사용해보자
app.use('/diary', diary_1.default);
app.use((req, res, next) => {
    const error = new Error('Not Found');
    res.status(404).json({
        message: error.message
    });
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("start" + port));
//# sourceMappingURL=index.js.map