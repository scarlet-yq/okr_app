<template>
    <x-table :cell-bordered="false" :content-bordered="false"  style="background-color:#fff;font-size:15px;">
        <thead>
        <tr style="background-color: #F7F7F7">
            <th>商品名称</th>
            <th>姓名</th>
            <th>积分数</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in conversionlist" :key="index">
                <td>{{ item.productName }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.points }}</td>
            </tr>
        </tbody>
    </x-table>
</template>

<script>
    import {XTable} from 'vux';
    import {homeResource} from '../../../api';

    export default {
        components: {
            XTable
        },
        data() {
          return {
              conversionlist: []
          }
        },
        mounted() {
            homeResource.list()
                .then(response => {
                    let {code, data} = response;
                    if (code === 0) {
                        console.log("goods", data)
                        this.conversionlist = data;
                    }
                })
        }
    }
</script>

<style lang="less">

</style>