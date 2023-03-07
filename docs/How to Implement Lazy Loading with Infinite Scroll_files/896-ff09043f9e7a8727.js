"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[896],{1740:function(e,t,r){r.d(t,{Z:function(){return P}});var n=r(9499),i=r(7294),o=r(1664),s=r.n(o),a=r(8641),l=r(2494),c=r(3812),d=r(9583),u=r(2167);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=new Map,b=new WeakMap,g=0,v=void 0;function m(e,t,r,n){if(void 0===r&&(r={}),void 0===n&&(n=v),void 0===window.IntersectionObserver&&void 0!==n){var i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var o=function(e){var t=Object.keys(e).sort().filter(function(t){return void 0!==e[t]}).map(function(t){var r;return t+"_"+("root"===t?(r=e.root)?(b.has(r)||(g+=1,b.set(r,g.toString())),b.get(r)):"0":e[t])}).toString(),r=f.get(t);if(!r){var n,i=new Map,o=new IntersectionObserver(function(t){t.forEach(function(t){var r,o=t.isIntersecting&&n.some(function(e){return t.intersectionRatio>=e});e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=i.get(t.target))||r.forEach(function(e){e(o,t)})})},e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:i},f.set(t,r)}return r}(r),s=o.id,a=o.observer,l=o.elements,c=l.get(e)||[];return l.has(e)||l.set(e,c),c.push(t),a.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(l.delete(e),a.unobserve(e)),0===l.size&&(a.disconnect(),f.delete(s))}}var y=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function w(e){return"function"!=typeof e.children}var j=function(e){function t(t){var r;return(r=e.call(this,t)||this).node=null,r._unobserveCb=null,r.handleNode=function(e){!r.node||(r.unobserve(),e||r.props.triggerOnce||r.props.skip||r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=e||null,r.observeNode()},r.handleChange=function(e,t){e&&r.props.triggerOnce&&r.unobserve(),w(r.props)||r.setState({inView:e,entry:t}),r.props.onChange&&r.props.onChange(e,t)},r.state={inView:!!t.initialInView,entry:void 0},r}(r=t).prototype=Object.create(e.prototype),r.prototype.constructor=r,p(r,e);var r,n=t.prototype;return n.componentDidUpdate=function(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,r=e.root,n=e.rootMargin,i=e.trackVisibility,o=e.delay,s=e.fallbackInView;this._unobserveCb=m(this.node,this.handleChange,{threshold:t,root:r,rootMargin:n,trackVisibility:i,delay:o},s)}},n.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},n.render=function(){if(!w(this.props)){var e=this.state,t=e.inView,r=e.entry;return this.props.children({inView:t,entry:r,ref:this.handleNode})}var n=this.props,o=n.children,s=n.as,a=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(n,y);return i.createElement(s||"div",h({ref:this.handleNode},a),o)},t}(i.Component);j.displayName="InView",j.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var O=r(8738),k=r(8694),x=r(5893);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var S={large:{width:1130,height:330},small:{width:1640,height:1002}},_={width:500,height:500},P=function(e){var t,r,n,o,h,p,f,b,g,v,y,w,j,C,P,E,I,M,z,D,H,Z=e.jam,R=e.size,F=Z.author,N=Z.cover,W=null===(M=Z.postMetadata)||void 0===M?void 0:M.featured,A=(0,i.useState)(),B=A[0],J=A[1],L=null===(z=Z.tags)||void 0===z?void 0:z.filter(function(e){return!!e}),T=null==L?void 0:L.slice(0,3),U=null==L?void 0:L.slice(3),G=S[void 0===R?"small":R],q=(n=(r=void 0===t?{}:t).threshold,o=r.delay,h=r.trackVisibility,p=r.rootMargin,f=r.root,b=r.triggerOnce,g=r.skip,v=r.initialInView,y=r.fallbackInView,w=i.useRef(),C=(j=i.useState({inView:!!v}))[0],P=j[1],E=i.useCallback(function(e){void 0!==w.current&&(w.current(),w.current=void 0),!g&&e&&(w.current=m(e,function(e,t){P({inView:e,entry:t}),t.isIntersecting&&b&&w.current&&(w.current(),w.current=void 0)},{root:f,rootMargin:p,threshold:n,trackVisibility:h,delay:o},y))},[Array.isArray(n)?n.toString():n,f,p,b,g,h,y,o]),(0,i.useEffect)(function(){w.current||!C.entry||b||g||P({inView:!!v})}),(I=[E,C.inView,C.entry]).ref=I[0],I.inView=I[1],I.entry=I[2],I),K=q.ref,Q=q.inView;return q.entry,(0,i.useEffect)(function(){var e,t,r;Q&&J({background:null==N?void 0:null===(e=N.asset)||void 0===e?void 0:e.url,author:null==F?void 0:null===(t=F.image)||void 0===t?void 0:null===(r=t.asset)||void 0===r?void 0:r.url})},[Q]),(0,x.jsx)(a.xu,{ref:K,position:"relative",width:"100%",overflow:"hidden",height:"0",pt:"".concat(G.height/G.width*100,"%"),borderRadius:"4",backgroundColor:"#6347e2",children:(0,x.jsx)(a.rU,{as:s(),href:"/post/".concat(Z.slug.current),passHref:!0,display:"block",position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundImage:(null==B?void 0:B.background)&&(0,O.Z)(B.background,{w:G.width,h:G.height}),backgroundSize:"cover",backgroundPosition:"center center",children:(0,x.jsxs)(a.kC,{direction:"column",justifyContent:"space-between",position:"absolute",top:"0",left:"0",zIndex:"1",width:"100%",height:"100%",bgGradient:"linear(to-tr, rgba(27, 20, 100, .9) 25%, rgba(27, 20, 100, 0))",p:{base:4,md:6},children:[(0,x.jsxs)(a.aV,{children:[W&&(0,x.jsx)(a.HC,{display:"inline-block",mx:"2",_first:{marginLeft:0},_last:{marginRight:0},children:(0,x.jsxs)(a.Ct,{display:"flex",alignItems:"center",color:"#4E380B",fontSize:{base:10,md:12},fontWeight:"bold",lineHeight:{base:5,md:7},textTransform:"none",backgroundColor:"#ECC503",px:{base:2,md:3},children:[(0,x.jsx)(l.JO,{as:d.FaStar,mr:"1"}),"Featured Jam"]})}),(0,x.jsx)(a.HC,{display:"inline-block",mx:{sm:1,md:2},_first:{marginLeft:0},_last:{marginRight:0},children:(0,x.jsxs)(a.Ct,{display:"flex",alignItems:"center",color:"white",fontSize:{base:10,md:12},fontWeight:"bold",lineHeight:{base:5,md:7},textTransform:"none",backgroundColor:"#3169E1",px:{base:2,md:3},children:[(null===(D=Z.tags[0])||void 0===D?void 0:D.icon)&&(0,x.jsx)(k.Z,V(V({},Z.tags[0].icon||{name:"FaTag",provider:"fa"}),{},{mr:"1"})),null===(H=Z.tags[0])||void 0===H?void 0:H.title]})})]}),(0,x.jsxs)(a.xu,{children:[(0,x.jsx)(a.xv,{color:"white",fontSize:{base:20,md:24},fontWeight:"bold",mb:{base:.5,md:1},children:Z.title}),(0,x.jsxs)(a.aV,{lineHeight:{base:4,md:8},mb:{base:2,md:4},children:[T.map(function(e){return(0,x.jsxs)(a.HC,{display:"inline-block",color:"#D2CEFF",fontSize:{base:10,md:14},fontWeight:"semibold",lineHeight:"inherit",mx:"2",_first:{marginLeft:0},_last:{marginRight:0},children:["#",e.title]},e._id)}),U.length>0&&(0,x.jsxs)(a.HC,{display:"inline-block",color:"#D2CEFF",fontSize:{base:10,md:14},fontWeight:"semibold",lineHeight:"inherit",ml:"2",children:["+ ",U.length," more"]})]}),(0,x.jsxs)(a.kC,{children:[(0,x.jsx)(c.qE,{size:"md",name:F.name,src:(null==B?void 0:B.author)&&(0,O.Z)(B.author,{w:_.width,h:_.height}),mr:"4"}),(0,x.jsxs)(a.kC,{direction:"column",justifyContent:"center",children:[(0,x.jsx)(a.xv,{color:"white",fontSize:"16",fontWeight:"bold",mb:"1",children:F.name}),(0,x.jsx)(a.xv,{color:"#D2CEFF",fontSize:"11",fontWeight:"semibold",children:(0,u.Z)(new Date(Z.publishedAt),"MMMM d, yyyy")})]})]})]})]})})})}},9896:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(8641),i=r(1740),o=r(5893),s=function(e){var t=e.jams,r=e.columns,s=e.cardSize,a=void 0===s?"small":s;return(0,o.jsx)(n.rj,{as:n.aV,width:"100%",templateColumns:"repeat(".concat(void 0===r?1:r,", 1fr)"),gridGap:"6",children:t.map(function(e){return(0,o.jsx)(n.HC,{boxShadow:"0 2px 8px rgba(37, 41, 46, .4)",children:(0,o.jsx)(i.Z,{jam:e,size:a})},e._id)})})}},8694:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(9499),i=r(4730),o=r(2494),s=r(9583),a=r(3854),l=r(5893),c=["name","provider"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var u={fa:s,hi:a},h=function(e){var t=e.name,r=e.provider,s=(0,i.Z)(e,c),a=u[r]&&u[r][t];return a?(0,l.jsx)(o.JO,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({as:a},s)):null}}}]);
//# sourceMappingURL=896-ff09043f9e7a8727.js.map