(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{152:function(e,t,s){e.exports=s.p+"assets/img/screen.481fae18.png"},158:function(e,t,s){"use strict";s.r(t);var a=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"框架介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" 框架介绍")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"技术栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#技术栈","aria-hidden":"true"}},[this._v("#")]),this._v(" 技术栈")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"jquery-seajs-sortable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jquery-seajs-sortable","aria-hidden":"true"}},[this._v("#")]),this._v(" jQuery + seajs + sortable")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"项目结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目结构","aria-hidden":"true"}},[this._v("#")]),this._v(" 项目结构")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("路径: /app/wwwroot/api/wechat-vue/wechat/js/diy\n│  bindEvent.js        主要负责运营后台编辑页面时候的交互事件绑定\n│  components.js       公用的组件,包括每个组件的最外层元素,编辑/删除按钮,组件的标题栏\n│  componet_title.js   组件的标题栏(后面优化已经整理到components.js)\n│  config.js           全部的配置,包括域名,请求的接口地址\n│  container.js        每个组件的最外层元素(后面优化已经整理到components.js)\n│  edit.js             每个组件的编辑/删除按钮(后面优化已经整理到components.js)\n│  editpage.js         控制页面的显示,包括页面组件列表库,预览区域元素控制,页面分享逻辑\n│  event.js            筛选器对应的逻辑\n│  fireEvent.js        通过监听对应的组件名,找到组件对应的js文件并加载然后拿到每个组件暴露的构造函数实例化\n│  jquery.autocomplete.js  jquery插件,筛选器里面有的选项需要支持关键字搜索\n│  jquery.min.js\n│  main.js             主入口:智能页面js加载的入口,再对应的index.html中通过seajs.use('main.js')加载\n│  more.js             最开始医生组件,医院组件中用于分页加载的模板文件,后面取消分页之后很少使用\n│  sea.js               \n│  seajs-css.js        seajs只能加载js文件,想要动态加载css文件,需要用到这个模块\n│  service.js          请求接口用的公共文件\n│  sort.js             处理拖拽逻辑的公共文件\n│  Sortable.min.js    \n│  utils.js            工具类函数库,包括(cookie操作,app拉原生,时间转换)\n│  widget.js           所有筛选器的实例化的逻辑,预计筛选器数据的保存,都在这里\n│\n├─jquery\n│      jquery.min.js\n│\n├─module               组件模块(所有的组件都放在module文件夹下面,实际开发只需要在这个模块修改内容)\n│  ├─act\n│  ├─ad\n│  ├─btnGroup\n│  ├─consult\n│  ├─doctor\n│  ├─doctorsay\n│  ├─goods\n│  ├─hospital\n│  ├─iconGroup\n│  ├─microclass\n│  ├─pic\n│  ├─question\n│  ├─search\n│  ├─swiper\n│  └─tab\n├─Sortable\n│\n└─Swiper-4.0.5\n样式文件:\n1. 公共的样式文件 /app/wwwroot/api/wechat-vue/wechat/css/common.css\n2. 组件对应的样式 /app/wwwroot/api/wechat-vue/wechat/css/assemblynew.css\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"seajs全局配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#seajs全局配置","aria-hidden":"true"}},[this._v("#")]),this._v(" seajs全局配置")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("运营后台: \\www\\91160-com\\NykjAdmin\\91160\\tpl\\page\\setting.html")]),this._v(" "),t("li",[this._v("微信: \\www\\api\\wechat\\app\\Views\\diycms\\index.php")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("两个模板文件中的配置都是类似,微信的静态资源版本号需要通过http://weixin.91160.com/main/clearCache.html?key=Joy\\Web\\Controllers\\BaseController\\afterExecuteRoute动态的清除\nvar version = \"{$smarty.const.VERSION}\";\nseajs.config({\n    base:\"//wximg.91160.com/wechat/js/diy\", // 文件加载的动态路径\n    alias: {\n        'sortable':'Sortable.min.js',\n    },\n    paths: { ///www/api/wechat-vue/wechat/js/diy/config.js中会用到@\n        '@': 'module'\n    },\n    //文件映射\n    map: [ \n        ['.js', '.js?v=' + version]\n    ],\n    preload:['sortable'],\n    debug:true\n});\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"筛选器介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#筛选器介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" 筛选器介绍")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("{name:'文本框',domName:'text',type:1},\n{name:'复选框',domName:'checkbox',type:2},\n{name:'公共科室',domName:'commonSection',type:3},\n{name:'选择商品',domName:'selectGoods',type:4},\n{name:'链接图组',domName:'swiper',type:5},\n{name:'icon组：',domName:'iconGroup',type:6},\n{name:'资讯分类：',domName:'consultList',type:7},\n{name:'按钮组',domName:'btnGroup',type:8},\n{name:'tab选项卡',domName:'tabGroup',type:9},\n{name:'带连接的图片',domName:'linkPic',type:10},\n{name:'注意',domName:'tip',type:11},\n{name:'单选框',domName:'radio',type:12},\n{name:'背景图',domName:'bgImage',type:13},\n{name:'url+id',domName:'urlId',type:14},\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(152),alt:"示例"}})])}],n=s(0),r=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("ol",[s("li",[e._v("jQuery: dom操作,绑定事件")]),e._v(" "),s("li",[e._v("seajs: 组件模块按需加载   "),s("a",{attrs:{href:"https://seajs.github.io/seajs/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("seajs文档"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("sortable: 组件拖拽   "),s("a",{attrs:{href:"https://github.com/SortableJS/Sortable",target:"_blank",rel:"noopener noreferrer"}},[e._v("sortable文档"),s("OutboundLink")],1)])]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._m(5),e._v(" "),s("p",[e._v("配置的代码分别位于以下路径:")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._m(8),e._v(" "),s("p",[e._v("筛选器是有很多个微元素交互组合而成,这些微元素包括,新建筛选器的时候,可以任意组合,如果现在的元素满足不了新组件的需求,新增对应的类型即可,对应的代码文件在app/wwwroot/api/wechat-vue/wechat/js/diy/widget.js")]),e._v(" "),e._m(9),e._m(10)])},a,!1,null,null,null);r.options.__file="readme.md";t.default=r.exports}}]);