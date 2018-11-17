import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import {router} from './router/index';
import store from './store';
// import 'iview/dist/styles/iview.css';
import axios from 'axios';
import 'lib-flexible/flexible.js';

Vue.config.productionTip = false

Vue.use(iView);
Vue.prototype.$http = axios;



window.onresize = setHtmlFontSize;
function setHtmlFontSize(){
    const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    const htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.style.fontSize = htmlWidth / 7.5 + 'px';
};
setHtmlFontSize();


/*window.onresize = setHtmlFontSize;
function setHtmlFontSize(){
    const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    const htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';
};
setHtmlFontSize();*/



/*
ar html = document.getElementsByTagName('html')[0];

var width = html.getBoundingClientRect().width;

html.style.fontSize = width / 16 + 'px';

var PixelRaio = 1 / window.devicePixelRatio;

document.write('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=' + PixelRaio + ',minimum-scale=' + PixelRaio + ',maximum-scale=' + PixelRaio + '"/>')
*/


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
