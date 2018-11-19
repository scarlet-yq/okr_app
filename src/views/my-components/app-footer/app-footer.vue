<template>
    <tabbar v-show="show" >
        <tabbar-item  v-for="(item, index) in tabbarData" :key="index" :link="item.link" :selected="index === 0 ? true : false">
            <img slot="icon" :src="item.icon" />
            <img slot="icon-active" :src="item.icon_active" />
            <span slot="label">{{ item.label }}</span>
        </tabbar-item>
    </tabbar>
</template>

<script>
    import { Tabbar, TabbarItem } from 'vux';
    export default {
        props: ['path'],
        components: {
            Tabbar,
            TabbarItem
        },
       data() {
           return {
               tabbarData: [
                   {label: '首页', link: '/home', icon: 'data/image/home-icon.png', icon_active: 'data/image/home-icon-active.png'},
                   {label: '商城', link: '/mall', icon: 'data/image/mall-icon.png', icon_active: 'data/image/mall-icon-active.png'},
                   {label: '我的', link: '/mine', icon: 'data/image/mine-icon.png', icon_active: 'data/image/mine-icon-active.png'}
               ]
           }
       },
        mounted() {
            console.log('app-footer path', this.path)
        },
        computed: {
            show() {
                return this.path === '/home' || this.path=== '/mall' || this.path ==='/mine';
            }
        }
    }
</script>

<style lang="less">

</style>