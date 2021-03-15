import {NextFunction, Request, Response} from 'express';
import Diary from '../models/diary';
import mongoose from 'mongoose';

const createDiary = (req : Request, res : Response, next : NextFunction) => {
    let {title, content} = req.body;

    const diary = new Diary ({
        _id : new mongoose.Types.ObjectId(),
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
            diary : result
        });
    })
    .catch((error) => {
        // 500-> 실패 했다면
        return res.status(500).json({
            // message에 에러 메세지를 넣어서 보낸다
            message : error.message,
            error
        });
    }) 
}

const getAllDiarys = (req: Request, res: Response, next : NextFunction) => {
    Diary.find()
    .exec()
    .then(results => {
        // 200-> 성공 했다면
        return res.status(200).json({
            // results(Diary.find())를 diarys 라는 이름으로 보냄
            diarys : results,
            // results의 개수를 count라는 이름으로 보냄
            count : results.length
        });
    })
    .catch((error) => {
        // 500-> 실패 했다면
        return res.status(500).json({
            // message에 에러 메세지를 넣어서 보낸다
            message : error.message,
            error
        });
    }) 
}

export default {createDiary, getAllDiarys};
