(this.webpackJsonpnft_gram=this.webpackJsonpnft_gram||[]).push([[0],{114:function(e,c,t){},125:function(e,c,t){"use strict";t.r(c);var s=t(7),n=t.n(s),i=t(94),a=t.n(i),r=(t(114),t(52),t(42)),o=t(22),j=t(95),d=(t(127),t(116),t(128),t(126),j.a.initializeApp({apiKey:"AIzaSyA2iBHpgV1VqULMnfhif40p6Mb8C8NzfGg",authDomain:"nft-gram.firebaseapp.com",projectId:"nft-gram",storageBucket:"nft-gram.appspot.com",messagingSenderId:"550326662797",appId:"1:550326662797:web:f0f2a9591631ee5553d4c4",measurementId:"G-6T0L8P1LZM"})),l=t(5),h=t(0),b=t.n(h),m=t(4),u=t(16),O=t(145);var x=function(){return Object(l.jsx)("div",{className:"loading",children:Object(l.jsx)(O.a,{color:"inherit"})})},p=n.a.createContext(),g=function(e){var c=e.children,t=Object(s.useState)(null),n=Object(u.a)(t,2),i=n[0],a=n[1],r=Object(s.useState)(!0),o=Object(u.a)(r,2),j=o[0],h=o[1];return Object(s.useEffect)((function(){d.auth().onAuthStateChanged((function(e){a(e),h(!1)}))}),[]),j?Object(l.jsx)(x,{}):Object(l.jsx)(p.Provider,{value:{currentUser:i},children:c})},f=t(69),v=(t(93),Object(o.i)((function(e){var c=e.history,t=Object(s.useContext)(p).currentUser,n=Object(s.useCallback)(function(){var e=Object(m.a)(b.a.mark((function e(t){var s,n,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.profileObj),s=t.profileObj,n=s.email,i=s.name,e.prev=2,e.next=5,d.auth().signInWithEmailAndPassword(n,i);case 5:c.push("/DashBoard"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(c){return e.apply(this,arguments)}}(),[c]);return t?Object(l.jsx)(o.a,{to:"/"}):Object(l.jsxs)("div",{className:"Auth",children:[Object(l.jsxs)("div",{className:"left_comp",children:[Object(l.jsx)("h4",{children:"Login "}),Object(l.jsx)("h1",{children:" NFTGRAM "}),Object(l.jsx)("p",{onClick:function(){return c.push("/signup")},children:"Don't have any account ? Signup Now"})]}),Object(l.jsx)("div",{className:"right_comp",children:Object(l.jsx)(f.GoogleLogin,{clientId:"550326662797-jap6e1jqnft0r7175knkng8v3robf1ut.apps.googleusercontent.com",onSuccess:n,onFailure:function(e){console.log(e)},children:Object(l.jsx)("span",{children:" Login with Google"})})})]})}))),_=Object(o.i)((function(e){var c=e.history,t=Object(s.useCallback)(function(){var e=Object(m.a)(b.a.mark((function e(t){var s,n,i,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.profileObj),s=t.profileObj,n=s.email,i=s.name,a=s.imageUrl,e.prev=2,e.next=5,d.auth().createUserWithEmailAndPassword(n,i);case 5:d.firestore().collection("users").doc(n).set({email:n,name:i,avatar:a}),c.push("/DashBoard"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(c){return e.apply(this,arguments)}}(),[c]);return Object(l.jsxs)("div",{className:"Auth",children:[Object(l.jsxs)("div",{className:"left_comp",children:[Object(l.jsx)("h4",{children:"Sigup "}),Object(l.jsx)("h1",{children:" NFTGRAM "}),Object(l.jsx)("p",{onClick:function(){return c.push("/login")},children:"Already have an account ? Login Now"})]}),Object(l.jsx)("div",{className:"right_comp",children:Object(l.jsx)(f.GoogleLogin,{clientId:"550326662797-jap6e1jqnft0r7175knkng8v3robf1ut.apps.googleusercontent.com",onSuccess:t,onFailure:function(e){console.log(e)},uxMode:!0,children:Object(l.jsx)("span",{children:" Sign up with Google"})})})]})})),N=t(45),y=t(106),w=["component"],k=function(e){var c=e.component,t=Object(y.a)(e,w),n=Object(s.useContext)(p).currentUser;return Object(l.jsx)(o.b,Object(N.a)(Object(N.a)({},t),{},{render:function(e){return n?Object(l.jsx)(c,Object(N.a)({},e)):Object(l.jsx)(o.a,{to:"/login"})}}))},S=t(61),C=t.n(S),A=t(143),B=t(84),E=t.n(B),L=t(85),G=t.n(L),I=t(71),D=t.n(I),F=t(72),P=t.n(F),U=t(73),H=t.n(U),M=t(70),T=t.n(M),W=t(74),q=t.n(W),z=t(75),R=t.n(z),J=t.p+"static/media/bid.603177d0.png";var V=function(){var e=Object(o.f)(),c=Object(s.useState)(""),t=Object(u.a)(c,2),n=t[0],i=t[1],a=Object(s.useState)(!0),r=Object(u.a)(a,2),j=r[0],h=r[1];return Object(s.useEffect)((function(){var e=d.firestore().collection("feed").orderBy("timestamp","desc").onSnapshot((function(e){var c=[];e.forEach((function(e){c.push(Object(N.a)(Object(N.a)({},e.data()),{},{key:e.id}))})),i(c),h(!1)}));return function(){return e()}}),[]),j?Object(l.jsx)(x,{}):Object(l.jsx)("div",{className:"feed",children:Object(l.jsx)("div",{className:"feed_list",children:n.map((function(c,t){return Object(l.jsxs)("div",{className:"feed_comp",children:[Object(l.jsxs)("div",{className:"feed_comp_user_head",children:[Object(l.jsxs)("div",{className:"feed_comp_user",children:[Object(l.jsx)("img",{src:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",alt:""}),Object(l.jsxs)("div",{className:"user",children:[Object(l.jsx)("h6",{children:"Shivam Namdeo"}),Object(l.jsx)("p",{children:"Shri Govindram Seksaria Institute of Technology and Science"})]})]}),Object(l.jsx)(A.a,{children:Object(l.jsx)(E.a,{})})]}),Object(l.jsx)("div",{className:"feed_image",onClick:function(){return e.push("/feed/"+"".concat(c.key))},children:Object(l.jsx)("img",{src:c.img,alt:""})}),Object(l.jsxs)("div",{className:"feed_bottom",children:[Object(l.jsxs)("div",{className:"feed_bottom_left",children:[Object(l.jsx)(A.a,{children:t%2!=0?Object(l.jsx)(G.a,{}):Object(l.jsx)(T.a,{color:"error"})}),Object(l.jsx)(A.a,{children:Object(l.jsx)(D.a,{})}),Object(l.jsx)(A.a,{children:Object(l.jsx)(P.a,{})})]}),Object(l.jsx)("div",{className:"feed_bottom_right",children:Object(l.jsx)(A.a,{children:Object(l.jsx)(H.a,{})})})]}),Object(l.jsxs)("div",{className:"feed_content",children:[Object(l.jsx)("h5",{children:"56 Likes"}),Object(l.jsxs)("p",{children:[" ",Object(l.jsx)("h5",{children:C()(c.timestamp).fromNow()})," sgsitscoders Happy teacher's day \ud83d\udc96 #sgsitsindore #sgsitscoders #coding #programming #programingmeme #programingmemes #codingmemes #codingmeme #sgsits_indore #sgsits_clg #gsits #sgsitsmeme #codingisfun #programmer #coder #coders #indore #sgsits #teachersday #sgsitsteachers #teacher #guru #teaxhersofinstagram #instateacher"]})]}),Object(l.jsxs)("div",{className:"bottom_bid",onClick:function(){return e.push("/feed/"+"".concat(c.key))},children:[Object(l.jsx)("div",{className:"bid_image",children:Object(l.jsx)("img",{src:J,alt:""})}),Object(l.jsx)(A.a,{children:Object(l.jsx)(q.a,{})}),Object(l.jsx)("input",{type:"number",disabled:!0,placeholder:"How much do you want to bid ...?"}),Object(l.jsx)(A.a,{children:Object(l.jsx)(R.a,{})})]})]},c.key)}))})})};var $=function(){var e=Object(o.f)();return Object(l.jsxs)("div",{className:"account",children:[Object(l.jsxs)("div",{className:"user_acc",onClick:function(){e.push("/profile")},children:[Object(l.jsx)("img",{src:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",alt:""}),Object(l.jsxs)("div",{className:"user_acc_content",children:[Object(l.jsx)("h6",{children:"Shivam Namdeo"}),Object(l.jsx)("p",{children:"shivamnamdeo0101@gmail.com"})]})]}),Object(l.jsxs)("div",{className:"suggestions_list",children:[Object(l.jsxs)("div",{className:"sugg_head",children:[Object(l.jsx)("h5",{children:"Suggestions for you"}),Object(l.jsx)("h6",{children:"See All"})]}),[1,2,3,5,8,9].map((function(e,c){return Object(l.jsxs)("div",{className:"sugg_header",children:[Object(l.jsxs)("div",{className:"user_acc_sugg",children:[Object(l.jsx)("img",{src:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",alt:""}),Object(l.jsxs)("div",{className:"user_acc_sugg_content",children:[Object(l.jsx)("h6",{children:"Shivam Namdeo"}),Object(l.jsx)("p",{children:"shivamnamdeo0101@gmail.com"})]})]}),Object(l.jsx)("h4",{children:"Follow"})]},e)}))]})]})};var K=function(){return Object(l.jsxs)("div",{className:"home_flex",children:[Object(l.jsx)("div",{children:Object(l.jsx)(V,{})}),Object(l.jsx)("div",{children:Object(l.jsx)($,{})})]})};var Y=function(){return Object(l.jsx)("div",{})},Z=t(86),Q=t.n(Z),X=t(99),ee=t.n(X),ce=t(100),te=t.n(ce),se=t(101),ne=t.n(se),ie=t(102),ae=t.n(ie),re=t(98),oe=t.n(re),je=t(103),de=t.n(je);var le=function(){var e=Object(s.useState)(d.auth().currentUser),c=Object(u.a)(e,2),t=(c[0],c[1],Object(o.f)()),n=Object(o.g)(),i=function(e){return n.pathname.includes(e)};return Object(l.jsxs)("div",{className:"header",children:[!(i("login")||i("signup"))&&Object(l.jsx)("div",{className:"add_button",children:Object(l.jsx)(A.a,{onClick:function(){return t.push("/add_feed")},children:Object(l.jsx)(oe.a,{})})}),Object(l.jsx)("div",{className:"left_header",onClick:function(){return t.push("/")},children:Object(l.jsx)("h1",{children:"NFTGRAM"})}),i("login")||i("signup")?Object(l.jsx)("div",{}):Object(l.jsx)("div",{className:"middle_header",children:Object(l.jsx)("input",{type:"search",placeholder:"Search NFT or username"})}),i("login")||i("signup")?Object(l.jsx)("div",{}):Object(l.jsxs)("div",{className:"right_header",children:[Object(l.jsx)(A.a,{className:"header_icon",onClick:function(){return t.push("/")},children:Object(l.jsx)(Q.a,{})}),Object(l.jsx)(A.a,{className:"header_icon",onClick:function(){return t.push("/activity")},children:Object(l.jsx)(ee.a,{})}),Object(l.jsx)(A.a,{className:"header_icon",onClick:function(){return t.push("/msg")},children:Object(l.jsx)(te.a,{})}),Object(l.jsx)(A.a,{className:"header_icon",onClick:function(){return t.push("/profile")},children:Object(l.jsx)(ne.a,{})}),Object(l.jsxs)("div",{className:"head_comp_row header_icon",children:[Object(l.jsx)(ae.a,{}),Object(l.jsx)("h5",{children:"100"})]}),Object(l.jsx)(A.a,{onClick:function(){return d.auth().signOut()},children:Object(l.jsx)(de.a,{color:"error"})})]})]})};var he=function(){var e=Object(o.f)();return Object(l.jsxs)("div",{className:"profile",children:[Object(l.jsxs)("div",{className:"dp_head",children:[Object(l.jsx)("div",{className:"profile_img",children:Object(l.jsx)("img",{src:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",alt:""})}),Object(l.jsxs)("div",{className:"profile_cred",children:[Object(l.jsx)("h5",{children:"Shivam Namdeo"}),Object(l.jsx)("p",{children:"shivamnamdeo0101@gmail.com"})]}),Object(l.jsx)("div",{className:"edit_profile",children:Object(l.jsx)("p",{children:"Edit Profile"})})]}),Object(l.jsxs)("div",{className:"dp_head dp_follow",children:[Object(l.jsxs)("div",{className:"dp_follow_comp",children:[Object(l.jsx)("h5",{children:"Posts"}),Object(l.jsx)("p",{children:"110"})]}),Object(l.jsxs)("div",{className:"dp_follow_comp",children:[Object(l.jsx)("h5",{children:"Followers"}),Object(l.jsx)("p",{children:"110"})]}),Object(l.jsxs)("div",{className:"dp_follow_comp",children:[Object(l.jsx)("h5",{children:"Following"}),Object(l.jsx)("p",{children:"110"})]})]}),Object(l.jsx)("div",{className:"feed_grid",children:[1,2,3,5,8,9,10,11,12,13,14,15,16,17,18,19,20].map((function(c,t){return Object(l.jsx)("div",{className:"feed_grid_comp",onClick:function(){return e.push("/feed/"+"".concat(c))},children:Object(l.jsx)("img",{src:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",alt:""})},c)}))})]})};var be=Object(o.i)((function(e){var c=e.history;return Object(s.useEffect)((function(){var e=c.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),null})),me=t(104),ue=t.n(me),Oe=t(105),xe=t.n(Oe);var pe=function(){var e=Object(o.f)(),c=Object(s.useState)("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"),t=Object(u.a)(c,2),n=t[0],i=(t[1],Object(s.useState)("Almost before we knew it, we had left the ground.sgsitscoders Happy teacher's day \ud83d\udc96 #sgsitsindore #sgsitscoders #coding #programming #programingmeme #programingmemes #codingmemes #codingmeme #sgsits_indore #sgsits_clg #gsits #sgsitsmeme #codingisfun #programmer #coder #coders #indore #sgsits #teachersday #sgsitsteachers #teacher #guru #teaxhersofinstagram #instateacher")),a=Object(u.a)(i,2),r=a[0],j=(a[1],Object(s.useState)(500)),h=Object(u.a)(j,2),b=h[0];return h[1],Object(l.jsxs)("div",{className:"add_feed",children:[Object(l.jsxs)("div",{className:"add_feed_head",children:[Object(l.jsxs)("div",{className:"add_button_comp",children:[Object(l.jsx)(A.a,{onClick:function(){return e.push("/")},children:Object(l.jsx)(ue.a,{})}),Object(l.jsx)("h4",{children:"Close"})]}),Object(l.jsxs)("div",{className:"add_button_comp",children:[Object(l.jsx)("h4",{children:"Post Your Asset"}),Object(l.jsx)(A.a,{onClick:function(){return d.firestore().collection("feed").add({img:n,desc:r,timestamp:Date.now(),start_bid:b}),alert("Asset has been posted"),void e.push("/")},children:Object(l.jsx)(xe.a,{})})]})]}),Object(l.jsxs)("div",{className:"add_feed_content",children:[Object(l.jsxs)("p",{children:["Start Bid : ",b]}),Object(l.jsx)("img",{src:n,alt:""}),Object(l.jsxs)("h4",{children:["Description : ",r]})]})]})};var ge=function(){var e=Object(s.useState)("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"),c=Object(u.a)(e,2),t=c[0],n=(c[1],Object(s.useState)("Almost before we knew it, we had left the ground.sgsitscoders Happy teacher's day \ud83d\udc96 #sgsitsindore #sgsitscoders #coding #programming #programingmeme #programingmemes #codingmemes #codingmeme #sgsits_indore #sgsits_clg #gsits #sgsitsmeme #codingisfun #programmer #coder #coders #indore #sgsits #teachersday #sgsitsteachers #teacher #guru #teaxhersofinstagram #instateacher")),i=Object(u.a)(n,2),a=i[0],r=(i[1],Object(s.useState)(500)),j=Object(u.a)(r,2),h=j[0],b=(j[1],Object(o.h)().feed_id),m=Object(s.useState)(""),O=Object(u.a)(m,2),p=O[0],g=O[1],f=Object(s.useState)(!0),v=Object(u.a)(f,2),_=v[0],y=v[1],w=Object(s.useState)(""),k=Object(u.a)(w,2),S=k[0],B=k[1],E=Object(s.useState)({}),L=Object(u.a)(E,2),G=L[0],I=L[1];return Object(s.useEffect)((function(){var e=d.firestore().collection("users").doc(d.auth().currentUser.email).onSnapshot((function(e){I(e.data())}));return function(){return e()}}),[]),Object(s.useEffect)((function(){var e=d.firestore().collection("feed").doc(b).collection("bid_list").orderBy("timestamp","desc").onSnapshot((function(e){var c=[];e.forEach((function(e){c.push(Object(N.a)(Object(N.a)({},e.data()),{},{key:e.id}))})),g(c),y(!1)}));return function(){return e()}}),[]),_?Object(l.jsx)(x,{}):Object(l.jsxs)("div",{className:"feed_view",children:[Object(l.jsxs)("div",{className:"feed_view_image",children:[Object(l.jsx)("img",{src:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",alt:""}),Object(l.jsxs)("div",{className:"feed_bottom",children:[Object(l.jsxs)("div",{className:"feed_bottom_left",children:[Object(l.jsx)(A.a,{children:Object(l.jsx)(T.a,{color:"error"})}),Object(l.jsx)(A.a,{children:Object(l.jsx)(D.a,{})}),Object(l.jsx)(A.a,{children:Object(l.jsx)(P.a,{})})]}),Object(l.jsx)("div",{className:"feed_bottom_right",children:Object(l.jsx)(A.a,{children:Object(l.jsx)(H.a,{})})})]}),Object(l.jsxs)("div",{className:"feed_content",children:[Object(l.jsxs)("h6",{children:["Start Bid : ",h]}),Object(l.jsx)("h5",{children:"56 Likes"}),Object(l.jsxs)("p",{children:[" ",Object(l.jsx)("h5",{children:C()(Date.now()).fromNow()})," sgsitscoders Happy teacher's day \ud83d\udc96 #sgsitsindore #sgsitscoders #coding #programming #programingmeme #programingmemes #codingmemes #codingmeme #sgsits_indore #sgsits_clg #gsits #sgsitsmeme #codingisfun #programmer #coder #coders #indore #sgsits #teachersday #sgsitsteachers #teacher #guru #teaxhersofinstagram #instateacher"]})]}),Object(l.jsxs)("div",{className:"bottom_bid",children:[Object(l.jsx)("div",{className:"bid_image",children:Object(l.jsx)("img",{src:J,alt:""})}),Object(l.jsx)(A.a,{children:Object(l.jsx)(q.a,{})}),Object(l.jsx)("input",{type:"number",value:S,onChange:function(e){return B(e.target.value)},placeholder:"Post your Bid now"}),Object(l.jsx)(A.a,{onClick:function(){return d.firestore().collection("feed").doc(b).collection("bid_list").add({img:t,desc:a,timestamp:Date.now(),bid_val:S,user_data:G}),B(""),void alert("Bid has been posted")},children:Object(l.jsx)(R.a,{})})]})]}),Object(l.jsx)("div",{className:"feed_view_bid_list",children:p.map((function(e,c){return Object(l.jsxs)("div",{className:"feed_view_bid_comp",children:[Object(l.jsxs)("div",{className:"user_bid",children:[Object(l.jsx)("img",{src:e.user_data.avatar,alt:""}),Object(l.jsx)("p",{children:e.user_data.name})]}),Object(l.jsxs)("div",{className:"feed_view_bid",children:[Object(l.jsx)("p",{children:C()(e.timestamp).fromNow()}),Object(l.jsxs)("h4",{children:[e.bid_val,"$ Bid"]}),Object(l.jsx)("p",{children:"what you need. But also if you are using react router you might find useful checking out useLocation and useHistory hooks"})]})]},e.key)}))})]})},fe=function(){return Object(l.jsx)(g,{children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(be,{}),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(le,{}),Object(l.jsx)(o.b,{exact:!0,path:"/login",component:v}),Object(l.jsx)(o.b,{exact:!0,path:"/signup",component:_}),Object(l.jsx)(k,{exact:!0,path:"/",component:K}),Object(l.jsx)(k,{exact:!0,path:"/DashBoard",component:K}),Object(l.jsx)(k,{exact:!0,path:"/profile",component:he}),Object(l.jsx)(k,{exact:!0,path:"/add_feed",component:pe}),Object(l.jsx)(k,{exact:!0,path:"/feed/:feed_id",component:ge}),Object(l.jsx)(Y,{})]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(l.jsx)(fe,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},52:function(e,c,t){},93:function(e,c,t){}},[[125,1,2]]]);
//# sourceMappingURL=main.7ced9dcc.chunk.js.map