import mongoose, { Schema } from 'mongoose';
import Diary from '../interfaces/diary';

//{ date : "2020131", title : "test2", imgList : "", content : "아아2" } 
const dairySchema : Schema = new Schema( {
    // required : 꼭 입력해야 한다. 
    title : {type : String, required : true}, 
    content : String,
    extraInformation : String
},
{
    // 업데이트 된 날짜 자동으로 알려줌
    timestamps : true
});

// 이벤트를 주는 것-스키마에 붙는 함수
// pre : ''하기 전
// post : '' 한 후
dairySchema.post<Diary>('save', function(this : Diary) {
    this.extraInformation = "처음 등록하고 내용을 수정한 적 있음";
})
// interface 형식이 Diary를 Diary스키마에 넣는다(정의는 위에 diarySchema) 
export default mongoose.model<Diary>('Diary', dairySchema);
