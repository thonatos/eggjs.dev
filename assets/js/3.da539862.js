(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{200:function(t,e,i){t.exports=i(201)},201:function(t,e,i){i(202);var s=i(21).Object;t.exports=function(t,e,i){return s.defineProperty(t,e,i)}},202:function(t,e,i){var s=i(38);s(s.S+s.F*!i(33),"Object",{defineProperty:i(32).f})},203:function(t,e,i){"use strict";var s=i(77);i.n(s).a},204:function(t,e,i){"use strict";var s=i(78);i.n(s).a},205:function(t,e,i){"use strict";var s=i(79);i.n(s).a},206:function(t,e,i){"use strict";var s=i(80);i.n(s).a},207:function(t,e,i){"use strict";var s=i(10),n=i(29)(6),a="findIndex",o=!0;a in[]&&Array(1)[a](function(){o=!1}),s(s.P+s.F*o,"Array",{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(52)(a)},208:function(t,e,i){"use strict";var s=i(81);i.n(s).a},209:function(t,e,i){"use strict";var s=i(82);i.n(s).a},211:function(t,e,i){"use strict";i.r(e);var s=i(200),n=i.n(s);function a(t,e,i){return e in t?n()(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var o,r=i(16),c={props:["stick","tag"],data:function(){return{needFloat:!1,stickBottom:0}},watch:{stick:function(){this.unStick(),this.stickHandle()}},methods:{stickHandle:function(){var t=this;if(this.stick){var e=Object(r.c)(this.stick,this);e&&(this._stickerScroll=function(){var i=t.$el.getBoundingClientRect(),s=document.body.scrollTop+document.documentElement.scrollTop;t.needFloat=document.body.offsetHeight-s-i.height<e.offsetHeight,t.stickBottom=e.offsetHeight},this._stickerScroll(),window.addEventListener("scroll",this._stickerScroll))}},unStick:function(){this.needFloat=!1,this.stickBottom=0,window.removeEventListener("scroll",this._stickerScroll)}},mounted:function(){this.stickHandle()},beforeDestroy:function(){this.unStick()}},l=(i(203),i(0)),u=Object(l.a)(c,function(){var t=this.$createElement;return(this._self._c||t)(this.tag||"div",{tag:"component",staticClass:"sticker",class:this.needFloat?["stick-float"]:void 0,style:this.needFloat?{bottom:this.stickBottom+"px"}:void 0},[this._t("default")],2)},[],!1,null,null,null).exports,h={components:{Sticker:u},data:function(){return{activeIndex:0}},computed:{visible:function(){return this.$frontmatter&&!1!==this.$frontmatter.toc&&!!(this.$page&&this.$page.headers&&this.$page.headers.length)}},watch:{activeIndex:function(){var t=(this.$refs.eggTocItem||[])[this.activeIndex];if(t){var e=t.getBoundingClientRect(),i=this.$el.getBoundingClientRect(),s=e.top-i.top;s<20?this.$el.scrollTop=this.$el.scrollTop+s-20:s+e.height>i.height&&(this.$el.scrollTop+=e.top-(i.height-e.height))}}},methods:{onScroll:function(){var t=this;void 0===o&&(o=Object(r.d)(this.$el));for(var e=document.body.scrollTop+document.documentElement.scrollTop,i=this.$page.headers||[],s=0,n=function(e){t.activeIndex=e};s<i.length;s++){var a=document.getElementById(i[s].slug);if(!(Object(r.d)(a)-50<e)){s||n(s);break}n(s)}}},mounted:function(){var t=this,e=function(){t.$emit("visible-change",t.visible)};e(),this.$watch("visible",e),setTimeout(function(){return t._onScroll()},1e3),this._onScroll=function(){return t.onScroll()},window.addEventListener("scroll",this._onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this._onScroll)}},d=(i(204),Object(l.a)(h,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.visible?i("Sticker",t._b({staticClass:"egg-toc"},"Sticker",t.$attrs,!1),t._l(t.$page.headers,function(e,s){return i("div",{key:s,ref:"eggTocItem",refInFor:!0,staticClass:"egg-toc-item",class:["egg-toc-h"+e.level,{active:t.activeIndex===s}]},[i("a",{attrs:{href:"#"+e.slug,title:e.title}},[t._v(t._s(e.title))])])}),0):t._e()},[],!1,null,null,null).exports),p={computed:{heroStyle:function(){return this.data.banner?{backgroundImage:"url(".concat(this.$withBase(this.data.banner),")")}:{backgroundColor:"#000"}},data:function(){return this.$page.frontmatter}}},v=(i(205),Object(l.a)(p,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[i("header",{staticClass:"hero",style:t.heroStyle},[i("h1",[t._v(t._s(t.data.heroText))]),t._v(" "),i("h2",[t._v(t._s(t.data.tagline))]),t._v(" "),i("router-link",{staticClass:"action-button",attrs:{to:{path:t.data.actionLink},title:t.data.actionText}},[t._v("\n      "+t._s(t.data.actionText)+"\n    ")])],1),t._v(" "),i("div",{staticClass:"features"},t._l(t.data.features,function(e,s){return i("div",{key:s,staticClass:"feature"},[i("div",{staticClass:"feature-icon"},[i("img",{attrs:{src:t.$withBase(e.icon),alt:""}})]),t._v(" "),i("h2",[t._v(t._s(e.title))]),t._v(" "),i("p",[t._v(t._s(e.details))])])}),0),t._v(" "),t.data.whosusing.list&&t.data.whosusing.list.length?i("div",{staticClass:"whosusing"},[i("img",{staticClass:"icon",attrs:{src:t.$withBase(t.data.whosusing.icon)}}),t._v(" "),i("ul",{staticClass:"using-list"},t._l(t.data.whosusing.list,function(e,s){return i("li",{key:s},[i("div",{staticClass:"info-wrapper"},[i("div",{staticClass:"avatar"},[i("img",{attrs:{src:e.avatar}})]),t._v(" "),i("p",{staticClass:"comment"},[t._v(t._s(e.comment))]),t._v(" "),i("p",{staticClass:"user-name"},[t._v(t._s(e.name))])])])}),0),t._v(" "),i("img",{staticClass:"background-icon",attrs:{src:t.$withBase("/img_2/background.png")}})]):t._e()])},[],!1,null,null,null).exports),f=i(118),m=i(121);i(41),i(114),i(110);function g(t,e,i){var s=[];e.forEach(function(t){"group"===t.type?s.push.apply(s,Object(m.a)(t.children||[])):s.push(t)});for(var n=0;n<s.length;n++){var a=s[n];if("page"===a.type&&a.path===decodeURIComponent(t.path))return s[n+i]}}var b,_={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,i=this.$page.frontmatter.prev;return!1===i?void 0:i?Object(r.l)(this.$site.pages,i,this.$route.path):(t=this.$page,e=this.sidebarItems,g(t,e,-1))},next:function(){var t,e,i=this.$page.frontmatter.next;return!1===i?void 0:i?Object(r.l)(this.$site.pages,i,this.$route.path):(t=this.$page,e=this.sidebarItems,g(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,i=t.editLinks,s=t.docsDir,n=void 0===s?"":s,a=t.docsBranch,o=void 0===a?"master":a,c=t.docsRepo,l=void 0===c?e:c,u=Object(r.i)(this.$page.path);return r.a.test(u)?u+="README.md":u+=".md",l&&i?this.createEditLink(e,l,n,o,u):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,i,s,n){return/bitbucket.org/.test(t)?(r.j.test(e)?e:t).replace(r.a,"")+"/src"+"/".concat(s)+(i?"/"+i.replace(r.a,""):"")+n+"?mode=edit&spa=0&at=".concat(s,"&fileviewer=file-view-default"):(r.j.test(e)?e:"https://github.com/".concat(e)).replace(r.a,"")+"/blob/".concat(s)+(i?"/"+i.replace(r.a,""):"")+n},autoJumpHash:function(){setTimeout(function(){var t=decodeURIComponent(location.hash.substring(1)),e=t&&document.getElementById(t);e&&window.scrollTo(0,Object(r.d)(e)-5)},100)}},watch:{$route:function(t,e){t.path!==e.path&&this.autoJumpHash()}},mounted:function(){this.autoJumpHash()}},k=(i(206),Object(l.a)(_,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"page"},[t._t("top"),t._v(" "),i("Content",{staticClass:"content"}),t._v(" "),t.editLink?i("footer",{staticClass:"page-edit"},[t.lastUpdated?i("div",{staticClass:"last-updated"},[i("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),i("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e(),t._v(" "),i("div",{staticClass:"edit-link"},[i("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),i("OutboundLink")],1)]):t._e(),t._v(" "),t.prev||t.next?i("div",{staticClass:"page-nav"},[i("p",{staticClass:"inner"},[t.prev?i("router-link",{staticClass:"prev",attrs:{title:t.prev.title,to:t.prev.path}},[t._v("\n        上一篇"),i("br"),i("span",[t._v(t._s(t.prev.title||t.prev.path))])]):t._e(),t._v(" "),t.next?i("router-link",{staticClass:"next",attrs:{title:t.next.title,to:t.next.path}},[t._v("\n        下一篇"),i("br"),i("span",[t._v(t._s(t.next.title||t.next.path))])]):t._e()],1)]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports),$=i(120),C=(i(207),{components:{DropdownTransition:i(119).a},data:function(){return{selfActive:!1,childActiveIndex:-1,isOpen:!0}},props:["item","index"],computed:{isGroup:function(){return"group"===this.item.type},showArrow:function(){return this.isGroup}},watch:{$route:function(){this.updateActiveIndex()}},methods:{collapse:function(){this.showArrow&&(this.isOpen=!this.isOpen)},updateActiveIndex:function(){var t=this;this.item.path&&(this.selfActive=Object(r.e)(this.$route,this.item.path)),this.isGroup&&(this.childActiveIndex=this.item.children.findIndex(function(e){return Object(r.e)(t.$route,e.path)}))}},mounted:function(){this.updateActiveIndex()}}),w=(i(208),{components:{SidebarItem:Object(l.a)(C,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"sidebar-item"},[i(t.item.path?"router-link":"a",{tag:"component",staticClass:"sidebar-item-heading",class:{active:t.selfActive},attrs:{to:t.item.path?{path:t.item.path}:void 0},on:{click:t.collapse}},[t.showArrow?i("i",{staticClass:"arrow",class:t.isOpen?"down":"right"}):t._e(),t._v("\n    "+t._s(t.item.title)+"\n  ")]),t._v(" "),t.isGroup?i("DropdownTransition",[t.isOpen?i("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,function(e,s){return i("li",[i("router-link",{class:{active:t.childActiveIndex===s},attrs:{to:{path:e.path}}},[t._v(t._s(e.title))])],1)}),0):t._e()]):t._e()],1)},[],!1,null,null,null).exports,NavLinks:i(117).a,Sticker:u},props:["items"]}),S=(i(209),Object(l.a)(w,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Sticker",t._b({staticClass:"sidebar",attrs:{tag:"aside"}},"Sticker",t.$attrs,!1),[i("div",{staticClass:"sidebar-wrap"},[i("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?i("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,s){return i("li",{key:e.title+"_"+s},[i("SidebarItem",{attrs:{index:s,item:e},on:{toggle:function(e){return t.toggleGroup(s)}}})],1)}),0):t._e(),t._v(" "),t._t("bottom")],2)])},[],!1,null,null,null).exports),x=(a(b={components:{EggToc:d,Home:v,Page:k,Foot:$.a,Sidebar:S,Navbar:f.a},data:function(){return{isSidebarOpen:!1,isChairTocVisible:!1,isMobileSize:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(r.m)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar,"mobile-page":this.isMobileSize},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,i=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(i)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},"mounted",function(){var t=this;this._onResize=function(){t.isMobileSize=window.innerWidth<=719},this._onResize(),window.addEventListener("resize",this._onResize)}),a(b,"beforeDestroy",function(){window.removeEventListener("resize",this._onResize)}),b),T=(i(115),i(116),Object(l.a)(x,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?i("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),i("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),i("Sidebar",{attrs:{items:t.sidebarItems,stick:t.isMobileSize?void 0:"foot"},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?i("Home"):i("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2),t._v(" "),i("Foot",{ref:"foot"}),t._v(" "),i("EggToc",{attrs:{stick:t.isMobileSize?void 0:"foot"},on:{"visible-change":function(e){t.isChairTocVisible=e}}})],1)},[],!1,null,null,null));e.default=T.exports},77:function(t,e,i){},78:function(t,e,i){},79:function(t,e,i){},80:function(t,e,i){},81:function(t,e,i){},82:function(t,e,i){}}]);