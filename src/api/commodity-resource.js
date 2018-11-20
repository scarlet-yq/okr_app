import axios from './config';

export default {
    // 获取所有商品列表
    queryAllCommodityList: function() {
        return axios.get("/data/commodityList.json");
    }
}