// 다른 파일 어디서든 그 값이 들어간 변수 사용 가능!
// 보안..?
import dotenv from 'dotenv';
import _ from 'lodash';
// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

let config;

if (!('error' in envFound)) {
    config = envFound.parsed;
  } else {
    config = {};
    _.each(process.env, (value, key) => config[key] = value);
  }
  

const mongo_user = process.env.MONGO_USERNAME;
const mongo_pass = process.env.MONGO_PASSWORD;
const mongo_host = process.env.MONGO_HOST;
const MONGO_OPTIONS = {
    useNewUrlParser : true,    
    useFindAndModify : false,  
    useCreateIndex : true,     
    useUnifiedTopology : true
};
const MONGO = {
    host : mongo_host,
    username : mongo_user,
    password : mongo_pass,
    options : MONGO_OPTIONS,
    url : `mongodb+srv://${mongo_user}:${mongo_pass}@${mongo_host}`
};

const server_host = process.env.SERVER_HOSTNAME;


const SERVER = {
    hostname : server_host
};

config = {
    mongo : MONGO,
    server : SERVER
};

export default config;