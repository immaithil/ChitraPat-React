(this["webpackJsonpreact-mock-easy"]=this["webpackJsonpreact-mock-easy"]||[]).push([[0],{37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),c=n(21),s=n.n(c),r=n(8),a=n(9),d=n(7),h=n(14),l=n(13),u=n(2);var j=function(t){var e=t.post;return Object(u.jsxs)("figure",{className:"figure",children:[Object(u.jsx)("img",{className:"photo",src:e.imageLink,alt:e.description}),Object(u.jsx)("figcaption",{children:Object(u.jsxs)("p",{children:[" ",e.description," "]})}),Object(u.jsx)("div",{className:"button-container",children:Object(u.jsx)("button",{className:"remove-button",onClick:function(){t.onRemovePhoto(e)},children:"Remove"})})]})},p=n(6);var b=function(t){return Object(u.jsxs)("div",{children:[Object(u.jsx)(p.b,{onClick:t.onNavigate,to:"/AddPhoto",className:"add-icon",children:" "}),Object(u.jsx)("div",{className:"photo-grid",children:t.posts.sort((function(t,e){return e.id-t.id})).map((function(e,n){return Object(u.jsx)(j,{post:e,onRemovePhoto:t.onRemovePhoto},n)}))})]})};var m=function(t){return Object(u.jsx)("h1",{children:t.title})},v=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t}return Object(a.a)(n,[{key:"handleSubmit",value:function(t){t.preventDefault();var e=t.target.elements.link.value,n=t.target.elements.description.value,o={id:Number(new Date),description:n,imageLink:e};n&&e&&this.props.onAddPhoto(o)}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"ChitraPat"}),Object(u.jsx)("div",{className:"form",children:Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsx)("input",{name:"link",type:"text",placeholder:"Image Link"}),Object(u.jsx)("input",{name:"description",type:"text",placeholder:"Description"}),Object(u.jsx)("button",{className:"remove-button",children:"Post"})]})})]})}}]),n}(i.a.Component),O=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).removePhoto=t.removePhoto.bind(Object(d.a)(t)),t.state={posts:[{id:0,description:"Thor",imageLink:"https://www.koimoi.com/wp-content/new-galleries/2020/04/thor-love-and-thunder-chris-hemsworth-starrer-to-bring-back-this-dead-character-its-not-loki-1.jpg"},{id:1,description:"Doga",imageLink:"https://assets.change.org/photos/7/vl/af/adVLafEUtAyeAvX-800x450-noPad.jpg?1517532044"},{id:2,description:"DeadPool",imageLink:"https://static0.srcdn.com/wordpress/wp-content/uploads/2019/07/Deadpool-Liefeld-Comic-Cover.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"}],screen:"photos"},t}return Object(a.a)(n,[{key:"removePhoto",value:function(t){console.log(t.description),this.setState((function(e){return{posts:e.posts.filter((function(e){return e!=t}))}}))}},{key:"addPhoto",value:function(t){this.setState((function(e){return{posts:e.posts.concat([t])}}))}},{key:"render",value:function(){var t=this;return console.log(this.state.posts),Object(u.jsxs)("div",{children:[Object(u.jsx)(p.c,{exact:!0,path:"/",render:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{title:"ChitraPat"}),Object(u.jsx)(b,{posts:t.state.posts,onRemovePhoto:t.removePhoto,onNavigate:t.navigate})]})}}),Object(u.jsx)(p.c,{path:"/AddPhoto",render:function(e){var n=e.history;return Object(u.jsx)(v,{onAddPhoto:function(e){t.addPhoto(e),n.push("/")}})}})]})}}]),n}(o.Component);n(37);s.a.render(Object(u.jsx)(p.a,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.cf184924.chunk.js.map