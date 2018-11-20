<template>
    <div class="commodity-card">
        <div class="img">
            <img src="/data/image/product1.jpg" alt="">
        </div>
        <div class="content">
            <h3 class="productName">索尼（SONY）ILCE-6000L APS-C微单数码相机标准套装 黑色（约2430万有效像素 E PZ 16-50mm镜头 a6000）</h3>
            <span class="status">竞拍</span>
            <p class="points">积分：100</p>
            <p class="join">20人参与</p>
        </div>
    </div>
</template>

<script>
    import {Panel} from 'vux';
    import {commodityResource} from '../../../api';

    export default {
        components: {
            Panel
        },
        data() {
            return {
                commodityList: []
            }
        },
        mounted() {
            commodityResource.queryAllCommodityList()
                .then(response => {
                    let {code, data} = response;
                    if (code === 0) {
                        console.log('mall', data);
                        this.commodityList = data;
                    }
                })
        }
    }
</script>

<style lang="less">
    @import './commodity.less';

</style>