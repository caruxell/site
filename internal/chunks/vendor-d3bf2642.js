function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let s;function l(t,n){return s||(s=document.createElement("a")),s.href=n,t===s.href}function a(t,n,e,o){if(t){const i=u(t,n,e,o);return t[0](i)}}function u(t,e,o,i){return t[1]&&i?n(o.ctx.slice(),t[1](i(e))):o.ctx}function f(t,n,e,o,i,r,c){const s=function(t,n,e,o){if(t[2]&&o){const i=t[2](o(e));if(void 0===n.dirty)return i;if("object"==typeof i){const t=[],e=Math.max(n.dirty.length,i.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|i[o];return t}return n.dirty|i}return n.dirty}(n,o,i,r);if(s){const i=u(n,e,o,c);t.p(i,s)}}let d,h=!1;function _(t,n,e,o){for(;t<n;){const i=t+(n-t>>1);e(i)<=o?t=i+1:n=i}return t}function m(t,n){if(h){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let i=0;for(let l=0;l<n.length;l++){const t=n[l].claim_order,r=(i>0&&n[e[i]].claim_order<=t?i+1:_(1,i,(t=>n[e[t]].claim_order),t))-1;o[l]=e[r]+1;const c=r+1;e[c]=l,i=Math.max(c,i)}const r=[],c=[];let s=n.length-1;for(let l=e[i]+1;0!=l;l=o[l-1]){for(r.push(n[l-1]);s>=l;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);r.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let l=0,a=0;l<c.length;l++){for(;a<r.length&&c[l].claim_order>=r[a].claim_order;)a++;const n=a<r.length?r[a]:null;t.insertBefore(c[l],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode!==t&&t.appendChild(n)}function p(t,n,e){t.insertBefore(n,e||null)}function g(t,n,e){h&&!e?m(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function y(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function b(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function v(){return x(" ")}function w(){return x("")}function E(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function A(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function N(t){return Array.from(t.childNodes)}function T(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function k(t,n,e,o,i=!1){T(t);const r=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const r=t[o];if(n(r)){const n=e(r);return void 0===n?t.splice(o,1):t[o]=n,i||(t.claim_info.last_index=o),r}}for(let o=t.claim_info.last_index-1;o>=0;o--){const r=t[o];if(n(r)){const n=e(r);return void 0===n?t.splice(o,1):t[o]=n,i?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,r}}return o()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function S(t,n,e,o){return k(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const i=t.attributes[o];e[i.name]||n.push(i.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):b(n)))}function M(t,n){return k(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>x(n)),!0)}function j(t){return M(t," ")}function L(t,n,e){for(let o=e;o<t.length;o+=1){const e=t[o];if(8===e.nodeType&&e.textContent.trim()===n)return o}return t.length}function B(t){const n=L(t,"HTML_TAG_START",0),e=L(t,"HTML_TAG_END",n);if(n===e)return new O;T(t);const o=t.splice(n,e+1);$(o[0]),$(o[o.length-1]);const i=o.slice(1,o.length-1);for(const r of i)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new O(i)}function C(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function H(t,n=document.body){return Array.from(n.querySelectorAll(t))}class O extends class{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,n,e=null){this.e||(this.e=b(n.nodeName),this.t=n,this.c(t)),this.i(e)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)p(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach($)}}{constructor(t){super(),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let n=0;n<this.n.length;n+=1)g(this.t,this.n[n],t)}}function q(t){d=t}function D(){if(!d)throw new Error("Function called outside component initialization");return d}function G(t){D().$$.on_mount.push(t)}function I(t){D().$$.after_update.push(t)}function z(t,n){D().$$.context.set(t,n)}const F=[],J=[],K=[],P=[],R=Promise.resolve();let W=!1;function Q(t){K.push(t)}let U=!1;const V=new Set;function X(){if(!U){U=!0;do{for(let t=0;t<F.length;t+=1){const n=F[t];q(n),Y(n.$$)}for(q(null),F.length=0;J.length;)J.pop()();for(let t=0;t<K.length;t+=1){const n=K[t];V.has(n)||(V.add(n),n())}K.length=0}while(F.length);for(;P.length;)P.pop()();W=!1,U=!1,V.clear()}}function Y(t){if(null!==t.fragment){t.update(),i(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(Q)}}const Z=new Set;let tt;function nt(){tt={r:0,c:[],p:tt}}function et(){tt.r||i(tt.c),tt=tt.p}function ot(t,n){t&&t.i&&(Z.delete(t),t.i(n))}function it(t,n,e,o){if(t&&t.o){if(Z.has(t))return;Z.add(t),tt.c.push((()=>{Z.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const rt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function ct(t,n){const e={},o={},i={$$scope:1};let r=t.length;for(;r--;){const c=t[r],s=n[r];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)i[t]||(e[t]=s[t],i[t]=1);t[r]=s}else for(const t in c)i[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function st(t){return"object"==typeof t&&null!==t?t:{}}function lt(t){t&&t.c()}function at(t,n){t&&t.l(n)}function ut(t,n,o,c){const{fragment:s,on_mount:l,on_destroy:a,after_update:u}=t.$$;s&&s.m(n,o),c||Q((()=>{const n=l.map(e).filter(r);a?a.push(...n):i(n),t.$$.on_mount=[]})),u.forEach(Q)}function ft(t,n){const e=t.$$;null!==e.fragment&&(i(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function dt(t,n){-1===t.$$.dirty[0]&&(F.push(t),W||(W=!0,R.then(X)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ht(n,e,r,c,s,l,a,u=[-1]){const f=d;q(n);const _=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:o(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};a&&a(_.root);let m=!1;if(_.ctx=r?r(n,e.props||{},((t,e,...o)=>{const i=o.length?o[0]:e;return _.ctx&&s(_.ctx[t],_.ctx[t]=i)&&(!_.skip_bound&&_.bound[t]&&_.bound[t](i),m&&dt(n,t)),e})):[],_.update(),m=!0,i(_.before_update),_.fragment=!!c&&c(_.ctx),e.target){if(e.hydrate){h=!0;const t=N(e.target);_.fragment&&_.fragment.l(t),t.forEach($)}else _.fragment&&_.fragment.c();e.intro&&ot(n.$$.fragment),ut(n,e.target,e.anchor,e.customElement),h=!1,X()}q(f)}class _t{$destroy(){ft(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const mt=[];function pt(n,e=t){let o;const i=[];function r(t){if(c(n,t)&&(n=t,o)){const t=!mt.length;for(let e=0;e<i.length;e+=1){const t=i[e];t[1](),mt.push(t,n)}if(t){for(let t=0;t<mt.length;t+=2)mt[t][0](mt[t+1]);mt.length=0}}}return{set:r,update:function(t){r(t(n))},subscribe:function(c,s=t){const l=[c,s];return i.push(l),1===i.length&&(o=e(r)||t),c(n),()=>{const t=i.indexOf(l);-1!==t&&i.splice(t,1),0===i.length&&(o(),o=null)}}}}export{G as A,n as B,pt as C,a as D,H as E,l as F,m as G,f as H,t as I,rt as J,E as K,i as L,O as M,B as N,y as O,_t as S,N as a,A as b,S as c,$ as d,b as e,g as f,M as g,C as h,ht as i,lt as j,v as k,w as l,at as m,j as n,ut as o,ct as p,st as q,nt as r,c as s,x as t,it as u,ft as v,et as w,ot as x,z as y,I as z};
