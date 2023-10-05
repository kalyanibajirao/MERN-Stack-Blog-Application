import axios from 'axios';
import { API_NOTIFICATION_MESSAGE } from '../constants/config.js';

const axiosInstance = axios.create({
    baseURL : API_URL,
    timeout: 10000,
    headers: {
        "Content-Type" : "application/json"
    }
})

axiosInstance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        //stop global loader here
        return processResponse(response);
    },
    function (error) {
        // stop global loader here
        return Promise.reject(processResponse(error));
    }
)
////////////////
//if success -> return {isSuccess: true, data: object}
//If fail => return (isFailure:true, status: string, msg:string, code:int)
///////////////////////


const processResponse = (response) => {
    if (response?.status === 200) {
        return {isSuccess:true, data: response.data}
    }else {
        isFailure : true;
        status: response?.status;
        msg: response?.msg; 
        code: response?.code
    }
}

const processError = (error) => {
    if (error.response){
        //response made and server respobded with a status other
        //that falls out of 200.xxx
        console.log("ERROR IN RESPONSE:", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGE.responseFailure,
            code: error.response.status
        }
    }else if (error.request){
        //request made but no response received
        console.log("ERROR IN REQUEST:", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGE.requestfailure,
            code: ""
        }

    }else {
        // something happed in setting up request that triggers an error
        console.log("ERROR IN NETWORK:", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGE.networkError,
            code: ""
        }
    }
}

const API = {};