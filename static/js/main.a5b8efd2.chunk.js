(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/notebook.4fdde868.png"},,,function(e){e.exports=[{id:1,image:"https://i.ibb.co/qkgc4nF/question.jpg",clicked:!1},{id:2,image:"https://i.ibb.co/KssdKPp/no.jpg",clicked:!1},{id:3,image:"https://i.ibb.co/8XHwwMG/michael.jpg",clicked:!1},{id:4,image:"https://i.ibb.co/sQ5ZSZC/homosapiens.jpg",clicked:!1},{id:5,image:"https://i.ibb.co/FH36Np6/mad.jpg",clicked:!1},{id:6,image:"https://i.ibb.co/G58mmxQ/fearedloved.jpg",clicked:!1},{id:7,image:"https://i.ibb.co/qmW2b30/dementors.jpg",clicked:!1},{id:8,image:"https://i.ibb.co/8MWksYn/dateMike.jpg",clicked:!1},{id:9,image:"https://i.ibb.co/dB72RCL/compulsive-Like.jpg",clicked:!1},{id:10,image:"https://i.ibb.co/zJ3FN08/bankruptcy.jpg",clicked:!1},{id:11,image:"https://i.ibb.co/sC7dzgF/bestboss.jpg",clicked:!1},{id:12,image:"https://i.ibb.co/tXBt2jP/shots.jpg",clicked:!1}]},,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(9),r=a.n(c),l=(a(18),a(19),a(10)),s=a(11),o=a(1),m=a(2),d=a(5),u=a(3),h=a(6),b=(a(20),{image:{width:270,height:215}});var g=function(e){return i.a.createElement("div",{key:e.id,className:"card cardSpecifyMember"},i.a.createElement("button",{onClick:e.onClick,id:e.id},i.a.createElement("img",{alt:e.id,src:e.image,style:b.image})))},p=a(7),f={title:{fontFamily:"Krona One"},subtitle:{fontFamily:"Acme",fontSize:25,color:"black"},span:{paddingLeft:25,paddingRight:10}},v=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement("a",{className:"navbar-item",href:"https://bulma.io"}),i.a.createElement("a",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",href:"/"},i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}))),i.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},i.a.createElement("div",{className:"navbar-start"},i.a.createElement("a",{className:"navbar-item",href:"/",style:f.subtitle},"ClickyGame      "))),i.a.createElement("div",{className:"navbar-end"},i.a.createElement("div",{className:"navbar-item",style:f.subtitle},i.a.createElement("span",{style:f.span},"Score: ",e.count," "),i.a.createElement("span",{style:f.span},"Highest Score:",e.highestScore)))))},k=a(4),E=a.n(k),y={hero:{backgroundImage:"url(".concat(E.a,")"),textAlign:"center"},title:{fontFamily:"Krona One"},subtitle:{fontFamily:"Acme",fontStyle:"italic"}},j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"hero",style:y.hero},i.a.createElement("div",{className:"hero-body"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"title",style:y.title},"The Dunder Mifflin Memory Game"),i.a.createElement("h2",{className:"subtitle",style:y.subtitle},"Click on an image to earn points! Don't click the same image twice!"))))}}]),t}(i.a.Component),w=[],N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={cards:p,count:0,highestScore:0,clicked:!1},a.checkForWinner=function(){12===a.state.count&&alert("You win! Click ok to play again")},a.handleCount=function(){a.setState({count:a.state.count+1})},a.resetData=function(){var e=a.state.cards.map(function(e){return Object(s.a)({},e,{clicked:!1})});a.setState({cards:e})},a.resetGame=function(){a.setState({count:0})},a.arrayNum=function(e){return Math.max.apply(Math,Object(l.a)(e))},a.showHighestScore=function(){a.setState({highestScore:a.state.highestScore})},a.handleClickEvent=function(e){e.preventDefault();var t=a.state.cards.find(function(t){return t.image===e.target.src});if(!1===t.clicked)a.handleCount(),a.checkForWinner(),console.log(a.state.count),t.clicked=!0,a.shuffledArray(a.state.cards);else if(!0===t.clicked){alert("Incorrect Answer!"),a.resetData();var n=a.state.count;w.push(n),console.log("highest score"+a.arrayNum(w)),a.showHighestScore(),a.resetGame(),a.shuffledArray(a.state.cards)}},a.shuffledArray=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,{count:this.state.count,highestScore:this.highestScore}),i.a.createElement(j,null),i.a.createElement("div",{className:"container is-fluid"},i.a.createElement("div",{className:"columns is-centered is-multiline"},this.shuffledArray(p).map(function(t){return i.a.createElement("div",{className:"column",key:t.id},i.a.createElement(g,{id:t.id,image:t.image,onClick:e.handleClickEvent}))}))))}}]),t}(i.a.Component),S={hero:{backgroundImage:"url(".concat(E.a,")")}};var C=function(){return i.a.createElement("div",{style:S.hero},i.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.a5b8efd2.chunk.js.map