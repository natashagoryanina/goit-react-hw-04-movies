(this.webpackJsonpapp1=this.webpackJsonpapp1||[]).push([[0],{11:function(e,t,n){"use strict";var c="https://api.themoviedb.org/3",r="?api_key=5197685d1d7e008be78723b4c9a471af";var a={fetchTrendingMovies:function(){return fetch("".concat(c,"/trending/movie/day").concat(r)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not Found"))}))},fetchSearchMovie:function(e){return fetch("".concat(c,"/search/movie").concat(r,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not Found"))}))},fetchMovieDetails:function(e){return fetch("".concat(c,"/movie/").concat(e).concat(r,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not Found"))}))},fetchMovieCredits:function(e){return fetch("".concat(c,"/movie/").concat(e,"/credits").concat(r,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not Found"))}))},fetchMovieReviews:function(e){return fetch("".concat(c,"/movie/").concat(e,"/reviews").concat(r,"&language=en-US&page=1")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not Found"))}))}};t.a=a},18:function(e,t,n){"use strict";n.r(t);var c=n(7),r=n(0),a=n(8),o=n(11),i=n(1);t.default=function(){var e=Object(r.useState)(null),t=Object(c.a)(e,2),n=t[0],s=t[1],u=Object(r.useState)(null),j=Object(c.a)(u,2),l=(j[0],j[1]);return Object(r.useEffect)((function(){o.a.fetchTrendingMovies().then((function(e){return s(e.results)})).catch(l)}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Trending today"}),Object(i.jsx)("ul",{children:n&&n.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)(a.b,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}},21:function(e,t,n){"use strict";n.r(t);var c=n(7),r=n(0),a=n(13),o=n(1),i=function(e){var t=e.onSubmit,n=Object(r.useState)(""),i=Object(c.a)(n,2),s=i[0],u=i[1];return Object(o.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==s.trim()?(t(s),u("")):a.b.error("Enter a movie title, please.")},children:[Object(o.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"movieTag",value:s,onChange:function(e){u(e.currentTarget.value.toLowerCase())}}),Object(o.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(o.jsx)("span",{className:"SearchForm-button-label",children:"Search"})})]})},s=n(11),u=n(8);t.default=function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),n=t[0],a=t[1],j=Object(r.useState)(null),l=Object(c.a)(j,2),h=l[0],b=l[1],d=Object(r.useState)(null),f=Object(c.a)(d,2),m=(f[0],f[1]);Object(r.useEffect)((function(){n&&s.a.fetchSearchMovie(n).then((function(e){return b(e.results)})).catch(m)}),[n]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{onSubmit:function(e){a(e)}}),Object(o.jsx)("ul",{children:h&&h.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(u.b,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}},26:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(12),a=n.n(r),o=n(8),i=(n(26),n(2)),s=n(18),u=n(21),j=[{name:"Home",path:"/",component:s.default,exact:!0},{name:"Movies",path:"/movies",component:u.default,exact:!1}],l=n(1),h=function(){return Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{className:"header-list",children:j.map((function(e){return Object(l.jsx)("li",{className:"header-list_item",children:Object(l.jsx)(o.c,{to:e.path,exact:e.exact,className:"header-list_link",activeClassName:"header-list_link-active",children:e.name})},e.path)}))})})},b=function(){return Object(l.jsx)("header",{children:Object(l.jsx)(h,{})})},d=n(13),f=(n(33),Object(c.lazy)((function(){return Promise.resolve().then(n.bind(null,18))}))),m=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,35))})),O=Object(c.lazy)((function(){return Promise.resolve().then(n.bind(null,21))})),x=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{}),Object(l.jsx)(d.a,{}),Object(l.jsx)(c.Suspense,{children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",exact:!0,children:Object(l.jsx)(f,{})}),Object(l.jsx)(i.a,{path:"/movies",exact:!0,children:Object(l.jsx)(O,{})}),Object(l.jsx)(i.a,{path:"/movies/:movieId",children:Object(l.jsx)(m,{})}),Object(l.jsx)(i.a,{children:Object(l.jsx)(f,{})})]})})]})};a.a.render(Object(l.jsx)(o.a,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.291e5840.chunk.js.map