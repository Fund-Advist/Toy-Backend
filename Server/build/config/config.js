"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 다른 파일 어디서든 그 값이 들어간 변수 사용 가능!
// 보안..?
const dotenv_1 = __importDefault(require("dotenv"));
const envFound = dotenv_1.default.config();
if (envFound.error) {
    // This error should crash whole process
    throw envFound.error;
}
const mongo_user = process.env.MONGO_USERNAME;
const mongo_pass = process.env.MONGO_PASSWORD;
const mongo_host = process.env.MONGO_HOST;
const MONGO_OPTIONS = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
};
const MONGO = {
    host: mongo_host,
    username: mongo_user,
    password: mongo_pass,
    options: MONGO_OPTIONS,
    url: `mongodb+srv://${mongo_user}:${mongo_pass}@${mongo_host}`
};
const server_host = process.env.SERVER_HOSTNAME;
const server_port = process.env.PORT || 5000;
const SERVER = {
    hostname: server_host,
    port: server_port
};
const config = {
    mongo: MONGO,
    server: SERVER
};
exports.default = config;
//# sourceMappingURL=config.js.map