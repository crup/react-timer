(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{979:function(e,n,t){"use strict";t.r(n);t(13),t(7),t(6),t(4),t(8),t(5);var r=t(10),c=(t(1),t(80)),i=t(971),o=(t(33),t(64)),a=t(981),u=function(){return Object(r.c)(o.d,{code:"\n    <ReactTimer\n    start={0}\n    end={(value) => value === 30}\n    onEnd={(value) => console.log('ENDED WITH VALUE', value)}\n    onTick={(value) => value + 1}>\n        {(time) => <div>{time}</div>}\n    </ReactTimer>".trim(),scope:{ReactTimer:a.a}},Object(r.c)("div",{style:{caretColor:"white",background:"rgb(32, 35, 42)"}},Object(r.c)(o.a,null)),Object(r.c)("div",null,Object(r.c)(o.b,null),Object(r.c)(o.c,null)))},l=u;function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"Editor",filename:"docs/live-editor.jsx"}}),t.d(n,"_frontmatter",(function(){return d})),t.d(n,"default",(function(){return m}));var d={};void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/playground.mdx"}});var b={_frontmatter:d},s=i.a;function m(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,["components"]);return Object(c.b)(s,f({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"playground"},"Playground"),Object(c.b)("p",null,"Test your own timer component here: "),Object(c.b)(l,{mdxType:"Editor"}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/playground.mdx"}}),m.isMDXComponent=!0},981:function(e,n,t){"use strict";t(5);var r=t(1),c=t(12),i=t.n(c),o=function(e){var n=e.children,t=e.start,c=void 0===t?0:t,i=e.end,o=void 0===i?function(){return!0}:i,a=e.interval,u=void 0===a?1e3:a,l=e.onEnd,f=void 0===l?function(){}:l,d=e.onTick,b=void 0===d?function(){}:d,s=Object(r.useState)(c),m=s[0],v=s[1],j=Object(r.useRef)();return Object(r.useEffect)((function(){j.current||(j.current=window.setInterval((function(){v((function(e){return b(e)}))}),u)),o(m)&&(window.clearInterval(j.current),f(m))}),[o,u,f,b,m]),Object(r.useEffect)((function(){return function(){window.clearInterval(j.current)}}),[]),n(m)};o.propTypes={children:i.a.func.isRequired,start:i.a.number.isRequired,end:i.a.func.isRequired,interval:i.a.number,onTick:i.a.func,onEnd:i.a.func},n.a=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"ReactTimer",filename:"src/index.js"}}),o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"ReactTimer",filename:"src/index.js"}})}}]);
//# sourceMappingURL=component---docs-playground-mdx-46dd04f6d4f3ae609807.js.map