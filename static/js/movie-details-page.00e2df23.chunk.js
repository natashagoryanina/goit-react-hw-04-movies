(this.webpackJsonpapp1=this.webpackJsonpapp1||[]).push([[5],{58:function(e,n,t){"use strict";function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],o=!0,i=!1,r=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(t.push(c.value),!n||t.length!==n);o=!0);}catch(s){i=!0,r=s}finally{try{o||null==a.return||a.return()}finally{if(i)throw r}}return t}}(e,n)||function(e,n){if(e){if("string"===typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,"a",(function(){return i}))},59:function(e,n,t){"use strict";var o="https://api.themoviedb.org/3",i="?api_key=5197685d1d7e008be78723b4c9a471af";var r={fetchTrendingMovies:function(){return fetch("".concat(o,"/trending/movie/day").concat(i)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not Found"))}))},fetchSearchMovie:function(e){return fetch("".concat(o,"/search/movie").concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not Found"))}))},fetchMovieDetails:function(e){return fetch("".concat(o,"/movie/").concat(e).concat(i,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not Found"))}))},fetchMovieCredits:function(e){return fetch("".concat(o,"/movie/").concat(e,"/credits").concat(i,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not Found"))}))},fetchMovieReviews:function(e){return fetch("".concat(o,"/movie/").concat(e,"/reviews").concat(i,"&language=en-US&page=1")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not Found"))}))}};n.a=r},64:function(e,n,t){"use strict";t.r(n);var o,i=t(58),r=t(0),c=t(1),a=t(18),s=t(19),l=t.n(s),u=t(59),f=t(16),d=t(17).b.div(o||(o=Object(f.a)(["\n    img {\n        width: 300px;\n        margin-right: 40px;\n    }\n\n    .go-back-button{\n        background:  #a0b90d;\n        border: 0;\n        border-radius: 12px;\n        color: #FFFFFF;\n        cursor: pointer;\n        display: inline-block;\n        font-family: 'Nunito', sans-serif;\n        font-size: 16px;\n        font-weight: 500;\n        line-height: 2.5;\n        outline: transparent;\n        padding: 0 8px;\n        margin: 10px 0;\n        text-align: center;\n        text-decoration: none;\n        transition: box-shadow .2s ease-in-out;\n    }\n\n    .go-back-button:not([disabled]):hover {\n        box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(255, 255, 255, 0.5), .125rem .125rem 1rem rgba(208, 255, 1, 0.5);\n    }\n\n    .movie {\n        display: flex;\n        flex-direction: row;\n        border-bottom: 1px solid #fff;\n        padding-bottom: 20px;\n\n        &_title {\n            margin: 0;\n            font-family: 'Nunito', sans-serif;\n            color: #bedd0f;\n        }\n\n        &_text {\n            font-family: 'Nunito', sans-serif;\n            color: #c2c0c0;\n            font-size: 16px;\n\n            &-accent {\n                color: #fff;\n            }\n        }\n\n        &_genres {\n            display: flex;\n            flex-direction: row;\n            color: #c2c0c0;\n\n            &-item {\n                margin-left: 7px;\n            }\n        }\n    }\n\n    .movie-info {\n        font-family: 'Nunito', sans-serif;\n        color: #fff;\n\n        &_list {\n            display: flex;\n            flex-direction: column;\n\n            &-item {\n                margin-bottom: 14px;\n            }\n\n            &-link {\n                font-family: 'Nunito', sans-serif;\n                font-size: 18px;\n                color: #fff;\n                outline: none;\n                text-decoration: none;\n\n                &-active {\n                    color: #bedd0f;\n                }\n                &:hover {\n                    color: #858585;\n                }\n            }\n        }\n    }\n\n\n"]))),m=t(3),b=Object(r.lazy)((function(){return t.e(0).then(t.bind(null,65))})),h=Object(r.lazy)((function(){return t.e(6).then(t.bind(null,66))}));n.default=function(){var e,n,t,o,s=Object(c.g)(),f=s.state.from.location.pathname,v=s.state.from.label,j=Object(c.h)().movieId,p=Object(c.i)().url,x=Object(r.useState)({}),g=Object(i.a)(x,2),O=g[0],y=g[1],w=Object(r.useState)(null),N=Object(i.a)(w,2),_=(N[0],N[1]),k=Object(c.f)(),S=new Date("".concat(O.release_date)).getFullYear();Object(r.useEffect)((function(){u.a.fetchMovieDetails(j).then(y).catch(_)}),[j]);return Object(m.jsxs)(d,{children:[Object(m.jsx)("button",{className:"go-back-button",type:"button",onClick:function(){var e,n,t;k.push(null!==(e=null===s||void 0===s||null===(n=s.state)||void 0===n||null===(t=n.from)||void 0===t?void 0:t.location)&&void 0!==e?e:"/")},children:null!==(e=null===s||void 0===s||null===(n=s.state)||void 0===n||null===(t=n.from)||void 0===t?void 0:t.label)&&void 0!==e?e:"Go back"}),Object(m.jsxs)("div",{className:"movie",children:[Object(m.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(O.poster_path),alt:O.title}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("h2",{className:"movie_title",children:[O.title," ",Object(m.jsxs)("span",{children:["(",S,")"]})]}),Object(m.jsxs)("p",{className:"movie_text",children:[Object(m.jsx)("span",{className:"movie_text-accent",children:"User score:"})," ",10*O.vote_average,"%"]}),Object(m.jsxs)("p",{className:"movie_text",children:[Object(m.jsx)("span",{className:"movie_text-accent",children:"Overview:"})," ",O.overview]}),Object(m.jsxs)("ul",{className:"movie_genres",children:[Object(m.jsx)("span",{className:"movie_text-accent",children:"Genres:"}),null===(o=O.genres)||void 0===o?void 0:o.map((function(e){return Object(m.jsx)("li",{className:"movie_genres-item",children:e.name},e.id)}))]})]})]}),Object(m.jsx)("h3",{className:"movie-info",children:"Additional information"}),Object(m.jsxs)("ul",{className:"movie-info_list",children:[Object(m.jsx)("li",{className:"movie-info_list-item",children:Object(m.jsx)(a.c,{className:"movie-info_list-link",activeClassName:"movie-info_list-link-active",to:{pathname:"".concat(p,"/cast"),state:{from:{location:{pathname:f},label:v}}},children:" Cast"})},O.id),Object(m.jsx)("li",{children:Object(m.jsx)(a.c,{className:"movie-info_list-link",activeClassName:"movie-info_list-link-active",to:{pathname:"".concat(p,"/reviews"),state:{from:{location:{pathname:f},label:v}}},children:" Reviews"})},O.id)]}),Object(m.jsxs)(r.Suspense,{fallback:Object(m.jsx)(l.a,{type:"ThreeDots",color:"#000000",height:70,width:70,timeout:3e3}),children:[Object(m.jsx)(c.a,{path:"/movies/:movieId/cast",children:Object(m.jsx)(b,{movieId:j})}),Object(m.jsx)(c.a,{path:"/movies/:movieId/reviews",children:Object(m.jsx)(h,{movieId:j})})]})]})}}}]);
//# sourceMappingURL=movie-details-page.00e2df23.chunk.js.map