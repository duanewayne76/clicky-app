(window["webpackJsonpclicky-app"]=window["webpackJsonpclicky-app"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/gijoe_black.67c81d8f.jpg"},function(e){e.exports=JSON.parse('[{"id":1,"name":"Roadblock","image":"/images/characters1.jpg"},{"id":2,"name":"Scrap-Iron","image":"/images/characters2.jpg"},{"id":3,"name":"Don\'t Know","image":"/images/characters3.jpg"},{"id":4,"name":"Recondo","image":"/images/characters4.jpg"},{"id":5,"name":"Cobra Commander","image":"/images/characters5.jpg"},{"id":6,"name":"Scarlett","image":"/images/characters6.jpg"},{"id":7,"name":"Major Bludd","image":"/images/characters7.jpg"},{"id":8,"name":"Blowtorch","image":"/images/characters8.jpg"},{"id":9,"name":"Baroness","image":"/images/characters9.jpg"},{"id":10,"name":"Stalker","image":"/images/characters10.jpg"},{"id":11,"name":"Snow Job","image":"/images/characters11.jpg"},{"id":12,"name":"Destro","image":"/images/characters12.jpg"}]')},,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(2),i=t.n(r),o=(t(15),t(3)),s=t(4),m=t(8),l=t(5),g=t(9);t(16);var d=function(e){return n.a.createElement("nav",{className:"navbar"},n.a.createElement("ul",null,n.a.createElement("li",{className:"brand"},n.a.createElement("a",{href:"/"},"Clicky Game")),n.a.createElement("li",{className:"feedback"},e.feedback),n.a.createElement("li",{className:"score"},"Score: ",e.score," \xa0|\xa0 Top Score: ",e.highScore)))},h=(t(17),t(6)),u=t.n(h);var f=function(){return n.a.createElement("header",{className:"header"},n.a.createElement("img",{src:u.a,alt:"gijoe"}))};t(18),t(19);var p=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("button",{className:"img-container",onClick:e.onClick},n.a.createElement("img",{alt:e.name,src:e.image})))},k=t(7);var b=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(l.a)(a).call(this,e))).clicked=function(e){console.log(e);var a=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),c=[e[t],e[a]];e[a]=c[0],e[t]=c[1]}return e}(t.state.cards);if(t.selections.includes(e))return t.setState({feedback:"You guessed incorrectly!",score:0,cards:a,youWon:!1}),void(t.selections=[]);t.selections.push(e),t.setState({feedback:"You guessed correctly!",score:t.selections.length,highScore:t.selections.length>t.state.highScore?t.state.highScore+1:t.state.highScore,cards:a,youWon:t.selections.length===a.length})},t.state={feedback:"Click an image to begin!",score:0,highScore:0,cards:k,youWon:!1},t.selections=[],t}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state.cards.map((function(a){return n.a.createElement(p,{key:a.id,name:a.name,onClick:function(){e.clicked(a.id)},image:a.image})}));return n.a.createElement("div",null,n.a.createElement(d,{score:this.state.score,highScore:this.state.highScore,feedback:this.state.feedback}),n.a.createElement(f,null),n.a.createElement("div",{className:"cards"},a))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.6a2dbf50.chunk.js.map