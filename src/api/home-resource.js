import axios from './config';

export default {
    // 获取最新商品信息
    queryLatestGoodsList: function () {
        return axios.get('/data/banner.json');
    }
}