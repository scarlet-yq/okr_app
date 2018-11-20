<template>
    <div>
        <Commodity v-for="(item, index) in commodityList" :key="index" :data="item"></Commodity>
    </div>
</template>

<script>
    import {commodityResource} from '../../api';
    import Commodity from './components/commodity';

    export default {
        components: {
            Commodity
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
                        // console.log('mall', data);
                        this.commodityList = data;

                    }
                })
        }
    }
</script>

<style>
    @import './mall.css';
    @import './mall.less';
    .params {
        font-size: 37.5px;
    }
    .box {
        width: 1rem;
        height: 1rem;
        /*background-color: #f00;*/
    }
</style>