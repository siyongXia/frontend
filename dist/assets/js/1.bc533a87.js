(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{147:function(t,s,a){t.exports=a.p+"assets/img/screen-1.8c656508.jpg"},148:function(t,s,a){t.exports=a.p+"assets/img/screen-2.bcff4be4.jpg"},149:function(t,s,a){t.exports=a.p+"assets/img/screen-3.649b22ba.jpg"},150:function(t,s,a){t.exports=a.p+"assets/img/component-1.cfddaea7.png"},151:function(t,s,a){t.exports=a.p+"assets/img/component-2.688c1590.jpg"},155:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"开发流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开发流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发流程")]),t._v(" "),n("h2",{attrs:{id:"_1-样式结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-样式结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.样式结构")]),t._v(" "),n("p",[t._v("先在\\www\\91160-com\\NykjAdmin\\91160\\tpl\\page\\setting.html写好对应的html结构以及在\\www/api/wechat-vue/wechat/css/assemblynew.cssl里写好样式")]),t._v(" "),n("h2",{attrs:{id:"_2-创建筛选器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建筛选器","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.创建筛选器")]),t._v(" "),n("p",[n("img",{attrs:{src:a(147),alt:"screen-1"}}),t._v(" "),n("img",{attrs:{src:a(148),alt:"screen-2"}}),t._v(" "),n("img",{attrs:{src:a(149),alt:"screen-3"}})]),t._v(" "),n("h2",{attrs:{id:"_3-创建组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.创建组件")]),t._v(" "),n("p",[t._v("注意事项:")]),t._v(" "),n("ol",[n("li",[n("img",{attrs:{src:a(150),alt:"组件英文名"}})]),t._v(" "),n("li",[t._v("组件的接口地址和默认数据分两种情况\n"),n("ul",[n("li",[t._v("需要后台查数据,组件接口地址找后端要,默认数据与后端协商")]),t._v(" "),n("li",[t._v('不需要后台查数据,组件接口地址统一是[{"m":"CmsSelfApi","f":"indexInfo"}],默认数据就是创建筛选器之后保存的数据\n'),n("img",{attrs:{src:a(151),alt:"默认数据"}})])])])]),t._v(" "),n("h2",{attrs:{id:"_4-配置组件对应的js文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置组件对应的js文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.配置组件对应的js文件")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("在"),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("wechat"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("vue"),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("wechat"),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("js"),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("diy"),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js中配置组件对应的js文件路径"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" @的意思在模板文件中配置过\nwindow"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("GLOBALCONFIG")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    components"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        swiper"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'@/swiper/swiper.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        search"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'@/search/search.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        doctorAcross"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'@/doctor/doctorAcross.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"_5-编辑组件代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-编辑组件代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.编辑组件代码")]),t._v(" "),n("p",[t._v("组件的格式需要保持保持统一,方便在/www/api/wechat-vue/wechat/js/diy/firEvent.js中全局调用,这样就可以尽可能少的去了解框架其他部分的代码,")]),t._v(" "),n("h3",{attrs:{id:"格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 格式")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("define")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("require"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exports"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("MicroclassFun")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" MicroclassFun"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 暴露一个构造函数")]),t._v("\n\n\tMicroclassFun"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tinit"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 构造函数的原型上面需要有一个init方式,用户初始化数据")]),t._v("\n\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"组件里面的常用代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件里面的常用代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件里面的常用代码")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("define")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("require"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exports"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" edit "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" componentsTpl"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edit"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),n("span",{attrs:{class:"token comment"}},[t._v("// 编辑删除按钮")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" componentTitle "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" componentsTpl"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("component_title"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("// 组件的标题")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" methods "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'../../editpage.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   \n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 里面包含很多公共的方法,所有的组件都需要调用一下methods.initDom,会根据筛选器的配置控制组件的展示")]),t._v("\n\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("MicroclassFun")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentTitle "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("$")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("componentTitle"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" MicroclassFun"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tMicroclassFun"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tinit"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 一般所有的组件组装的逻辑,都放在这里")]),t._v("\n\t\t\tobj"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("container"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("append")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentTitle"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("append")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("$")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("edit"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assembly_content"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token comment"}},[t._v("//如果有数据,就初始化")]),t._v("\n\t\t\t\tmethods"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("initDom")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("container"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assembly_content"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\n\t\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\tmethods"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("replaceDom")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"_6-调试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-调试","aria-hidden":"true"}},[t._v("#")]),t._v(" 6.调试")]),t._v(" "),n("ol",[n("li",[t._v("新建页面,新建页面的时候可以控制页面的分享内容,背景图,有效期")]),t._v(" "),n("li",[t._v("排版,\n"),n("ul",[n("li",[t._v("从左侧组件列表里面拖拽对应的组件到中间的预览区域,")]),t._v(" "),n("li",[t._v("在对应的组件上,右键会出现编辑和删除按钮")]),t._v(" "),n("li",[t._v("点击编辑, 自动请求接口实例化筛选器")]),t._v(" "),n("li",[t._v("配置筛选器参数,保存,自动刷新页面")])])])])])}],o=a(0),c=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);c.options.__file="main.md";s.default=c.exports}}]);