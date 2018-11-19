<template>
    <x-header v-show="isShow" style="background-color: #11C2EE;" :left-options="{showBack: false}">OKR 系統</x-header>
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