(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{174:function(t,e,n){"use strict";var r=n(1);e.a=function(t,e){t.app;e("key",r.a.observable({key:"7n^Tdfr$EeC6tU"}))}},175:function(t,e,n){"use strict";(function(t){var r=n(8),o=(n(48),n(1)),l=n(286),c=n.n(l),d=n(47),f=n.n(d);e.a=function(e,n){var l=e.app;n("global",o.a.observable({production:!0,api:"https://global.schoolcheats.net/",socket:"https://sock.schoolcheats.net/",stripeUri:"v3/commerce/prod/stripe",stripeKey:"pk_live_51J08hTCQXsqYyQJXm6cb4gWHufKw1Mmz4pPNNWk9UttQsDV9wJJVH65cLDzdSM8qSM4PjXQdBkI9biA2YLaZTgMv00l40R24pb",status:{text:"",color:"",enabled:!1,timeout:2500},alert:function(text,e){t.$nuxt.$global.status={enabled:!0,text:text,type:e}},createRequest:function(){var e=arguments;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,d,h,v,m,x;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.length>0&&void 0!==e[0]?e[0]:"post",o=e.length>1?e[1]:void 0,d=e.length>2&&void 0!==e[2]?e[2]:{},h="https://global.schoolcheats.net/",v={"X-SchoolCheats-Protection-Key":c.a.sign({id:(new Date).getTime()},t.$nuxt.$key.key)},"post"!=r){n.next=16;break}return n.next=8,f.a.post(h+o,d,{headers:v,withCredentials:!0});case 8:if(!(m=n.sent).data.error||"AUTH_FAILED_MISSING"!=m.data.flag){n.next=12;break}return l.router.push({name:"login"}),n.abrupt("return",{error:!0,message:"You need to be logged in to use this."});case 12:if(!m.data.error||"AUTH_FAILED_PERMISSION"!=m.data.flag){n.next=15;break}return l.router.push({name:"premium"}),n.abrupt("return",{error:!0,message:"Purchase premium to access this feature."});case 15:return n.abrupt("return",m.data);case 16:if("get"!=r){n.next=24;break}return n.next=19,f.a.get(h+o,{headers:v,withCredentials:!0});case 19:if(!(x=n.sent).data.error||"AUTH_FAILED_MISSING"!=x.data.flag){n.next=23;break}return l.router.push({name:"login"}),n.abrupt("return",{error:!0,message:"You need to be logged in to use this."});case 23:return n.abrupt("return",x.data);case 24:case"end":return n.stop()}}),n)})))()}}))}}).call(this,n(11))},212:function(t,e,n){var content=n(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(92).default)("7abdbb3d",content,!0,{sourceMap:!1})},213:function(t,e,n){var content=n(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(92).default)("e9898ca8",content,!0,{sourceMap:!1})},289:function(t,e,n){"use strict";var r=n(8),o=(n(48),n(13),n(27),n(30),n(49),{data:function(){return{adblocker:!1}},components:{Header:function(){return n.e(11).then(n.bind(null,611))},Alert:function(){return Promise.resolve().then(n.bind(null,475))},Footer:function(){return n.e(3).then(n.bind(null,610))},Adblocker:function(){return Promise.resolve().then(n.bind(null,476))}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setInterval((function(){if(console.log(window.user.allowAdblocker),0==window.user.allowAdblocker)try{if(googletag)return t.adblocker=!1}catch(e){t.adblocker=!0}}),8e3);case 1:case"end":return e.stop()}}),e)})))()}}),l=(n(339),n(20)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.adblocker?n("div",[n("Adblocker")],1):n("div",[n("Header"),t._v(" "),n("div",{staticClass:"bg-gray-800 content container xl:w-4/6 lg:w-3/5 px-6 w-full mt-20 mx-auto text-white"},[n("center",[n("div",{staticClass:"banner mb-10",attrs:{id:"1_PapayAds_SchoolCheats_TOP_Banner",align:"center"}},[n("div",{staticClass:"banner",attrs:{id:"div-gpt-ad-1622456193177-0"}},[n("script",{attrs:{type:"application/javascript"}},[t._v("\n                            try {\n                                googletag.cmd.push(function() {\n                                    googletag.display('div-gpt-ad-1622456193177-0');\n                                });\n                            } catch (e) {}\n                        ")])])])]),t._v(" "),t._m(0),t._v(" "),n("Nuxt"),t._v(" "),t._m(1),t._v(" "),n("center",[n("div",{staticClass:"PapayAds_CONTENT_Banner",attrs:{id:"7_PapayAds_SchoolCheats_MIDDLE_Banner",align:"center"}},[n("div",{attrs:{id:"div-gpt-ad-1632417473174-0"}},[n("script",{attrs:{type:"application/javascript"}},[t._v("\n                            try {\n                                googletag.cmd.push(function() {\n                                    googletag.display('div-gpt-ad-1632417473174-0');\n                                });\n                            } catch (e) {}\n                        ")])])]),t._v(" "),n("div",{staticClass:"mt-10 banner",attrs:{id:"3_PapayAds_SchoolCheats_BOTTOM_Banner",align:"center"}},[n("div",{attrs:{id:"div-gpt-ad-1622457256536-0"}},[n("script",{attrs:{type:"application/javascript"}},[t._v("\n                            try {\n                                googletag.cmd.push(function() {\n                                    googletag.display('div-gpt-ad-1622457256536-0');\n                                });\n                            } catch (e) {}\n                        ")])])])])],1),t._v(" "),n("Alert"),t._v(" "),n("Footer")],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left-banner"},[n("div",{attrs:{id:"5_PapayAds_SchoolCheats_Vertical_LEFT_Banner",align:"center"}},[n("div",{attrs:{id:"div-gpt-ad-1627970687880-0"}},[n("script",{attrs:{type:"application/javascript"}},[t._v("\n                            try {\n                                googletag.cmd.push(function() {\n                                    googletag.display('div-gpt-ad-1627970687880-0');\n                                });\n                            } catch (e) {}\n                        ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right-banner"},[n("div",{attrs:{id:"6_PapayAds_SchoolCheats_Vertical_RIGHT_Banner",align:"center"}},[n("div",{attrs:{id:"div-gpt-ad-1627970811548-0"}},[n("script",{attrs:{type:"application/javascript"}},[t._v("\n                            try {\n                                googletag.cmd.push(function() {\n                                    googletag.display('div-gpt-ad-1627970811548-0');\n                                });\n                            } catch (e) {}\n                        ")])])])])}],!1,null,null,null);e.a=component.exports;installComponents(component,{Alert:n(475).default,Adblocker:n(476).default})},290:function(t,e,n){"use strict";var r={},o=n(20),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("Nuxt")}),[],!1,null,null,null);e.a=component.exports},293:function(t,e,n){n(294),t.exports=n(295)},334:function(t,e,n){t.exports=n.p+"img/server_down.e3fa6fa.svg"},339:function(t,e,n){"use strict";n(212)},340:function(t,e,n){var r=n(91)((function(i){return i[1]}));r.push([t.i,".banner{height:auto;width:auto;margin-left:auto;margin-right:auto}.left-banner,.right-banner{height:auto;width:auto;position:fixed;top:160px}.left-banner{left:0}.right-banner{right:0}@media (max-width:1500px){.left-banner,.right-banner{position:absolute}}@media (max-width:1020px){.left-banner,.right-banner{display:none}}",""]),r.locals={},t.exports=r},341:function(t,e,n){"use strict";n(213)},342:function(t,e,n){var r=n(91)((function(i){return i[1]}));r.push([t.i,".alert-banner{-webkit-animation:slide-in-top .5s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-top .5s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes slide-in-top{0%{transform:translateY(-1000px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes slide-in-top{0%{transform:translateY(-1000px);opacity:0}to{transform:translateY(0);opacity:1}}",""]),r.locals={},t.exports=r},363:function(t,e){},365:function(t,e){},377:function(t,e){},379:function(t,e){},407:function(t,e){},409:function(t,e){},410:function(t,e){},415:function(t,e){},417:function(t,e){},423:function(t,e){},425:function(t,e){},444:function(t,e){},456:function(t,e){},459:function(t,e){},46:function(t,e,n){"use strict";n(13),n(27),n(30);var r={components:{Footer:function(){return n.e(3).then(n.bind(null,610))}},props:["error"],layout:"error"},o=n(20),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"mt-24 content"},[r("center",[r("nuxt-link",{staticClass:"space cursor-pointer z-50 flex-col justify-center items-center flex pt-4 px-8 rounded-md text-purple-800 transform duration-150 ease-in hover:text-white hover:scale-105",attrs:{to:"/"}},[r("h1",{staticClass:"font-mono text-white z-50 text-6xl"},[t._v(t._s(t.error.statusCode)+" - Ooops... something went wrong.")]),t._v(" "),r("br"),t._v(" "),r("img",{attrs:{src:n(334),alt:"404",width:"50%"}})])],1)],1)])}),[],!1,null,null,null);e.a=component.exports},475:function(t,e,n){"use strict";n.r(e);n(49);var r={computed:{style:function(){return"error"==this.$global.status.type?{type:"error",color:"bg-red-500",textColor:"text-red-400",text:"Error"}:"success"==this.$global.status.type?{type:"success",color:"bg-green-500",textColor:"text-green-400",text:"Success"}:void 0}},data:function(){return{timeout:null}},updated:function(){var t=this;this.$global.status.enabled&&(this.timeout=setTimeout((function(){t.$global.status.enabled=!1}),2500))},methods:{close:function(){this.$global.status.enabled=!1}}},o=(n(341),n(20)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.$global.status.enabled?n("div",{staticClass:"alert-banner w-full z-50 fixed top-0 mt-2"},[n("div",{staticClass:"flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-md bg-gray-900"},[n("div",{class:[t.style.color,"flex items-center justify-center w-12"]},["success"==t.style.type?n("svg",{staticClass:"w-6 h-6 text-white fill-current",attrs:{viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"}})]):t._e(),t._v(" "),"error"==t.style.type?n("svg",{staticClass:"w-6 h-6 text-white fill-current",attrs:{viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"}})]):t._e()]),t._v(" "),n("div",{staticClass:"px-4 py-2 -mx-3"},[n("div",{staticClass:"mx-3"},[n("span",{class:[t.style.textColor,"font-semibold"]},[t._v(t._s(t.style.text))]),t._v(" "),n("p",{staticClass:"text-sm text-gray-200"},[t._v(t._s(this.$global.status.text))])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},476:function(t,e,n){"use strict";n.r(e);var r={methods:{refesh:function(){window.location.href="/"}}},o=n(20),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("center",[n("div",{staticClass:"inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle max-w-lg w-full mt-12"},[n("div",{staticClass:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},[n("div",{staticClass:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:h-16 sm:w-16"},[n("svg",{staticClass:"h-12 w-12 text-red-600",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}})])]),t._v(" "),n("div",{staticClass:"mt-3 text-center sm:mt-0"},[n("h3",{staticClass:"text-2xl leading-6 font-medium text-gray-900 pt-3",attrs:{id:"modal-title"}},[t._v("\n                    Looks like you're using Adblock. It's alright, most people do.\n                ")]),t._v(" "),n("div",{staticClass:"mt-2"},[n("p",{staticClass:"text-sm text-gray-500"},[t._v("\n                        However, ad income helps us immensely in paying for server expenses and keeping us online. We kindly request you to disable your adblock, we will not show you any invasive ones, promise!\n                    ")])])])]),t._v(" "),n("center",[n("button",{staticClass:"mb-4 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",attrs:{type:"button"},on:{click:function(e){return t.refesh()}}},[t._v("\n                I understand, I have disabled my ad blocker. Let me in!\n            ")])])],1)])}),[],!1,null,null,null);e.default=component.exports}},[[293,42,23,43]]]);