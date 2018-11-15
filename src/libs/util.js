let util = {
};

util.title = function (title) {
    title = title || 'Mobvista OKR';
    window.document.title = title;
};

util.inOf = function (arr, targetArr) {
    let res = true;
    arr.forEach(item => {
        if (targetArr.indexOf(item) < 0) {
        res = false;
    }
});
    return res;
};

util.oneOf = function (ele, targetArr) {
    if (targetArr.indexOf(ele) >= 0) {
        return true;
    } else {
        return false;
    }
};

util.showThisRoute = function (itAccess, currentAccess) {
    if (typeof itAccess === 'object' && Array.isArray(itAccess)) {
        return util.oneOf(currentAccess, itAccess);
    } else {
        return itAccess === currentAccess;
    }
};

util.getRouterObjByName = function (routers, name) {
    if (!name || !routers || !routers.length) {
        return null;
    }
    // debugger;
    let routerObj = null;
    for (let item of routers) {
        if (item.name === name) {
            return item;
        }
        routerObj = util.getRouterObjByName(item.children, name);
        if (routerObj) {
            return routerObj;
        }
    }
    return null;
};

util.handleTitle = function (vm, item) {
    if (typeof item.title === 'object') {
        return vm.$t(item.title.i18n);
    } else {
        return item.title;
    }
};

util.setCurrentPath = function (vm, name) {
    let title = '';
    let isOtherRouter = false;
    vm.$store.state.app.routers.forEach(item => {
        if (item.children.length === 1) {
        if (item.children[0].name === name) {
            title = util.handleTitle(vm, item);
            if (item.name === 'otherRouter') {
                isOtherRouter = true;
            }
        }
    } else {
        item.children.forEach(child => {
            if (child.name === name) {
            title = util.handleTitle(vm, child);
            if (item.name === 'otherRouter') {
                isOtherRouter = true;
            }
        }
    });
    }
});
    let currentPathArr = [];
    if (name === 'home_index') {
        currentPathArr = [
            {
                title: util.handleTitle(vm, util.getRouterObjByName(vm.$store.state.app.routers, 'home_index')),
                path: '',
                name: 'home_index'
            }
        ];
    } else if ((name.indexOf('_index') >= 0 || isOtherRouter) && name !== 'home_index') {
        currentPathArr = [
            /* {
                title: util.handleTitle(vm, util.getRouterObjByName(vm.$store.state.app.routers, 'home_index')),
                path: '/home',
                name: 'home_index'
            }, */
            {
                title: title,
                path: '',
                name: name
            }
        ];
    } else {
        let currentPathObj = vm.$store.state.app.routers.filter(item => {
            if (item.children.length <= 1) {
            return item.children[0].name === name;
        } else {
            let i = 0;
            let childArr = item.children;
            let len = childArr.length;
            while (i < len) {
                if (childArr[i].name === name) {
                    return true;
                }
                i++;
            }
            return false;
        }
    })[0];
        if (currentPathObj.children.length <= 1 && currentPathObj.name === 'home') {
            currentPathArr = [
                {
                    title: '首页',
                    path: '',
                    name: 'home_index'
                }
            ];
        } else if (currentPathObj.children.length <= 1 && currentPathObj.name !== 'home') {
            currentPathArr = [
                /* {
                    title: '首页',
                    path: '/home',
                    name: 'home_index'
                }, */
                {
                    title: currentPathObj.title,
                    path: '',
                    name: name
                }
            ];
        } else {
            let childObj = currentPathObj.children.filter((child) => {
                return child.name === name;
        })[0];
            currentPathArr = [
                /* {
                    title: '首页',
                    path: '/home',
                    name: 'home_index'
                }, */
                {
                    title: currentPathObj.title,
                    path: '',
                    name: currentPathObj.name
                },
                {
                    title: childObj.title,
                    path: currentPathObj.path + '/' + childObj.path,
                    name: name
                }
            ];
        }
    }
    vm.$store.commit('setCurrentPath', currentPathArr);

    return currentPathArr;
};

util.toDefaultPage = function (routers, name, route, next) {
    let len = routers.length;
    let i = 0;
    let notHandle = true;
    while (i < len) {
        if (routers[i].name === name && routers[i].children && routers[i].redirect === undefined) {
            route.replace({
                name: routers[i].children[0].name
            });
            notHandle = false;
            next();
            break;
        }
        i++;
    }
    if (notHandle) {
        next();
    }
};

util.fullscreenEvent = function (vm) {
};

util.toLogin = function (loginURL) {
    window.location.href = loginURL || 'http://okr.mobvista.com/api/u/login';
};

util.toLogout = function () {
    // 恢复默认样式
    let themeLink = document.querySelector('link[name="theme"]');
    themeLink.setAttribute('href', '');
    // 清空打开的页面等数据，但是保存主题数据
    let theme = '';
    if (localStorage.theme) {
        theme = localStorage.theme;
    }
    localStorage.clear();
    if (theme) {
        localStorage.theme = theme;
    }
    window.location.href = 'http://okr.mobvista.com/api/u/logout';
};

util.throttle = function(fn, wait) {
    let timer;
    return function(...args){
        if(!timer){
            timer = setTimeout(() => timer = null, wait);
            return fn.apply(this, args);
        }
    };
}

export default util;
