(this["webpackJsonphome-assignment"]=this["webpackJsonphome-assignment"]||[]).push([[0],{102:function(e,t,r){},103:function(e,t,r){},104:function(e,t,r){},105:function(e,t,r){"use strict";r.r(t);var a,n,i,c,s,o,b,j,u,l,p,O,d,g=r(1),h=r(0),f=r(16),v=r.n(f),m=(r(65),r(27)),x=r(9),y=r(106),F=r(28),k=r(17),w=r.n(k),N=r(23),P=r(14),R=r(29),C=r(30),z=r(6),D=(r(43),r(4)),B=r(56),A=r.n(B),T="https://api.punkapi.com/v2/beers",E=function(){var e=Object(N.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get(t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{status:e.t0.response.data.statusCode,error:{errType:e.t0.response.data.error,msg:e.t0.response.data.message}});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),M={getNextPage:function(e){return E("".concat(T,"?page=").concat(e,"&per_page=10"))},getFoodPairing:function(e){return E("".concat(T,"?food=").concat(e))}},I=(a=function(){function e(){Object(R.a)(this,e),Object(P.a)(this,"beers",n,this),Object(P.a)(this,"favorites",i,this),Object(P.a)(this,"status",c,this),Object(P.a)(this,"error",s,this),Object(P.a)(this,"isNextPage",o,this),Object(P.a)(this,"isSearching",b,this),Object(D.e)(this)}return Object(C.a)(e,[{key:"getBeers",value:function(){var e=Object(N.a)(w.a.mark((function e(t){var r,a,n,i,c,s=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],e.next=3,M.getNextPage(t);case 3:a=e.sent,n=a.status,i=a.data,c=a.error,this.handleApiResponse(n,i,c,r);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getFoodPairing",value:function(e){var t=this;if(e){var r=e.replace(/ +(?= )/g,"").split(" ").join("_");M.getFoodPairing(r).then((function(e){t.isSearching=!1,t.beers=e.data})).catch((function(e){t.handleError(e.status,e.error)})),this.isSearching=!0}}},{key:"handleApiResponse",value:function(e,t,r,a){var n=this;200!==e?this.handleError(e,r):a?this.setIsNextPage(10===t.length):setTimeout((function(){n.beers=[],n.beers=t,n.updateFavorite(t)}),0)}},{key:"handleError",value:function(e,t){this.status=e,this.error=t}},{key:"setIsNextPage",value:function(e){this.isNextPage=e}},{key:"toggleFavorite",value:function(e){var t,r=Object(F.a)(this.beers);try{for(r.s();!(t=r.n()).done;){var a=t.value;a.id===e&&(a.isFavorite=!a.isFavorite,a.isFavorite?this.addFavorite(a):this.removeFavorite(e))}}catch(n){r.e(n)}finally{r.f()}}},{key:"addFavorite",value:function(e){e.isFavorite=!0,this.favorites.push(e)}},{key:"removeFavorite",value:function(e){var t=this.favorites.find((function(t){return t.id===e})),r=this.favorites.indexOf(t);this.favorites.splice(r,1)}},{key:"updateFavorite",value:function(){var e,t=Object(F.a)(this.favorites);try{for(t.s();!(e=t.n()).done;){var r,a=e.value,n=Object(F.a)(this.beers);try{for(n.s();!(r=n.n()).done;){var i=r.value;a.id===i.id&&(i.isFavorite=!i.isFavorite)}}catch(c){n.e(c)}finally{n.f()}}}catch(c){t.e(c)}finally{t.f()}}},{key:"setRank",value:function(e,t){var r,a=Object(F.a)(this.favorites);try{for(a.s();!(r=a.n()).done;){var n=r.value;n.id===t&&(n.rank=e)}}catch(i){a.e(i)}finally{a.f()}}}]),e}(),n=Object(z.a)(a.prototype,"beers",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),i=Object(z.a)(a.prototype,"favorites",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),c=Object(z.a)(a.prototype,"status",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 200}}),s=Object(z.a)(a.prototype,"error",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),o=Object(z.a)(a.prototype,"isNextPage",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),b=Object(z.a)(a.prototype,"isSearching",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(z.a)(a.prototype,"getBeers",[D.b],Object.getOwnPropertyDescriptor(a.prototype,"getBeers"),a.prototype),Object(z.a)(a.prototype,"getFoodPairing",[D.b],Object.getOwnPropertyDescriptor(a.prototype,"getFoodPairing"),a.prototype),Object(z.a)(a.prototype,"handleApiResponse",[D.b],Object.getOwnPropertyDescriptor(a.prototype,"handleApiResponse"),a.prototype),Object(z.a)(a.prototype,"handleError",[D.b],Object.getOwnPropertyDescriptor(a.prototype,"handleError"),a.prototype),Object(z.a)(a.prototype,"setIsNextPage",[D.b],Object.getOwnPropertyDescriptor(a.prototype,"setIsNextPage"),a.prototype),Object(z.a)(a.prototype,"toggleFavorite",[D.b],Object.getOwnPropertyDescriptor(a.prototype,"toggleFavorite"),a.prototype),Object(z.a)(a.prototype,"addFavorite",[D.b],Object.getOwnPropertyDescriptor(a.prototype,"addFavorite"),a.prototype),Object(z.a)(a.prototype,"removeFavorite",[D.b],Object.getOwnPropertyDescriptor(a.prototype,"removeFavorite"),a.prototype),Object(z.a)(a.prototype,"updateFavorite",[D.b],Object.getOwnPropertyDescriptor(a.prototype,"updateFavorite"),a.prototype),Object(z.a)(a.prototype,"setRank",[D.b],Object.getOwnPropertyDescriptor(a.prototype,"setRank"),a.prototype),a),S=Object(h.createContext)(new I),_=r.p+"static/media/favorite.c663327f.png",L=r.p+"static/media/unfavorite.e20f26b1.png",J=(j=function(){function e(){Object(R.a)(this,e),Object(P.a)(this,"paginationRange",u,this),Object(P.a)(this,"isMarked",l,this),Object(P.a)(this,"active",p,this),Object(P.a)(this,"isFavorite",O,this),Object(P.a)(this,"isFirstLoad",d,this),Object(D.e)(this)}return Object(C.a)(e,[{key:"toggleMarkedRoutes",value:function(){this.isMarked=!this.isMarked}},{key:"getPaginationRange",value:function(e){this.paginationRange=Array.from({length:5},(function(t,r){return r+e}))}},{key:"setActive",value:function(e){this.active=e}},{key:"toggleFavoriteStar",value:function(e,t){e.current.src=t?_:L}}]),e}(),u=Object(z.a)(j.prototype,"paginationRange",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[1,2,3,4,5]}}),l=Object(z.a)(j.prototype,"isMarked",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),p=Object(z.a)(j.prototype,"active",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),O=Object(z.a)(j.prototype,"isFavorite",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),d=Object(z.a)(j.prototype,"isFirstLoad",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),Object(z.a)(j.prototype,"toggleMarkedRoutes",[D.b],Object.getOwnPropertyDescriptor(j.prototype,"toggleMarkedRoutes"),j.prototype),Object(z.a)(j.prototype,"getPaginationRange",[D.b],Object.getOwnPropertyDescriptor(j.prototype,"getPaginationRange"),j.prototype),Object(z.a)(j.prototype,"setActive",[D.b],Object.getOwnPropertyDescriptor(j.prototype,"setActive"),j.prototype),Object(z.a)(j.prototype,"toggleFavoriteStar",[D.b],Object.getOwnPropertyDescriptor(j.prototype,"toggleFavoriteStar"),j.prototype),j),Y=Object(h.createContext)(new J),q=r(42),G=r.p+"static/media/beer2.82011c5a.png",H=(r(85),Object(y.a)((function(){var e=Object(h.useContext)(Y),t=e.isMarked;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(q.a,{bg:"dark",variant:"dark",className:"header",children:[Object(g.jsxs)(q.a.Brand,{children:["Beer",Object(g.jsx)("span",{className:"text-muted",children:"Buddy"})]}),Object(g.jsxs)(m.b,{to:"/home-assignment/browse",className:t?"mark-route":"",onClick:function(){e.toggleMarkedRoutes()},children:[Object(g.jsx)("label",{className:"buzz-next b-lbl",children:" Browse Beers "}),Object(g.jsx)("img",{src:G,className:"hvr-buzz-out beer-img",alt:""})]}),Object(g.jsxs)(m.b,{to:"/home-assignment/favorites",className:t?"":"mark-route ",onClick:function(){return e.toggleMarkedRoutes()},children:[Object(g.jsx)("label",{className:"buzz-next b-lbl",children:" Favorite Beers "}),Object(g.jsx)("img",{src:G,className:"hvr-buzz-out beer-img",alt:""})]})]})})}))),K=r(18),Q=r(20),U=function(e){var t=e.name,r=e.tagline,a=e.description,n=e.brewers_tips;return Object(g.jsxs)(g.Fragment,{children:["\n",Object(g.jsx)("h3",{children:t}),Object(g.jsxs)("h6",{children:[Object(g.jsx)("b",{children:"Tagline -"})," ",r]}),Object(g.jsxs)("h6",{children:[Object(g.jsx)("b",{children:"Description -"})," ",a]}),Object(g.jsxs)("h6",{children:[Object(g.jsx)("b",{children:"Brewers Tips -"})," ",n]})]})},V=r.p+"static/media/No_image.ec3f217a.png",W=(r(95),Object(y.a)((function(e){var t=e.id,r=e.rank,a=Object(h.useContext)(S),n=Object(h.useRef)();return Object(h.useEffect)((function(){n.current.value=r||"1"}),[n,r]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("lable",{className:"rk-lbl",children:" Rank: "}),Object(g.jsxs)("select",{ref:n,onClick:function(e){e.stopPropagation(),a.setRank(n.current.value,t)},children:[Object(g.jsx)("option",{value:"1",children:"1"}),Object(g.jsx)("option",{value:"2",children:"2"}),Object(g.jsx)("option",{value:"3",children:"3"}),Object(g.jsx)("option",{value:"4",children:"4"}),Object(g.jsx)("option",{value:"5",children:"5"})]})]})}))),X=(r(96),Object(y.a)((function(e){var t=e.id,r=e.name,a=e.image_url,n=e.tagline,i=e.description,c=e.brewers_tips,s=e.isFavorite,o=e.isFromFav,b=e.rank,j=Object(h.useContext)(Y),u=Object(h.useContext)(S),l=j.toggleFavoriteStar,p=Object(h.useRef)(),O=Object(h.useRef)(),d=Object(Q.useToasts)().addToast;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"loading between",onClick:function(){d(Object(g.jsx)(U,Object(K.a)({},{name:r,image_url:a,tagline:n,description:i,brewers_tips:c})),{appearance:"info",autoDismiss:!0})},ref:O,children:[Object(g.jsx)("label",{className:"name-lbl",children:r}),Object(g.jsx)("img",{ref:p,src:s?_:L,alt:"",className:"favorite",onClick:function(e){e.stopPropagation(),u.toggleFavorite(t),l(p,s)}}),Object(g.jsx)("img",{src:a||V,onLoad:function(){O.current.className="text-white bg-primary mb-4 between card-cont "},alt:"img",className:a?"card-img":"card-img stretch"}),o?Object(g.jsx)(W,Object(K.a)({},{id:t,rank:b})):""]})})}))),Z=r(25),$=(r(97),Object(y.a)((function(){var e=Object(h.useContext)(S),t=Object(h.useContext)(Y),r=t.active,a=t.paginationRange,n=a[0],i=a[a.length-1]+1;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(Z.a,{className:"pag-container",children:[Object(g.jsx)(Z.a.First,{onClick:function(){e.setIsNextPage(!0),t.getPaginationRange(1)},className:1===n?"disabled":""}),Object(g.jsx)(Z.a.Prev,{className:1===n?"disabled":"",onClick:function(){e.setIsNextPage(!0),t.getPaginationRange(--n)}}),t.paginationRange.map((function(a,n){return Object(g.jsx)(Z.a.Item,{onClick:function(){t.setActive(a),e.getBeers(a)},className:a===r?"active":"",children:a},n)})),Object(g.jsx)(Z.a.Next,{onClick:Object(N.a)(w.a.mark((function r(){return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.getBeers(i,!0);case 2:t.getPaginationRange(++n);case 3:case"end":return r.stop()}}),r)}))),className:e.isNextPage?"":"disabled"})]})})}))),ee=r(33),te=r(58),re=(r(98),Object(y.a)((function(){var e=Object(h.useContext)(S),t=Object(h.useRef)();return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(ee.a,{className:"mb-3 search",children:[Object(g.jsx)(te.a,{placeholder:"Food Pairing",ref:t}),Object(g.jsx)(ee.a.Append,{children:Object(g.jsx)(ee.a.Text,{id:"basic-addon2",onClick:function(){return e.getFoodPairing(t.current.value)},children:"\ud83d\udd0d"})})]})})}))),ae=Object(y.a)((function(){var e=Object(h.useContext)(S).error,t=e.errType,r=e.msg;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("h1",{className:"text-danger",children:[" ",t," "]}),Object(g.jsxs)("h3",{className:"text-danger",children:[" ",r," "]})]})})),ne=(r(102),Object(y.a)((function(){var e=Object(h.useContext)(S),t=Object(h.useContext)(Y),r=e.beers,a=e.status;return Object(h.useEffect)((function(){t.isFirstLoad&&(e.getBeers("1"),t.isFirstLoad=!1)}),[e,t]),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"container-md",children:[Object(g.jsx)(re,{}),200===a?Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"d-flex flex-wrap  justify-content-start",children:r.map((function(e,t){return Object(h.createElement)(X,Object(K.a)(Object(K.a)({},e),{},{key:t}))}))}),Object(g.jsx)($,{})]}):Object(g.jsx)(ae,{})]})})}))),ie=r(32),ce=Object(y.a)((function(){var e=Object(h.useContext)(S),t=Object(h.useRef)(),r=Object(Q.useToasts)().removeAllToasts;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{ref:t,children:[Object(g.jsx)("h4",{children:"Are you sure you whant to remove all favorites?"}),Object(g.jsx)(ie.a,{type:"button",className:"btn btn-danger",onClick:function(){r(),e.updateFavorite(),e.favorites=[]},children:"Yes"})]})})})),se=(r(103),Object(y.a)((function(){var e=Object(h.useContext)(S).favorites,t=Object(Q.useToasts)().addToast;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"container-md",children:[Object(g.jsx)("label",{children:Object(g.jsxs)("h1",{className:"text-white",children:[" ","Favorite",Object(g.jsx)("span",{className:"text-muted",children:"Beers"})]})}),Object(g.jsx)(ie.a,{variant:"danger",className:"rmv-btn",onClick:function(){t(Object(g.jsx)(ce,{}),{appearance:"warning",autoDismiss:!0})},children:"Remove All"}),Object(g.jsx)("div",{children:Object(g.jsx)("div",{className:"d-flex flex-wrap  justify-content-start",children:e.map((function(e,t){return Object(h.createElement)(X,Object(K.a)(Object(K.a)({},e),{},{isFromFav:!0,key:t}))}))})})]})})}))),oe=(r(104),function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(m.a,{children:Object(g.jsxs)(Q.ToastProvider,{autoDismiss:!0,autoDismissTimeout:3e4,children:[Object(g.jsx)(H,{}),Object(g.jsxs)(x.d,{children:[Object(g.jsx)(x.b,{path:"/home-assignment/browse",component:ne}),Object(g.jsx)(x.b,{path:"/home-assignment/favorites",component:se}),Object(g.jsx)(x.a,{from:"/",to:"/home-assignment/browse"})]})]})})})});Object(D.c)({enforceActions:"never"}),v.a.render(Object(g.jsx)(oe,{}),document.getElementById("root"))},85:function(e,t,r){},95:function(e,t,r){},96:function(e,t,r){},97:function(e,t,r){},98:function(e,t,r){}},[[105,1,2]]]);
//# sourceMappingURL=main.000f8b4c.chunk.js.map