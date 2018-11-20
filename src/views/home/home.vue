<template>
    <div>
        <LatestGoods></LatestGoods>
        <MyIntegral></MyIntegral>
        <ConversionRecord></ConversionRecord>
    </div>
</template>

<script>
    import LatestGoods from './components/latestGoods';
    import MyIntegral from './components/myIntegral';
    import ConversionRecord from './components/conversionRecord';
    export default {
        components: {
            LatestGoods,
            MyIntegral,
            ConversionRecord
        },
        mounted() {
//            console.log(this.$route.path);
        }
    }
</script>

<style>

</style>