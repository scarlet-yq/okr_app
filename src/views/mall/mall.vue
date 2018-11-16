<template>
    <div>
        <h1>this is mall huhdu page</h1>
        <Loading :show="show" :text="text"></Loading>
        <p class="parm">哈哈哈哈哈啊</p>
    </div>
</template>

<script>
    import {Loading} from 'vux';
    export default {
        components: {
            Loading
        },
        data() {
          return {
              show: true,
              text: '厉害了'
          }
        },
        mounted() {

        }
    }
</script>

<style>
  .parm {
    font-size:30px;
  }
</style>