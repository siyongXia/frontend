# 微信端前后端分离项目
## 目录结构介绍
### 配置文件
```
路径: \www\api\wechat-vue\config\index.js
build: {
    env: { // 设置环境变量,区分是dev,test还是build
        NODE_ENV: '"production"'
    },
    index: path.resolve(__dirname, '../dist/index.html'), // 打包之后index.html的存放路径
    assetsRoot: path.resolve(__dirname, '../dist'), // 打包之后静态资源存放路径
    assetsSubDirectory: '', 
    assetsPublicPath: '//wximg.91160.com/dist/', // 打包之后index.html中资源引用的prefix
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    appid: 'wx0001f8ab87472985' // 线上微信公众号的AppID
},
```
###  plugins目录介绍
```
\www\api\wechat-vue\src\plugins.
│  autosize.min.js  // textarea高度自适应, 需要单独引用
│  axios.js  // 基于创建了axios的实例
│  BMap.js  // 动态加载百度地图
│  components.js // 全局注册的组件,现在只有vux的ToastPlugin
│  data.js 
│  loading.js // 全局注册的loading组件,最开始的用途是ajax请求前loading,请求介绍后结束loading,参考app.vue中的逻辑,需要在对应的路由里面配置参数
│  mqttws31.js // 创建websocket的第三方库
│  navigateBar.js // 全局注册的navigatebar
│  prototype.js // 所有绑定到vue原型上面的方法
│  setToken.js // 开发模式下设置盗取token自动登录
│  swiper.min.js
│  vueRouter.js // 路由拦截
├─fastclick
│      fastclick.js
│      index.js  // 解决click事件移动端300ms延迟
├─preview  
│      index.js  //基于vux preview修改过的文件,解决多组图放大时动画问题
│      preview.vue
├─protobuf 
│      MessageFormat_pb.js  //利用protoc将IM.proto转换的commonjs文件
├─swiper
│
└─weui
```
1. axios.js介绍
功能: 请求拦截,响应拦截,设置通用请求头,给vue原型添加$http方法
    - 请求拦截,url上面有vapp,cid,qqHealthOpenId,city_id,的参数,ajax请求会自动带上,以及在appwebview里面,会先获取app的jstoken,如果app是登录状态,会自动再ajax请求上面添加jstoken,后面接受到jstoken会同步app那边的登录态
    ```
    const instance = axios.create();
    instance.interceptors.request.use(function(config) { //配置发送请求的信息
        var vapp = getUrlParam('vapp') // app的版本好
        var cid = getUrlParam('cid') // 渠道id
        var city_id = getUrlParam('city_id') // 城市id
        var qqHealthOpenId = getUrlParam('qqHealthOpenId') // qqHealthOpenId
        if(qqHealthOpenId){//所有请求添加qqHealthOpenId腾讯获取订单状态回传
            addParamsToUrl(config,'qqHealthOpenId',qqHealthOpenId)
        }
        if(vapp) { // 所有请求添加app版本号
            addParamsToUrl(config,'vapp',vapp)
        }
        if(city_id) { // 所有请求添加城市id
            addParamsToUrl(config,'city_id',city_id)
        }
        if(cid) { //渠道号
            if(config.url.indexOf('cid') == -1) {
                addParamsToUrl(config,'cid',cid)
            }
        }
        if(typeof(mJavaScriptObject) === 'object' && !config.url.includes('jstoken')) {
            addParamsToUrl(config, 'jstoken', encodeURIComponent(getAppToken(cid)));
        }
        return config;
    }, function(error) {
        return Promise.reject(error);
    });
    ```
    - 响应拦截, 未登录情况下,调用需要登录的接口,服务器返回状态码-1,会自动跳转到登录页面,登录成功之后会自动返回,如果请求的url上带有specialJump不等于空的情况下,即使未登录的情况访问需要需要登录的接口,页面也不会自动跳转
    ```
    instance.interceptors.response.use(function(response) { //配置请求回来的信息
        if(response.config.params && response.config.params.specialJump) {
            return response;
        }
        if (response.data.login == -1) { //未登录
            window.location.href="/user/login.html?redirect_url="+encodeURIComponent(location.href);
            return;
        }
        return response;
    }, function(error) {
        return Promise.reject(error);
    });
    ```
    - X-Requested-With Request Header,配合后端添加的请求头,方便后台判断是通过ajax访问还是直接浏览器地址栏输入url访问
    ```
    instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    ```
2. vueRouter.js介绍
功能: 路由创建,路由拦截,自动登录,设置app分享按钮
    - 404页面,保证404页面的路由*在最底部,防止其他路由访问不了
    ```
    routes[0].children = routes[0].children.concat(common); 
    ```
    - 路由设置
    ```
    const router = new VueRouter({
        routes,
        mode: routerMode,
        scrollBehavior(to, from, savedPosition) {
        // 因为本地是 hash 模式，线上是 history 模式，hash 模式无法使用 savedPosition，使用全局设置来处理
        // 相同的页面并且在全局设置里定义的页面不跳回顶部
        if (to.path == from.path && GlobalSetting.keepPositionPaths.includes(to.path)) return
        if (savedPosition) {
            return savedPosition;
        } else if(to.query.toTop && to.query.toTop === 'true') { //如果路径带有此参数，我们不做任何滚动，参考/gjyl/goodsList/servePageScroll.html?toTop=true页面
            return
        } else {
            return { x: 0, y: 0 };
        }
        },
        strict: process.env.NODE_ENV !== 'production'
    })
    ```
    - beforeEach钩子
    ```
    if (to.matched.some(record => record.meta.title)) { // 如果路由配置的时候配置了meta: {title: 'xxx'}, 会自动设置页面的title
      document.title = to.meta.title;
    }
    一. 通过momentKey自动登录,如果连接上面的有momentKey参数,会自动拦截调用通过momentKey自动登录的接口
    二. 路由配置的时候配置了meta: { needLogin: true }
        1. 先判断是否登录
        是: next() 继续访问
        否: 判断是app里面
            是: 获取app的jstoken,调用loginByAppToken接口知道登录,登录成功next(),否则跳转登录页面
            否: 
                判断是否在微信里面
                是:
                    连接上面是否有code
                    否: 跳转到 https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appId + "&redirect_uri=" + encodeURIComponent(origin + to.fullPath) + "&response_type=code&scope=snsapi_base&state=91160#wechat_redirect"`获取code之后自动跳回
                    是: 通过code调用loginByCode自动登录,登录成功next(),否则跳转登录页面
                否: 跳转登录页面

    ```
    - afterEach钩子,判断是否在app里面,控制是否分享按钮
    ```
     if( typeof(mJavaScriptObject) == 'object' && (mJavaScriptObject.funGetVersion() > '6.0.8')) {
        if(to.meta.canShare) {
            mJavaScriptObject.funShowShareButton('1')
        }else {
            mJavaScriptObject.funShowShareButton('0')
        }
    }
    ```
