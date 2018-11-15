import axios from './config';
export default {
    // 获取用户信息
    getAccount: function () {
        return axios.get('/data/user.json')
    }
}