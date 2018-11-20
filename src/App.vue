<template>
  <div id="app">
      <AppHeader :path="$route.path"></AppHeader>
      <view-box ref="viewBox">
          <router-view></router-view>
      </view-box>
      <AppFooter :path="$route.path"></AppFooter>
  </div>
</template>

<script>
  import {  ViewBox } from 'vux';
  import AppHeader from './views/my-components/app-header/app-header';
  import AppFooter from './views/my-components/app-footer/app-footer';

  export default {
    components: {
        ViewBox,
        AppHeader,
        AppFooter
    },
      mounted() {
        console.log(this.$route.path)
      }
  }
</script>

<style lang="less">
  @import './assets/styles/reset.css';
    html,
    body {
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }
    #app {
        height: 100%;
    }
  .weui-tab__panel {
        padding-top: 46PX;
    }
</style>