(this.webpackJsonpapp1=this.webpackJsonpapp1||[]).push([[3],{35:function(e,t,c){"use strict";c.r(t);var n=c(7),i=c(0),s=c(2),j=c(8),r=c(11),a=c(1),l=function(e){var t=e.movieId,c=Object(i.useState)(null),s=Object(n.a)(c,2),j=s[0],l=s[1],h=Object(i.useState)(null),b=Object(n.a)(h,2),d=(b[0],b[1]);return Object(i.useEffect)((function(){r.a.fetchMovieCredits(t).then((function(e){return l(e.cast)})).catch(d)}),[t]),Object(a.jsx)(a.Fragment,{children:j&&Object(a.jsx)("ul",{children:j.map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(e.profile_path),alt:e.name}),Object(a.jsx)("p",{children:e.name}),Object(a.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})})},h=function(e){var t=e.movieId,c=Object(i.useState)([]),s=Object(n.a)(c,2),j=s[0],l=s[1],h=Object(i.useState)(null),b=Object(n.a)(h,2),d=(b[0],b[1]);return Object(i.useEffect)((function(){r.a.fetchMovieReviews(t).then((function(e){return l(e.results)})).catch(d)}),[t]),Object(a.jsx)(a.Fragment,{children:j.length?Object(a.jsx)("ul",{children:j.map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsx)("h3",{children:e.author}),Object(a.jsx)("p",{children:e.content})]},e.id)}))}):Object(a.jsx)("p",{children:"We don't have any reviews for this movie."})})};t.default=function(){var e,t=Object(s.f)().movieId,c=Object(s.g)().url,b=Object(i.useState)({}),d=Object(n.a)(b,2),o=d[0],O=d[1],u=Object(i.useState)(null),x=Object(n.a)(u,2),v=(x[0],x[1]),p=new Date("".concat(o.release_date)).getFullYear();return Object(i.useEffect)((function(){r.a.fetchMovieDetails(t).then(O).catch(v)}),[t]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(o.poster_path),alt:o.title}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:[o.title," ",Object(a.jsxs)("span",{children:["(",p,")"]})]}),Object(a.jsxs)("p",{children:["User score: ",10*o.vote_average,"%"]}),Object(a.jsx)("p",{children:o.overview}),Object(a.jsx)("ul",{children:null===(e=o.genres)||void 0===e?void 0:e.map((function(e){return Object(a.jsx)("li",{children:e.name},e.id)}))})]})]}),Object(a.jsx)("h3",{children:"Additional information"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(j.c,{to:"".concat(c,"/cast"),children:"Cast"})},o.id),Object(a.jsx)("li",{children:Object(a.jsx)(j.c,{to:"".concat(c,"/reviews"),children:"Reviews"})},o.id)]}),Object(a.jsx)(s.a,{path:"/movies/:movieId/cast",children:Object(a.jsx)(l,{movieId:t})}),Object(a.jsx)(s.a,{path:"/movies/:movieId/reviews",children:Object(a.jsx)(h,{movieId:t})})]})}}}]);
//# sourceMappingURL=3.8eafb38e.chunk.js.map