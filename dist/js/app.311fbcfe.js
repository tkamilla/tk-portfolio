(function(e){function t(t){for(var n,i,r=t[0],s=t[1],l=t[2],d=0,b=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==c[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},c={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"140c":function(e,t,a){},"1aca":function(e,t,a){},3130:function(e,t,a){"use strict";a("683d")},3384:function(e,t,a){e.exports=a.p+"img/e-tracker.3c3ee5d5.jpg"},"3b54":function(e,t,a){e.exports=a.p+"img/portfolio-tech.bc26831b.png"},"3f00":function(e,t,a){},"3fba":function(e,t,a){"use strict";a("dee0")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),c={class:"wrapper"},o=Object(n["h"])("h2",{class:"logo"},"Thomi K.",-1),i=Object(n["h"])("button",null,"Contact Me !",-1),r=Object(n["h"])("i",{class:"fas fa-bars"},null,-1),s={key:0,class:"modal"},l=Object(n["h"])("h2",{class:"logo"},"Thomi K.",-1),u=Object(n["h"])("i",{class:"fas fa-times"},null,-1);function d(e,t,a,d,b,h){var p=Object(n["w"])("router-link"),f=Object(n["w"])("SideView"),j=Object(n["w"])("router-view");return Object(n["q"])(),Object(n["d"])("div",c,[Object(n["h"])("header",null,[Object(n["h"])(p,{to:"/"},{default:Object(n["C"])((function(){return[o]})),_:1}),b.screen>1e3?(Object(n["q"])(),Object(n["d"])(p,{key:0,to:"/contact"},{default:Object(n["C"])((function(){return[i]})),_:1})):Object(n["e"])("",!0),b.screen<1e3?(Object(n["q"])(),Object(n["d"])("button",{key:1,onClick:t[1]||(t[1]=function(e){return b.showNav=!0})},[r])):Object(n["e"])("",!0)]),Object(n["h"])("aside",null,[b.screen>1e3?(Object(n["q"])(),Object(n["d"])(f,{key:0})):Object(n["e"])("",!0)]),Object(n["h"])("div",null,[Object(n["h"])(j)]),b.showNav?(Object(n["q"])(),Object(n["d"])("div",s,[Object(n["h"])("header",null,[l,Object(n["h"])("button",{onClick:t[2]||(t[2]=function(e){return b.showNav=!1})},[u])]),Object(n["h"])("nav",null,[Object(n["h"])("ul",null,[Object(n["h"])("li",{onClick:t[3]||(t[3]=function(){return h.changePage.apply(h,arguments)})},"Home"),Object(n["h"])("li",{onClick:t[4]||(t[4]=function(){return h.changePage.apply(h,arguments)})},"Projects"),Object(n["h"])("li",{onClick:t[5]||(t[5]=function(){return h.changePage.apply(h,arguments)})},"About"),Object(n["h"])("li",{onClick:t[6]||(t[6]=function(){return h.changePage.apply(h,arguments)})},"Contact")])])])):Object(n["e"])("",!0)])}var b=Object(n["E"])("data-v-655f8647");Object(n["t"])("data-v-655f8647");var h={class:"bar"},p={class:"bar"},f={class:"bar"},j={class:"bar"};Object(n["r"])();var v=b((function(e,t,a,c,o,i){var r=Object(n["w"])("router-link");return Object(n["q"])(),Object(n["d"])("nav",null,[Object(n["h"])("div",h,[o.home?(Object(n["q"])(),Object(n["d"])(r,{key:0,to:"/"},{default:b((function(){return[Object(n["h"])(n["a"],{name:"slideIn",appear:""},{default:b((function(){return[Object(n["h"])("div",{onMouseleave:t[1]||(t[1]=function(e){return o.home=!1}),class:"page-bar"},"Home",32)]})),_:1})]})),_:1})):(Object(n["q"])(),Object(n["d"])("div",{key:1,onMouseover:t[2]||(t[2]=function(e){return o.home=!0}),class:["box",{active:"/"===o.isActive}]},null,34))]),Object(n["h"])("div",p,[o.projects?(Object(n["q"])(),Object(n["d"])(r,{key:0,to:"/projects"},{default:b((function(){return[Object(n["h"])(n["a"],{name:"slideIn",appear:""},{default:b((function(){return[Object(n["h"])("div",{onMouseleave:t[3]||(t[3]=function(e){return o.projects=!1}),class:"page-bar"},"Projects",32)]})),_:1})]})),_:1})):(Object(n["q"])(),Object(n["d"])("div",{key:1,onMouseover:t[4]||(t[4]=function(e){return o.projects=!0}),class:["box",{active:"/projects"===o.isActive}]},null,34))]),Object(n["h"])("div",f,[o.about?(Object(n["q"])(),Object(n["d"])(r,{key:0,to:"/about"},{default:b((function(){return[Object(n["h"])(n["a"],{name:"slideIn",appear:""},{default:b((function(){return[Object(n["h"])("div",{onMouseleave:t[5]||(t[5]=function(e){return o.about=!1}),class:"page-bar"},"About",32)]})),_:1})]})),_:1})):(Object(n["q"])(),Object(n["d"])("div",{key:1,onMouseover:t[6]||(t[6]=function(e){return o.about=!0}),class:["box",{active:"/about"===o.isActive}]},null,34))]),Object(n["h"])("div",j,[o.contact?(Object(n["q"])(),Object(n["d"])(r,{key:0,to:"/contact"},{default:b((function(){return[Object(n["h"])(n["a"],{name:"slideIn",appear:""},{default:b((function(){return[Object(n["h"])("div",{onMouseleave:t[7]||(t[7]=function(e){return o.contact=!1}),class:"page-bar"},"Contact",32)]})),_:1})]})),_:1})):(Object(n["q"])(),Object(n["d"])("div",{key:1,onMouseover:t[8]||(t[8]=function(e){return o.contact=!0}),class:["box",{active:"/contact"===o.isActive}]},null,34))])])})),m={data:function(){return{barName:!1,home:!1,projects:!1,about:!1,contact:!1,isActive:""}},watch:{$route:function(e){this.isActive=e.path}}};a("3130");m.render=v,m.__scopeId="data-v-655f8647";var O=m,g={components:{SideView:O},data:function(){return{screen:window.innerWidth,showNav:!1}},methods:{changePage:function(e){var t=e.target.innerText;switch(t){case"Home":this.$router.push("/");break;case"Projects":this.$router.push("projects");break;case"About":this.$router.push("about");break;case"Contact":this.$router.push("contact");break}this.showNav=!1}}};a("9cdc");g.render=d;var y=g,w=(a("7d05"),a("6c02")),k=Object(n["E"])("data-v-1b7ba014");Object(n["t"])("data-v-1b7ba014");var _={class:"home-text"},S=Object(n["h"])("div",{class:"name"},[Object(n["h"])("p",null,"Hi! My name is"),Object(n["h"])("h1",null,"Thomi Kamilla")],-1),x={key:0,class:"summary"},C=Object(n["g"])("I taught myself how to code to expand my love for the digital world. "),q=Object(n["h"])("br",null,null,-1),M=Object(n["g"])(" I am on a journey to architect my visions to a new skyline of wonders. "),P=Object(n["h"])("br",null,null,-1),I=Object(n["g"])(" Check out my projects to learn more about my work and passions. "),A={key:1,class:"summary"},T=Object(n["g"])("I taught myself how to code to expand my love for the digital world. "),V=Object(n["h"])("br",null,null,-1),D=Object(n["g"])(" I am on a journey to architect my visions to a new skyline of wonders. "),H=Object(n["h"])("br",null,null,-1),N=Object(n["g"])(" Scroll down to find out more about my work and passions! "),E={class:"hero-img"},$=Object(n["h"])("button",{class:"arrow"},[Object(n["h"])("i",{class:"fas fa-angle-double-down"})],-1);Object(n["r"])();var K=k((function(e,t,a,c,o,i){var r=Object(n["w"])("router-link");return Object(n["q"])(),Object(n["d"])(n["a"],{name:"fade",appear:"","before-leave":""},{default:k((function(){return[Object(n["h"])("main",{onMousewheel:t[3]||(t[3]=function(){return i.change.apply(i,arguments)}),onScroll:t[4]||(t[4]=function(){return i.change.apply(i,arguments)})},[Object(n["h"])("div",_,[S,o.screen<1e3?(Object(n["q"])(),Object(n["d"])("p",x,[C,q,M,P,I])):(Object(n["q"])(),Object(n["d"])("p",A,[T,V,D,H,N]))]),Object(n["h"])("div",E,[Object(n["h"])("div",{onMouseenter:t[1]||(t[1]=function(e){return o.img1=!1}),onMouseout:t[2]||(t[2]=function(e){return o.img1=!0}),class:"img-container"},[o.img1?(Object(n["q"])(),Object(n["d"])("img",{key:0,class:"image",src:o.images.img1,alt:""},null,8,["src"])):Object(n["e"])("",!0),o.img1?Object(n["e"])("",!0):(Object(n["q"])(),Object(n["d"])("img",{key:1,class:"image",src:o.images.img2,alt:""},null,8,["src"]))],32)]),Object(n["h"])(r,{to:"/projects"},{default:k((function(){return[$]})),_:1})],32)]})),_:1})})),W={methods:{changeView:function(e,t,a){var n=e.deltaY>10;n?this.$router.push(a):this.$router.push(t)}}},J={name:"Home",mixins:[W],data:function(){return{screen:window.innerWidth,img1:!0,delayed:!0,images:{img1:a("98ff"),img2:a("62a3")}}},methods:{change:function(e){this.changeView(e,"/contact","/projects")}}};a("b81f");J.render=K,J.__scopeId="data-v-1b7ba014";var X=J,Y=(a("b0c0"),a("9911"),Object(n["E"])("data-v-62d5907f"));Object(n["t"])("data-v-62d5907f");var L=Object(n["h"])("h1",null,"Projects",-1),U={key:0,class:"timeline"},Z={class:"shapes"},z={class:"content"},B={class:"date"},F=Object(n["h"])("div",{class:"line"},null,-1),G={class:"content"},Q={class:"date"},R=Object(n["h"])("div",{class:"line"},null,-1),ee={class:"content"},te={class:"date"},ae=Object(n["h"])("div",{class:"line"},null,-1),ne={class:"content"},ce={class:"date"},oe=Object(n["h"])("div",{class:"line"},null,-1),ie={class:"content"},re={class:"date"},se={class:"project-wrapper"},le={class:"card"},ue={class:"image-container"},de={class:"icons-wrap"},be={class:"icons"},he={class:"project-info"},pe={key:0,class:"buttons"},fe=Object(n["h"])("i",{class:"fas fa-chevron-circle-left"},null,-1),je=Object(n["h"])("i",{class:"fas fa-chevron-circle-right"},null,-1);Object(n["r"])();var ve=Y((function(e,t,a,c,o,i){return Object(n["q"])(),Object(n["d"])(n["a"],{name:"fade",appear:""},{default:Y((function(){return[Object(n["h"])("section",{class:"project",onMousewheel:t[8]||(t[8]=function(){return i.change.apply(i,arguments)}),onScroll:t[9]||(t[9]=function(){return i.change.apply(i,arguments)})},[L,Object(n["h"])("main",null,[o.screen>760?(Object(n["q"])(),Object(n["d"])("div",U,[Object(n["h"])("div",Z,[Object(n["h"])("div",z,[Object(n["h"])("div",{onClick:t[1]||(t[1]=function(e){return i.changeProject(1)}),class:["circle",{selected:1==o.num}]},null,2),Object(n["D"])(Object(n["h"])("div",B,"Nov 2020",512),[[n["A"],1==o.num]])]),F,Object(n["h"])("div",G,[Object(n["h"])("div",{onClick:t[2]||(t[2]=function(e){return i.changeProject(2)}),class:["circle",{selected:2==o.num}]},null,2),Object(n["D"])(Object(n["h"])("div",Q,"Nov 2020",512),[[n["A"],2==o.num]])]),R,Object(n["h"])("div",ee,[Object(n["h"])("div",{onClick:t[3]||(t[3]=function(e){return i.changeProject(3)}),class:["circle",{selected:3==o.num}]},null,2),Object(n["D"])(Object(n["h"])("div",te,"Sep 2020",512),[[n["A"],3==o.num]])]),ae,Object(n["h"])("div",ne,[Object(n["h"])("div",{onClick:t[4]||(t[4]=function(e){return i.changeProject(4)}),class:["circle",{selected:4==o.num}]},null,2),Object(n["D"])(Object(n["h"])("div",ce,"Sep 2020",512),[[n["A"],4==o.num]])]),oe,Object(n["h"])("div",ie,[Object(n["h"])("div",{onClick:t[5]||(t[5]=function(e){return i.changeProject(5)}),class:["circle",{selected:5==o.num}]},null,2),Object(n["D"])(Object(n["h"])("div",re,"Aug 2020",512),[[n["A"],5==o.num]])])])])):Object(n["e"])("",!0),Object(n["h"])("div",se,[Object(n["h"])("article",le,[Object(n["h"])("div",ue,[Object(n["h"])("img",{src:o.project.bgd,alt:o.project.bgd},null,8,["src","alt"]),Object(n["h"])("div",de,[Object(n["h"])("div",be,[Object(n["h"])("img",{src:o.project.icon,alt:o.project.icon},null,8,["src","alt"])])])]),Object(n["h"])("div",he,[Object(n["h"])("h2",null,Object(n["y"])(o.project.name),1),Object(n["h"])("p",null,Object(n["y"])(o.project.desc),1),Object(n["h"])("a",{href:o.project.link,target:"_blank"},"View Project",8,["href"])]),o.screen<768?(Object(n["q"])(),Object(n["d"])("div",pe,[Object(n["h"])("button",{onClick:t[6]||(t[6]=function(){return i.decrement.apply(i,arguments)})},[fe]),Object(n["h"])("button",{onClick:t[7]||(t[7]=function(){return i.increment.apply(i,arguments)})},[je])])):Object(n["e"])("",!0)])])])],32)]})),_:1})})),me={data:function(){return{screen:window.innerWidth,images:{mevn:a("f5ed")},project:{},projects:[{name:"Sojournary",desc:"Travel itenerary management web app for personal and business purposes.",bgd:a("e530"),icon:a("f5ed"),link:"https://bit.ly/2UIL4ZO"},{name:"Portfolio",desc:"My personal portfolio website created with VueJS.",bgd:a("7702"),icon:a("3b54"),link:"https://github.com/tkamilla/tk-portfolio"},{name:"E-Tracker",desc:"A web app to keep track of your current, past, and future entertainment.",bgd:a("3384"),icon:a("cdf5"),link:"https://bit.ly/3jXvhAS"},{name:"Template Flipper",desc:"3D flipping image gallery website layout converted into code from PSD design.",bgd:a("c6ce"),icon:a("7913"),link:"https://bit.ly/323WVpZ"},{name:"8 Charms",desc:"A paper project made for my wife converted into web app to read messages that connect with current feelings.",bgd:a("7d88"),icon:a("7913"),link:"https://bit.ly/3bAcCIr"}],num:1}},mixins:[W],mounted:function(){this.project=this.projects[0]},methods:{change:function(e){this.changeView(e,"/","/about")},changeProject:function(e){this.project=this.projects[e-1],this.num=e},increment:function(){5===this.num?this.num=1:this.num++,this.project=this.projects[this.num-1]},decrement:function(){1===this.num?this.num=5:this.num--,this.project=this.projects[this.num-1]}}};a("645c");me.render=ve,me.__scopeId="data-v-62d5907f";var Oe=me,ge=Object(n["E"])("data-v-0c9a6239");Object(n["t"])("data-v-0c9a6239");var ye=Object(n["f"])('<div class="subhead" data-v-0c9a6239><div class="subtitle" data-v-0c9a6239><h2 data-v-0c9a6239>Meet</h2><h2 id="me" data-v-0c9a6239>Thomi</h2></div><div class="skills" data-v-0c9a6239><h3 data-v-0c9a6239>Skills</h3><ul data-v-0c9a6239><li data-v-0c9a6239>Vue</li><li data-v-0c9a6239>VueX</li><li data-v-0c9a6239>React</li><li data-v-0c9a6239>Tailwind CSS</li><li data-v-0c9a6239>Node</li><li data-v-0c9a6239>Express</li><li data-v-0c9a6239>MongoDB</li><li data-v-0c9a6239>SASS/SCSS</li><li data-v-0c9a6239>HTML</li><li data-v-0c9a6239>CSS</li><li data-v-0c9a6239>Adobe XD</li><li data-v-0c9a6239>CSS</li></ul></div></div><div class="texts" data-v-0c9a6239><p data-v-0c9a6239>I am a self-taught Software Engineer who found the joy of coding after traveling the world.</p><br data-v-0c9a6239><p data-v-0c9a6239>During my travel, I realized that my dream is to be able to work from anywhere in the world and do something that I truly love. And due to COVID, I had to stop my travel journey. So I took this chance to learn to code from YouTube videos and working on side projects.</p><br data-v-0c9a6239><p data-v-0c9a6239>I am taking my life experiences and figuring out real life problems to solve. This new found passion sparks many great ideas and visions that I want to pursuit. I continously challenge myself to find solutions and determine to accomplish all my goals.</p></div>',2);Object(n["r"])();var we=ge((function(e,t,a,c,o,i){return Object(n["q"])(),Object(n["d"])(n["a"],{name:"fade",appear:""},{default:ge((function(){return[Object(n["h"])("main",{onMousewheel:t[1]||(t[1]=function(){return i.change.apply(i,arguments)}),onScroll:t[2]||(t[2]=function(){return i.change.apply(i,arguments)})},[ye],32)]})),_:1})})),ke={name:"Home",mixins:[W],data:function(){return{}},methods:{change:function(e){this.changeView(e,"/projects","/contact")}}};a("6b36");ke.render=we,ke.__scopeId="data-v-0c9a6239";var _e=ke,Se=Object(n["E"])("data-v-18167d7b");Object(n["t"])("data-v-18167d7b");var xe=Object(n["f"])('<h1 data-v-18167d7b>Contact Me</h1><p data-v-18167d7b>Thank you for stopping by my page! If you have any questions or would like to collaborate, don&#39;t hesitate to leave a message.</p><div data-v-18167d7b><a href="mailto:thomskii93@gmail.com" target="_blank" data-v-18167d7b><i class="fas fa-envelope" data-v-18167d7b></i></a><span data-v-18167d7b>thomskii93@gmail.com</span></div><div data-v-18167d7b><a href="https://github.com/tkamilla" target="_blank" data-v-18167d7b><i class="fab fa-github" data-v-18167d7b></i></a><span data-v-18167d7b>github.com/tkamilla</span></div><div data-v-18167d7b><a href="https://www.linkedin.com/in/thomi-kamilla-65226a5b/" target="_blank" data-v-18167d7b><i class="fab fa-linkedin-in" data-v-18167d7b></i></a><span data-v-18167d7b>Thomi Kamilla</span></div><div data-v-18167d7b><a href="https://www.instagram.com/tovetherlife/" target="_blank" data-v-18167d7b><i class="fab fa-instagram" data-v-18167d7b></i></a><span data-v-18167d7b>@tovetherlife</span></div><div data-v-18167d7b><a href="https://www.youtube.com/channel/UCioq2H9ND74G8qnrTCQMYgw" target="_blank" data-v-18167d7b><i class="fab fa-youtube" data-v-18167d7b></i></a><span data-v-18167d7b>@Tovether</span></div>',7);Object(n["r"])();var Ce=Se((function(e,t,a,c,o,i){return Object(n["q"])(),Object(n["d"])(n["a"],{name:"fade",appear:""},{default:Se((function(){return[Object(n["h"])("section",{onMousewheel:t[1]||(t[1]=function(){return i.change.apply(i,arguments)}),onScroll:t[2]||(t[2]=function(){return i.change.apply(i,arguments)})},[xe],32)]})),_:1})})),qe={name:"Home",mixins:[W],methods:{change:function(e){this.changeView(e,"/about","/")}}};a("3fba");qe.render=Ce,qe.__scopeId="data-v-18167d7b";var Me=qe,Pe=[{path:"/",name:"Home",component:X,children:[{path:"",name:"Sideview",component:O}]},{path:"/projects",name:"Projects",component:Oe},{path:"/about",name:"About",component:_e},{path:"/contact",name:"Contact",component:Me}],Ie=Object(w["a"])({history:Object(w["b"])("/"),routes:Pe}),Ae=Ie;Object(n["c"])(y).use(Ae).mount("#app")},"62a3":function(e,t,a){e.exports=a.p+"img/tk2.a44fb0ff.jpg"},"645c":function(e,t,a){"use strict";a("140c")},"683d":function(e,t,a){},"6b36":function(e,t,a){"use strict";a("1aca")},7702:function(e,t,a){e.exports=a.p+"img/portfolio.5817e09f.jpg"},7913:function(e,t,a){e.exports=a.p+"img/frontend.aee614ba.png"},"7d05":function(e,t,a){},"7d88":function(e,t,a){e.exports=a.p+"img/charms.a62523f5.jpg"},"98ff":function(e,t,a){e.exports=a.p+"img/tk1.0fe69055.jpeg"},"9cdc":function(e,t,a){"use strict";a("c701")},b81f:function(e,t,a){"use strict";a("3f00")},c6ce:function(e,t,a){e.exports=a.p+"img/flipper.f2ff7329.jpg"},c701:function(e,t,a){},cdf5:function(e,t,a){e.exports=a.p+"img/mern.ac0686a4.png"},dee0:function(e,t,a){},e530:function(e,t,a){e.exports=a.p+"img/sojournary.a8f5bfcc.jpg"},f5ed:function(e,t,a){e.exports=a.p+"img/mevn.559871ac.png"}});
//# sourceMappingURL=app.311fbcfe.js.map