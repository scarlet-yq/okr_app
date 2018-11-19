<template>
    <div>
        <LatestGoods></LatestGoods>
    </div>
</template>

<script>
    import LatestGoods from './components/latestGoods';
    export default {
        components: {
            LatestGoods
        },
        mounted() {
            console.log(this.$route.path);
        }
    }
</script>

<style>

</style>