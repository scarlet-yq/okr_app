import axios from 'axios';
import {Notice, Message} from 'iview';
import Util from '../libs/util';

// axios 配置
axios.defaults.timeout = 30000;

// http request 拦截器
axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return new Promise.reject(err);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    response => {
        const responseData = response.data;
        const {code, data, msg} = responseData;
        switch (code) {
            case 400:
                Notice.error({
                    title: '请求参数不正确',
                    desc: msg
                });
                break;
            case 402:
                let loginData = data;
                Util.toLogin(loginURL);
                break;
            case 403:
                Notice.error({
                    title: msg
                });
                break;
            case 404:
                Notice.warning({
                    title: '接口不存在'
                });
                break;
            case 1:
                const errorMsg = msg;
                Message.warning(errorMsg || '服务器错误，请联系管理员');
                break;
            default:
                break;
        }
        if (code !== 0) {
            return Promise.reject(response);
        }else {
            return responseData;
        }
    },
    error => {
        if (error.response) {
            const errorData = error.response.data;
            if (errorData.description) {
                Notice.error({
                    title: '错误',
                    desc: errorData.description
                });
            }
        }
        return Promise.reject(error.response);
    }
);

export default axios;