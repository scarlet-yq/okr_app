<template>
    <div>
        <h1>this is mall huhdu page</h1>
        <Loading :show="show" :text="text"></Loading>
        <button-tab>
            <button-tab-item>{{ today }}</button-tab-item>
            <button-tab-item selected>{{ week }}</button-tab-item>
            <button-tab-item>{{ month }}</button-tab-item>
        </button-tab>
    </div>
</template>

<script>
    import {Loading, ButtonTab, ButtonTabItem} from 'vux';
    export default {
        components: {
            Loading,
            ButtonTab,
            ButtonTabItem
        },
        data() {
          return {
              show: true,
              text: '厉害了',
              today: "今天",
              week: "本周",
              month: "本月"
          }
        },
        mounted() {

        }
    }
</script>

<style>

</style>