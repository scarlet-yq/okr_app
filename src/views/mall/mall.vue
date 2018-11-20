<template>
    <div>
        <Commodity></Commodity>
    </div>
</template>

<script>
    import Commodity from './components/commodity';

    export default {
        components: {
            Commodity
        },
        mounted() {
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