
import express from 'express'
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
// .이 하나면 그 파일이 있던 폴더로
// ..이면 그 파일이 있던 폴더의 폴더로
import config from './config/config';
import diaryRoutes from './routes/diary';

const app = express();

//mongoose 연결

mongoose
.connect(config.mongo.url, config.mongo.options)
.then((result) => {
       console.log('connected');
})
.catch((error) => {
       console.log(error.message);
});


// log 정보 보기
app.use((req : express.Request , res : express.Response, next : express.NextFunction) => {
       console.log(`METHOD : [${req.method}] - URL : [${req.url}] - STATUS : [${res.statusCode}] - IP : [${req.socket}]`);
       next();
});

//body-parser 등록 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended : true}));
// cors 등록
app.use(cors());

// 페이지 상 그냥 띄우기
app.get("/", (req : express.Request , res : express.Response, next : express.NextFunction) => {
       res.send("hello");
     });

// 라우터를 사용해보자
app.use('/diary', diaryRoutes);
app.use((req : express.Request , res : express.Response, next : express.NextFunction) => {
       const error = new Error('Not Found');
       res.status(404).json({
              message : error.message
       });
});

const port = process.env.PORT || 5000;
app.listen(port,()=>console.log("start"+port));