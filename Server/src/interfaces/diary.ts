import {Document} from 'mongoose';

export default interface Diary extends Document {
    title : String, 
    content : String,
    extraInformation : String
}