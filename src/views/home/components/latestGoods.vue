<template>
    <swiper  style="width:100%; margin:0 auto;" :aspect-ratio="549/1125" loop auto :list="bannerImgList"  dots-position="center"></swiper>
</template>

<script>
    import { Swiper } from 'vux';
    import { homeResource } from '../../../api';
    export default {
        components: {
          Swiper
        },
        data() {
            return {
                bannerImgList: []
            }
        },
        mounted() {
            homeResource.queryLatestGoodsList().
                then(response => {
                    this.bannerImgList = response.data;
            })
        }
    }
</script>

<style lang="less">

</style>