const path = require('path');
const os = require('os');
// const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HappyPack = require('happypack');
// const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

function resolve(dir) {
    return path.join(__dirname, dir);
}

const vuxLoader = require('vux-loader');

/*,
"postcss-px2rem": {
    "rootValue": 37.5,
        "propList":["*"]
}*/


/*const webpackConfig = {
    lintOnSave: true,
    configureWebpack: {
        resolve: {
            alias: {
                'vue': 'vue/dist/vue.esm.js',
                '@': resolve('../src')
            },
            extensions: ['.js', '.vue']
        },
        entry: {
            main: '@/main',
            'vender-base': '@/vendors/vendors.base.js',
            'vender-exten': '@/vendors/vendors.exten.js'
        },
        output: {
            path: path.resolve(__dirname, '../dist/dist')
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            css: 'vue-style-loader!css-loader',
                            less: 'vue-style-loader!css-loader!less-loader'
                        },
                        postLoaders: {
                            html: 'babel-loader'
                        }
                    }
                },
                {
                    test: /iview\/.*?js$/,
                    loader: 'happypack/loader?id=happybabel',
                    exclude: /node_modules/
                },
                {
                    test: /\.js$/,
                    loader: 'happypack/loader?id=happybabel',
                    exclude: /node_modules/
                },
                {
                    test: /\.js[x]?$/,
                    include: [resolve('src')],
                    exclude: /node_modules/,
                    loader: 'happypack/loader?id=happybabel'
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: ['css-loader?minimize', 'autoprefixer-loader'],
                        fallback: 'style-loader'
                    })
                },
                {
                    test: /\.less$/,
                    use: ExtractTextPlugin.extract({
                        use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
                        fallback: 'style-loader'
                    })
                },
                {
                    test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                    loader: 'url-loader?limit=1024'
                },
                {
                    test: /\.(html|tpl)$/,
                    loader: 'html-loader'
                }
            ]
        }
    }
}
const webpackConfig = originalConfig;*/

/**/
/*chainWebpack: config => {
    config.module
        .rule('css')
        .test(/\.css$/)
        .oneOf('vue')
        .resourceQuery(/\?vue/)
        .use('px2rem')
        .loader('px2rem-loader')
        .options({
            remUnit: 37.5
        })
},*/

module.exports = {
    chainWebpack: config => {
    config.module
    .rule('css')
    .test(/\.css$/)
    .oneOf('vue')
    .resourceQuery(/\?vue/)
    .use('px2rem')
    .loader('px2rem-loader')
    .options({
        remUnit: 75
    })
},
configureWebpack: config => {
    require('vux-loader').merge(config, {
        options: {},
        resolve: {
            alias: {
                'vue': 'vue/dist/vue.esm.js',
                '@': resolve('../src')
            },
            extensions: ['.js', '.vue']
        },
        entry: {
            main: '@/main',
            'vender-base': '@/vendors/vendors.base.js',
            'vender-exten': '@/vendors/vendors.exten.js'
        },
        output: {
            path: path.resolve(__dirname, '../dist/dist')
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            css: 'vue-style-loader!css-loader',
                            less: 'vue-style-loader!css-loader!less-loader'
                        },
                        postLoaders: {
                            html: 'babel-loader'
                        }
                    }
                },
                {
                    test: /vux\/.*?js$/,
                    loader: 'happypack/loader?id=happybabel',
                    exclude: /node_modules/
                },
                {
                    test: /\.js$/,
                    loader: 'happypack/loader?id=happybabel',
                    exclude: /node_modules/
                },
                {
                    test: /\.js[x]?$/,
                    include: [resolve('src')],
                    exclude: /node_modules/,
                    loader: 'happypack/loader?id=happybabel'
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: ['css-loader?minimize', 'autoprefixer-loader'],
                        fallback: 'style-loader'
                    })
                },
                {
                    test: /\.less$/,
                    use: ExtractTextPlugin.extract({
                        use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
                        fallback: 'style-loader'
                    })
                },
                {
                    test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                    loader: 'url-loader?limit=1024'
                },
                {
                    test: /\.(html|tpl)$/,
                    loader: 'html-loader'
                }
            ]
        },
        plugins: [{
            name: 'vux-ui'
        },{
            name: 'after-less-parser',
            fn: function (source) {
                if (this.resourcePath.replace(/\\/g, '/').indexOf('/vux/src/components') > -1) {
                    source = source.replace(/px/g, 'PX')
                    //资源中有引入1px.less文件的，上面也会将文件名替换成1PX.less，所以要替换回来避免构建报错
                    source = source.replace(/1PX.less/g,'1px.less');
                }
                // 自定义的全局样式大部分不需要转换
                return source
            }
        },{
            name: 'style-parser',
            fn: function (source) {
                if (this.resourcePath.replace(/\\/g, '/').indexOf('/vux/src/components') > -1) {
                    source = source.replace(/px/g, 'PX')
                    source = source.replace(/1PX.less/g,'1px.less');
                }
                return source
            }
        },{
            name: 'less-theme',
            path:'./src/assets/styles/vux_theme.less'
        }]
    })
}
}


/*module.exports = {
    configureWebpack: config => {
        require('vux-loader').merge(config, {
            options: {},
            plugins: ['vux-ui']
        })
    }
}*/
