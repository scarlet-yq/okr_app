import Vue from 'vue';
import iView from 'iview';
import Util from '../libs/util';
import {routers, otherRouter, appRouter} from './router';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    routes: routers
};

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    const curRouterObj = Util.getRouterObjByName([...appRouter], to.name);
    if (curRouterObj && curRouterObj.access !== undefined) { // 需要判断权限的路由
        next({
            replace: true,
            name: 'error-403'
        });
    }else { //没有权限配置的路由，直接通过
        Util.toDefaultPage([...routers], to.name, router, next);
    }
});

router.afterEach((to) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

