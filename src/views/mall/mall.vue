<template>
    <div>
        <h1>this is mall huhdu page</h1>
        <Loading :show="show" :text="text"></Loading>
        <p class="params">哈哈哈少有的好</p>
        <div class="box">dewdhhhhhhhhhhhhhh</div>
        <ul>
            <li class="item">111</li>
            <li class="item">222</li>
            <li class="item">333</li>
            <li class="item">444</li>
        </ul>
        <div class="div1">家居安静安静</div>
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
    .params {
        font-size: 20px;
    }
    .box {
        width: 1rem;
        height: 1rem;
        background-color: #f00;
    }
</style>