<template>
    <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;background-color: #11C2EE;" v-show="isShow"  :left-options="{showBack: false}">OKR 系統</x-header>
</template>

<script>
    import {XHeader} from 'vux';
    export default {
        props: ['path'],
        components: {
            XHeader
        },
        computed: {
            isShow() {
                return this.path === '/home' || this.path=== '/mall' || this.path ==='/mine';
            }
        }
    }
</script>

<style lang="less">

</style>