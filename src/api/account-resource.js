import axios from './config';
// import axios from 'axios';

export default {
    // 获取用户信息
    getAccount: function () {
        return axios.get('/data/user.json')
    }
}