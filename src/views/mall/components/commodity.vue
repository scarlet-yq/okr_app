<template>
    <router-link tag="div" :to="'/commodity-detail/' + data.id" class="commodity-card">
        <div class="img">
            <img :src="data.src">
        </div>
        <div class="content">
            <h3 class="productName">{{ data.productName }}</h3>
            <span class="status">{{ data.statusText }}</span>
            <p class="points">积分：{{ data.points }}</p>
            <p class="join"> {{ data.partakePeople }}人参与</p>
        </div>
    </router-link>
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
        props: ["data"],
        mounted() {
            /*commodityResource.queryAllCommodityList()
                .then(response => {
                    let {code, data} = response;
                    if (code === 0) {
                        console.log('mall', data);
                        this.commodityList = data;
                    }
                })*/
        }
    }
</script>

<style lang="less">
    @import './commodity.less';

</style>