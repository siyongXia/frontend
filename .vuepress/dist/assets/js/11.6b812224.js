(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{164:function(e,t,n){"use strict";n.r(t);var a=n(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"微信端前后端分离项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#微信端前后端分离项目","aria-hidden":"true"}},[e._v("#")]),e._v(" 微信端前后端分离项目")]),e._v(" "),n("h2",{attrs:{id:"目录结构介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录结构介绍","aria-hidden":"true"}},[e._v("#")]),e._v(" 目录结构介绍")]),e._v(" "),n("h3",{attrs:{id:"配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置文件")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("路径: \\www\\api\\wechat-vue\\config\\index.js\nbuild: {\n    env: { // 设置环境变量,区分是dev,test还是build\n        NODE_ENV: '\"production\"'\n    },\n    index: path.resolve(__dirname, '../dist/index.html'), // 打包之后index.html的存放路径\n    assetsRoot: path.resolve(__dirname, '../dist'), // 打包之后静态资源存放路径\n    assetsSubDirectory: '', \n    assetsPublicPath: '//wximg.91160.com/dist/', // 打包之后index.html中资源引用的prefix\n    productionSourceMap: true,\n    productionGzip: false,\n    productionGzipExtensions: ['js', 'css'],\n    appid: 'wx0001f8ab87472985' // 线上微信公众号的AppID\n},\n")])])]),n("h3",{attrs:{id:"plugins目录介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugins目录介绍","aria-hidden":"true"}},[e._v("#")]),e._v(" plugins目录介绍")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\\www\\api\\wechat-vue\\src\\plugins.\n│  autosize.min.js  // textarea高度自适应, 需要单独引用\n│  axios.js  // 基于创建了axios的实例\n│  BMap.js  // 动态加载百度地图\n│  components.js // 全局注册的组件,现在只有vux的ToastPlugin\n│  data.js \n│  loading.js // 全局注册的loading组件,最开始的用途是ajax请求前loading,请求介绍后结束loading,参考app.vue中的逻辑,需要在对应的路由里面配置参数\n│  mqttws31.js // 创建websocket的第三方库\n│  navigateBar.js // 全局注册的navigatebar\n│  prototype.js // 所有绑定到vue原型上面的方法\n│  setToken.js // 开发模式下设置盗取token自动登录\n│  swiper.min.js\n│  vueRouter.js // 路由拦截\n├─fastclick\n│      fastclick.js\n│      index.js  // 解决click事件移动端300ms延迟\n├─preview  \n│      index.js  //基于vux preview修改过的文件,解决多组图放大时动画问题\n│      preview.vue\n├─protobuf \n│      MessageFormat_pb.js  //利用protoc将IM.proto转换的commonjs文件\n├─swiper\n│\n└─weui\n")])])]),n("ol",[n("li",[e._v("axios.js介绍\n功能: 请求拦截,响应拦截,设置通用请求头,给vue原型添加$http方法\n"),n("ul",[n("li",[e._v("请求拦截,url上面有vapp,cid,qqHealthOpenId,city_id,的参数,ajax请求会自动带上,以及在appwebview里面,会先获取app的jstoken,如果app是登录状态,会自动再ajax请求上面添加jstoken,后面接受到jstoken会同步app那边的登录态")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const instance = axios.create();\ninstance.interceptors.request.use(function(config) { //配置发送请求的信息\n    var vapp = getUrlParam('vapp') // app的版本好\n    var cid = getUrlParam('cid') // 渠道id\n    var city_id = getUrlParam('city_id') // 城市id\n    var qqHealthOpenId = getUrlParam('qqHealthOpenId') // qqHealthOpenId\n    if(qqHealthOpenId){//所有请求添加qqHealthOpenId腾讯获取订单状态回传\n        addParamsToUrl(config,'qqHealthOpenId',qqHealthOpenId)\n    }\n    if(vapp) { // 所有请求添加app版本号\n        addParamsToUrl(config,'vapp',vapp)\n    }\n    if(city_id) { // 所有请求添加城市id\n        addParamsToUrl(config,'city_id',city_id)\n    }\n    if(cid) { //渠道号\n        if(config.url.indexOf('cid') == -1) {\n            addParamsToUrl(config,'cid',cid)\n        }\n    }\n    if(typeof(mJavaScriptObject) === 'object' && !config.url.includes('jstoken')) {\n        addParamsToUrl(config, 'jstoken', encodeURIComponent(getAppToken(cid)));\n    }\n    return config;\n}, function(error) {\n    return Promise.reject(error);\n});\n")])])]),n("ul",[n("li",[e._v("响应拦截, 未登录情况下,调用需要登录的接口,服务器返回状态码-1,会自动跳转到登录页面,登录成功之后会自动返回,如果请求的url上带有specialJump不等于空的情况下,即使未登录的情况访问需要需要登录的接口,页面也不会自动跳转")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('instance.interceptors.response.use(function(response) { //配置请求回来的信息\n    if(response.config.params && response.config.params.specialJump) {\n        return response;\n    }\n    if (response.data.login == -1) { //未登录\n        window.location.href="/user/login.html?redirect_url="+encodeURIComponent(location.href);\n        return;\n    }\n    return response;\n}, function(error) {\n    return Promise.reject(error);\n});\n')])])]),n("ul",[n("li",[e._v("X-Requested-With Request Header,配合后端添加的请求头,方便后台判断是通过ajax访问还是直接浏览器地址栏输入url访问")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';\n")])])])]),e._v(" "),n("li",[e._v("vueRouter.js介绍\n功能: 路由创建,路由拦截,自动登录,设置app分享按钮\n"),n("ul",[n("li",[e._v("404页面,保证404页面的路由*在最底部,防止其他路由访问不了")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("routes[0].children = routes[0].children.concat(common); \n")])])]),n("ul",[n("li",[e._v("路由设置")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const router = new VueRouter({\n    routes,\n    mode: routerMode,\n    scrollBehavior(to, from, savedPosition) {\n    // 因为本地是 hash 模式，线上是 history 模式，hash 模式无法使用 savedPosition，使用全局设置来处理\n    // 相同的页面并且在全局设置里定义的页面不跳回顶部\n    if (to.path == from.path && GlobalSetting.keepPositionPaths.includes(to.path)) return\n    if (savedPosition) {\n        return savedPosition;\n    } else if(to.query.toTop && to.query.toTop === 'true') { //如果路径带有此参数，我们不做任何滚动，参考/gjyl/goodsList/servePageScroll.html?toTop=true页面\n        return\n    } else {\n        return { x: 0, y: 0 };\n    }\n    },\n    strict: process.env.NODE_ENV !== 'production'\n})\n")])])]),n("ul",[n("li",[e._v("beforeEach钩子")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('if (to.matched.some(record => record.meta.title)) { // 如果路由配置的时候配置了meta: {title: \'xxx\'}, 会自动设置页面的title\n  document.title = to.meta.title;\n}\n一. 通过momentKey自动登录,如果连接上面的有momentKey参数,会自动拦截调用通过momentKey自动登录的接口\n二. 路由配置的时候配置了meta: { needLogin: true }\n    1. 先判断是否登录\n    是: next() 继续访问\n    否: 判断是app里面\n        是: 获取app的jstoken,调用loginByAppToken接口知道登录,登录成功next(),否则跳转登录页面\n        否: \n            判断是否在微信里面\n            是:\n                连接上面是否有code\n                否: 跳转到 https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appId + "&redirect_uri=" + encodeURIComponent(origin + to.fullPath) + "&response_type=code&scope=snsapi_base&state=91160#wechat_redirect"`获取code之后自动跳回\n                是: 通过code调用loginByCode自动登录,登录成功next(),否则跳转登录页面\n            否: 跳转登录页面\n\n')])])]),n("ul",[n("li",[e._v("afterEach钩子,判断是否在app里面,控制是否分享按钮")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" if( typeof(mJavaScriptObject) == 'object' && (mJavaScriptObject.funGetVersion() > '6.0.8')) {\n    if(to.meta.canShare) {\n        mJavaScriptObject.funShowShareButton('1')\n    }else {\n        mJavaScriptObject.funShowShareButton('0')\n    }\n}\n")])])])])])])}],!1,null,null,null);s.options.__file="readme.md";t.default=s.exports}}]);