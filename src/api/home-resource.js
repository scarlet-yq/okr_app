import axios from './config';

export default {
    // 获取最新商品信息
    queryLatestGoodsList: function () {
        return axios.get('/data/banner.json');
    },
    // 请求当前用户的积分信息
    queryCurrentUserScoreInfo: function () {
        return axios.get('/data/integral.json');
    },
    // 获取兑换、竞拍记录
    list: function () {
        return axios.get('/data/list.json');
    }
}