"use strict";(self.webpackChunkd_toolkit=self.webpackChunkd_toolkit||[]).push([[904],{52822:function(y,a,e){var p;e.r(a),e.d(a,{demos:function(){return Y}});var s=e(90228),h=e.n(s),V=e(87999),K=e.n(V),W=e(75271),re=e(89034),P=e(21647),Y={"docs-components-button-demo-0":{component:W.memo(W.lazy(K()(h()().mark(function M(){var i,m,l,O;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return i=d.sent,m=i.default,d.next=6,Promise.resolve().then(e.bind(e,21647));case 6:return l=d.sent,O=l.ButtonExt,d.abrupt("return",{default:function(){var J=function(){return new Promise(function(pe){setTimeout(pe,2e3)})};return m.createElement("div",null,m.createElement(O,{onClick:function(){return alert("clicked")}},"\u666E\u901A\u6309\u94AE"),m.createElement(O,{autoLoading:!0,onClick:J,style:{marginLeft:8}},"\u81EA\u52A8\u52A0\u8F7D\u6309\u94AE"))}});case 9:case"end":return d.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { ButtonExt } from '@d-toolkit/components';

export default () => {
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  };

  return (
    <div>
      <ButtonExt onClick={() => alert('clicked')}>\u666E\u901A\u6309\u94AE</ButtonExt>
      <ButtonExt autoLoading onClick={handleClick} style={{ marginLeft: 8 }}>
        \u81EA\u52A8\u52A0\u8F7D\u6309\u94AE
      </ButtonExt>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},"@d-toolkit/components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(W,2)),"@d-toolkit/components":P},renderOpts:{compile:function(){var M=K()(h()().mark(function m(){var l,O=arguments;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(107).then(e.bind(e,51107));case 2:return d.abrupt("return",(l=d.sent).default.apply(l,O));case 3:case"end":return d.stop()}},m)}));function i(){return M.apply(this,arguments)}return i}()}}}},43078:function(y,a,e){var p;e.r(a),e.d(a,{demos:function(){return Y}});var s=e(90228),h=e.n(s),V=e(87999),K=e.n(V),W=e(75271),re=e(79701),P=e(21647),Y={"docs-components-custom-preview-demo-0":{component:W.memo(W.lazy(K()(h()().mark(function M(){var i,m,l,O;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return i=d.sent,m=i.default,d.next=6,Promise.resolve().then(e.bind(e,21647));case 6:return l=d.sent,O=l.CustomPreview,d.abrupt("return",{default:function(){var J=[{id:"1",url:"https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",thumbnail:"https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"},{id:"3",url:"https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",thumbnail:"https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"},{id:"2",url:"https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",thumbnail:"https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"}];return m.createElement("div",{style:{height:"800px"}},m.createElement(O,{images:J,onIndexChange:console.log}))}});case 9:case"end":return d.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-components-custom-preview-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { CustomPreview } from '@d-toolkit/components';

export default () => {
  const images = [
    {
      id: '1',
      url: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
      thumbnail:
        'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    },
    {
      id: "3",
      url: "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
      thumbnail:
        "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
    },
    {
      id: "2",
      url: "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
      thumbnail:
        "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
    },
  ];

  return (
    <div style={{height: '800px'}}>
      <CustomPreview
        images={images}
        onIndexChange={console.log}
      />
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},"@d-toolkit/components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(W,2)),"@d-toolkit/components":P},renderOpts:{compile:function(){var M=K()(h()().mark(function m(){var l,O=arguments;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(107).then(e.bind(e,51107));case 2:return d.abrupt("return",(l=d.sent).default.apply(l,O));case 3:case"end":return d.stop()}},m)}));function i(){return M.apply(this,arguments)}return i}()}}}},6893:function(y,a,e){var p;e.r(a),e.d(a,{demos:function(){return Y}});var s=e(90228),h=e.n(s),V=e(87999),K=e.n(V),W=e(75271),re=e(94183),P=e(21647),Y={"docs-components-select-demo-0":{component:W.memo(W.lazy(K()(h()().mark(function M(){var i,m,l,O;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return i=d.sent,m=i.default,d.next=6,Promise.resolve().then(e.bind(e,21647));case 6:return l=d.sent,O=l.SelectExt,d.abrupt("return",{default:function(){var J=[{value:"apple",label:"\u82F9\u679C"},{value:"banana",label:"\u9999\u8549"},{value:"orange",label:"\u6A59\u5B50"}];return m.createElement("div",null,m.createElement(O,{style:{width:200},options:J,placeholder:"\u8BF7\u9009\u62E9\u6C34\u679C"}))}});case 9:case"end":return d.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-components-select-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { SelectExt } from '@d-toolkit/components';

export default () => {
  const options = [
    { value: 'apple', label: '\u82F9\u679C' },
    { value: 'banana', label: '\u9999\u8549' },
    { value: 'orange', label: '\u6A59\u5B50' },
  ];

  return (
    <div>
      <SelectExt
        style={{ width: 200 }}
        options={options}
        placeholder="\u8BF7\u9009\u62E9\u6C34\u679C"
      />
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},"@d-toolkit/components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(W,2)),"@d-toolkit/components":P},renderOpts:{compile:function(){var M=K()(h()().mark(function m(){var l,O=arguments;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(107).then(e.bind(e,51107));case 2:return d.abrupt("return",(l=d.sent).default.apply(l,O));case 3:case"end":return d.stop()}},m)}));function i(){return M.apply(this,arguments)}return i}()}}}},15146:function(y,a,e){e.r(a),e.d(a,{demos:function(){return h}});var p=e(75271),s=e(25534),h={}},13205:function(y,a,e){e.r(a),e.d(a,{demos:function(){return h}});var p=e(75271),s=e(14581),h={}},83552:function(y,a,e){e.r(a),e.d(a,{demos:function(){return h}});var p=e(75271),s=e(30188),h={}},46921:function(y,a,e){e.r(a),e.d(a,{demos:function(){return h}});var p=e(75271),s=e(53575),h={}},31908:function(y,a,e){e.r(a),e.d(a,{demos:function(){return h}});var p=e(75271),s=e(28101),h={}},57027:function(y,a,e){e.r(a),e.d(a,{demos:function(){return h}});var p=e(75271),s=e(34051),h={}},21647:function(y,a,e){e.r(a),e.d(a,{ButtonExt:function(){return d},CustomPreview:function(){return Ut},SelectExt:function(){return pe}});var p=e(26068),s=e.n(p),h=e(90228),V=e.n(h),K=e(87999),W=e.n(K),re=e(48305),P=e.n(re),Y=e(67825),M=e.n(Y),i=e(75271),m=e(51499),l=e(52676),O=["autoLoading","loadingDuration","onClick","children"],Q=function(c){var _=c.autoLoading,b=_===void 0?!1:_,E=c.loadingDuration,C=E===void 0?1e3:E,R=c.onClick,w=c.children,I=M()(c,O),D=(0,i.useState)(!1),k=P()(D,2),B=k[0],q=k[1],fe=function(){var ie=W()(V()().mark(function S(ee){return V()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:if(R){U.next=2;break}return U.abrupt("return");case 2:if(!b){U.next=16;break}return q(!0),U.prev=4,U.next=7,R(ee);case 7:setTimeout(function(){return q(!1)},C),U.next=14;break;case 10:throw U.prev=10,U.t0=U.catch(4),q(!1),U.t0;case 14:U.next=17;break;case 16:R(ee);case 17:case"end":return U.stop()}},S,null,[[4,10]])}));return function(ee){return ie.apply(this,arguments)}}();return(0,l.jsx)(m.ZP,s()(s()({},I),{},{loading:B,onClick:fe,children:w}))},d=Q,le=e(49952),J=["allowClear","autoFocus"],he=function(c){var _=c.allowClear,b=_===void 0?!0:_,E=c.autoFocus,C=E===void 0?!1:E,R=M()(c,J);return(0,l.jsx)(le.Z,s()({showSearch:!0,allowClear:b,autoFocus:C,filterOption:function(I,D){var k,B;return((k=D==null||(B=D.label)===null||B===void 0?void 0:B.toString())!==null&&k!==void 0?k:"").toLowerCase().includes(I.toLowerCase())}},R))},pe=he,it=e(53649),N=e.n(it),ut=e(94083),st=e(4081),ct=e(90386),vt=e(83418),mt=e(18922),ht=e(65313),pt=e(72523),It=e(10468),ft=e(69456),G=e(29066),we,Me,Oe,Re,De,xt=G.ZP.div(we||(we=N()([`
  width: 100%;
  height: calc(100% - 164px);
  display: flex;
  flex-direction: column;
  background: #ededed;
`]))),gt=G.ZP.div(Me||(Me=N()([`
  flex: 1;
  position: relative;
  overflow: hidden;
`]))),_t=G.ZP.div(Oe||(Oe=N()([`
  height: 64px;
  padding: 10px 0;
  background: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  padding-left: 16px;
  /*  */
  // \u6DFB\u52A0\u4EE5\u4E0B\u6837\u5F0F
  white-space: nowrap; // \u9632\u6B62\u5185\u5BB9\u6362\u884C
  flex-wrap: nowrap; // \u9632\u6B62flex\u9879\u76EE\u6362\u884C
  /* &::-webkit-scrollbar {
    height: 6px; // \u8BBE\u7F6E\u6EDA\u52A8\u6761\u9AD8\u5EA6
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc; // \u6EDA\u52A8\u6761\u989C\u8272
    border-radius: 3px; // \u6EDA\u52A8\u6761\u5706\u89D2
  } */
`]))),Et=G.ZP.div.attrs({role:"button"})(Re||(Re=N()([`
  min-width: 50px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  flex-shrink: 0;
  border: 2px solid `,`;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`])),function(g){return g.active?"#1890ff":"#eee"}),Ct=G.ZP.div(De||(De=N()([`
  height: 40px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 10px 0;
`]))),Pt=["newScale"],bt=["newScale"],yt=["newScale"],Ue,ke,je,Ie=function(c,_,b,E,C){var R=C%180!==0,w=R?E:b,I=R?b:E,D=Math.min(c/w,_/I),k=c/w<_/I,B=k?0:(c-w*D)*.5,q=k?(_-I*D)*.5:0;return{scale:D,x:B,y:q,effectiveImageWidth:w,effectiveImageHeight:I}},wt=function(c){var _=c.width,b=c.height,E=c.imageWidth,C=c.imageHeight,R=(_-Number(E))*.5,w=(b-Number(C))*.5;return{newScale:1,x:R,y:w}},Le=function(c){var _=c.width,b=c.height,E=c.imageWidth,C=c.imageHeight,R=c.isHeight,w=R?b/C:_/E,I=_/E<b/C,D=I?0:(_-E*w)*.5,k=I?(b-C*w)*.5:0;return{newScale:w,x:D,y:k}},de=function(c,_,b,E,C,R){var w=R%180!==0,I=w?E*C:b*C,D=w?b*C:E*C;return{x:(c-I)/2,y:(_-D)/2}},Mt=G.ZP.div(Ue||(Ue=N()([`
  position: absolute;
  transform-origin: center center;
  cursor: `,`;
`])),function(g){return g.isDragging?"grabbing":"grab"}),Ot=G.ZP.canvas(ke||(ke=N()([`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: `,`;
  opacity: `,`;
  transition: opacity 0.3s ease;
  background: rgba(100, 100, 100, 0.5);
`])),function(g){return g.isVisible?"auto":"none"},function(g){return g.isVisible?1:0}),Rt=G.ZP.canvas(je||(je=N()([`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`])));function Dt(g){var c,_,b,E,C=g.images,R=g.initialIndex,w=R===void 0?0:R,I=g.onIndexChange,D=g.onOcrRequest,k=g.rectPosition,B=g.onImageChange,q=g.pagination;console.log("rectPosition:",k);var fe=(0,i.useState)(w),ie=P()(fe,2),S=ie[0],ee=ie[1],We=(0,i.useState)(1),U=P()(We,2),A=U[0],X=U[1],kt=(0,i.useState)(0),Te=P()(kt,2),f=Te[0],jt=Te[1],Lt=(0,i.useState)({x:0,y:0}),Be=P()(Lt,2),te=Be[0],$=Be[1],Wt=(0,i.useState)(!1),Se=P()(Wt,2),Ae=Se[0],Ke=Se[1],Tt=(0,i.useState)({x:0,y:0}),He=P()(Tt,2),Ze=He[0],Bt=He[1],j=(0,i.useRef)(null),F=(0,i.useRef)(null),St=(0,i.useState)(!1),ze=P()(St,2),ue=ze[0],$e=ze[1],At=(0,i.useState)({x:0,y:0}),Fe=P()(At,2),H=Fe[0],Kt=Fe[1],Ht=(0,i.useState)({x:0,y:0}),Ve=P()(Ht,2),ae=Ve[0],Ne=Ve[1],Zt=(0,i.useState)(!1),Ge=P()(Zt,2),T=Ge[0],Xe=Ge[1],oe=(0,i.useRef)(null),Ye=(0,i.useRef)(null),zt=(0,i.useState)({width:0,height:0}),Qe=P()(zt,2),Z=Qe[0],Je=Qe[1],xe=C[S],qe=(0,i.useRef)([]),et=(0,i.useRef)(null),tt=(0,i.useCallback)(function(){var n=j.current;if(n){var t=document.createElement("canvas"),o=f%180!==0;o?(t.width=n.height,t.height=n.width):(t.width=n.width,t.height=n.height);var r=t.getContext("2d");if(r){r.save(),r.translate(t.width/2,t.height/2),r.rotate(f*Math.PI/180),r.translate(-n.width/2,-n.height/2),r.drawImage(n,0,0),r.restore();var u=t.toDataURL("image/png"),v=document.createElement("img");v.src=u,v.style.maxWidth="100%",v.style.height="auto",v.style.display="block",v.style.marginTop="20px",document.body.appendChild(v),console.log("Entire image captured and displayed in body")}}},[f]);(0,i.useEffect)(function(){if(xe){var n=new Image;n.crossOrigin="anonymous",n.src=xe.url,n.onload=function(){var t=j.current,o=F.current;if(!(!t||!o)){var r=t.getContext("2d");if(r){_e(0),t.width=n.width,t.height=n.height;var u=Ie(o.clientWidth,o.clientHeight,n.width,n.height,f),v=u.scale,x=u.effectiveImageWidth,L=u.effectiveImageHeight,ne=de(o.clientWidth,o.clientHeight,n.width,n.height,v,f);X(v),$(ne),Je({width:x,height:L}),r.clearRect(0,0,t.width,t.height),r.drawImage(n,0,0)}}}}},[xe]),(0,i.useEffect)(function(){var n=function(){var o=j.current,r=F.current;if(!(!o||!r)){var u=Ie(r.clientWidth,r.clientHeight,o.width,o.height,f),v=u.scale,x=u.x,L=u.y;X(v),$({x,y:L})}};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}},[f]);var $t=function(t){Ke(!0),Bt({x:t.clientX-te.x,y:t.clientY-te.y})},Ft=function(t){Ae&&$({x:t.clientX-Ze.x,y:t.clientY-Ze.y})},nt=function(){Ke(!1)},Vt=function(){var t=Math.max(S-1,0);ee(t),I==null||I(t)},Nt=function(){var t=Math.min(S+1,C.length-1);ee(t),I==null||I(t)},Gt=function(t){ee(t),I==null||I(t);var o=qe.current[t],r=et.current;if(o&&r){var u=r.getBoundingClientRect(),v=o.getBoundingClientRect(),x=o.offsetLeft-u.width/2+v.width/2;r.scrollTo({left:x,behavior:"smooth"})}},ge=(0,i.useCallback)(function(n){(n.metaKey||n.altKey)&&n.keyCode===90&&(n.preventDefault(),Xe(!0)),(n.metaKey||n.altKey)&&n.keyCode===88&&(n.preventDefault(),tt())},[tt]);(0,i.useEffect)(function(){return window.addEventListener("keydown",ge),function(){window.removeEventListener("keydown",ge)}},[ge]);var Xt=(0,i.useCallback)(function(n){$e(!0);var t=oe.current;if(t){var o=t.getBoundingClientRect(),r={x:n.clientX-o.left,y:n.clientY-o.top};Kt(r),Ne(r)}},[]),Yt=(0,i.useCallback)(function(n){if(ue){var t=oe.current;if(t){var o=t.getBoundingClientRect(),r={x:n.clientX-o.left,y:n.clientY-o.top};Ne(r);var u=t.getContext("2d");u&&(u.clearRect(0,0,t.width,t.height),u.strokeStyle="white",u.lineWidth=2,u.strokeRect(Math.min(H.x,r.x),Math.min(H.y,r.y),Math.abs(r.x-H.x),Math.abs(r.y-H.y)))}}},[ue,H]),Qt=(0,i.useCallback)(function(){if(ue){$e(!1);var n=oe.current,t=j.current;if(!(!n||!t)){var o=n.getContext("2d");if(o){o.clearRect(0,0,n.width,n.height);var r=Math.min(H.x,ae.x),u=Math.min(H.y,ae.y),v=Math.abs(ae.x-H.x),x=Math.abs(ae.y-H.y),L=document.createElement("canvas"),ne=f%180!==0;L.width=ne?t.height:t.width,L.height=ne?t.width:t.height;var z=L.getContext("2d");if(z){z.save(),z.translate(L.width/2,L.height/2),z.rotate(f*Math.PI/180),z.translate(-t.width/2,-t.height/2),z.drawImage(t,0,0),z.restore();var se=r/A,ce=u/A,Ee=v/A,Ce=x/A,Pe;try{Pe=z.getImageData(se,ce,Ee,Ce)}catch(me){console.error("Failed to get image data:",me);return}if(Pe){var ve=document.createElement("canvas");ve.width=Ee,ve.height=Ce;var lt=ve.getContext("2d");lt&&(lt.putImageData(Pe,0,0),ve.toBlob(function(me){if(me){var be=new FileReader;be.onloadend=function(){var dt=be.result,ye=document.createElement("img");ye.src=dt,ye.alt="Base64 Image",document.body.appendChild(ye),D&&D({imageData:dt,rectangle:{x:se,y:ce,width:Ee,height:Ce}}),Xe(!1)},be.readAsDataURL(me)}}))}}}}}},[ue,H,ae,A,f,D]);(0,i.useEffect)(function(){console.log("isOptionZPressed:",T);var n=oe.current;if(n){var t=n.getContext("2d");t&&(n.width=n.offsetWidth,n.height=n.offsetHeight,t.clearRect(0,0,n.width,n.height))}},[T]),(0,i.useEffect)(function(){var n=Ye.current,t=j.current;if(!(!n||!t||!k)){var o=n.getContext("2d");if(o){n.width=t.width,n.height=t.height,o.clearRect(0,0,n.width,n.height);var r=P()(k,4),u=r[0],v=r[1],x=r[2],L=r[3];o.strokeStyle="red",o.lineWidth=2,o.strokeRect(u,v,x,L),console.log("Rect drawn:",u,v,x,L)}}},[k,A,te]);var _e=function(t){jt(function(o){var r=typeof t=="function"?t(o):t,u=(r%360+360)%360,v=j.current,x=F.current;if(v&&x){var L=Ie(x.clientWidth,x.clientHeight,v.width,v.height,u),ne=L.scale,z=L.effectiveImageWidth,se=L.effectiveImageHeight,ce=de(x.clientWidth,x.clientHeight,v.width,v.height,ne,u);X(ne),$(ce),Je({width:z,height:se})}return u})};(0,i.useEffect)(function(){if(B){var n=B(S);n instanceof Promise&&n.catch(function(t){console.error("Error calling onImageChange:",t)})}},[S,B]);var at=f===0||f===180,ot=at?(c=j.current)===null||c===void 0?void 0:c.width:(_=j.current)===null||_===void 0?void 0:_.height,rt=at?(b=j.current)===null||b===void 0?void 0:b.height:(E=j.current)===null||E===void 0?void 0:E.width;return(0,l.jsxs)(xt,{children:[(0,l.jsxs)(gt,{ref:F,onMouseMove:Ft,onMouseUp:nt,onMouseLeave:nt,children:[(0,l.jsx)("div",{style:{position:"relative",transform:"translate(".concat(te.x,"px, ").concat(te.y,"px) scale(").concat(A,")"),transformOrigin:"0% 0% 0px",touchAction:"pan-y",width:"".concat(Z.width,"px"),height:"".concat(Z.height,"px")},children:(0,l.jsxs)(Mt,{isDragging:Ae,onMouseDown:$t,style:{transform:"translate(".concat(f===0||f===180?0:(Z.width-Z.height)/2,"px, ").concat(f===0||f===180?0:(Z.height-Z.width)/2,"px) rotate(").concat(f,"deg)"),touchAction:"pan-y",width:"".concat(f===0||f===180?Z.width:Z.height,"px"),height:"".concat(f===0||f===180?Z.height:Z.width,"px")},children:[(0,l.jsx)("canvas",{ref:j}),(0,l.jsx)(Rt,{ref:Ye,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"}})]})}),(0,l.jsx)(Ot,{ref:oe,isVisible:T,onMouseDown:Xt,onMouseMove:Yt,onMouseUp:Qt,style:{width:ot?"".concat(ot*A,"px"):"0px",height:rt?"".concat(rt*A,"px"):"0px",transform:"translate(".concat(te.x,"px, ").concat(te.y,"px)")}})]}),(0,l.jsx)(_t,{ref:et,children:C.map(function(n,t){return(0,l.jsx)(Et,{ref:function(r){return qe.current[t]=r},active:t===S,onClick:function(){return Gt(t)},children:(0,l.jsx)("img",{src:n.thumbnail,alt:""})},n.id)})}),(0,l.jsxs)(Ct,{children:[(0,l.jsx)(m.ZP,{icon:(0,l.jsx)(ut.Z,{}),disabled:S===0||T,onClick:Vt}),(0,l.jsx)(m.ZP,{icon:(0,l.jsx)(st.Z,{}),disabled:S===C.length-1||T,onClick:Nt}),(0,l.jsx)(m.ZP,{icon:(0,l.jsx)(ct.Z,{}),disabled:T,onClick:function(){return _e(function(t){return t-90})}}),(0,l.jsx)(m.ZP,{icon:(0,l.jsx)(vt.Z,{}),disabled:T,onClick:function(){return _e(function(t){return t+90})}}),(0,l.jsx)(m.ZP,{icon:(0,l.jsx)(mt.Z,{}),disabled:T,onClick:function(){var t=Math.max(A-.1,.1),o=F.current,r=j.current;if(o&&r){var u=de(o.clientWidth,o.clientHeight,r.width,r.height,t,f);X(t),$(u)}}}),(0,l.jsx)(m.ZP,{icon:(0,l.jsx)(ht.Z,{}),disabled:T,onClick:function(){var t=A+.1,o=F.current,r=j.current;if(o&&r){var u=de(o.clientWidth,o.clientHeight,r.width,r.height,t,f);X(t),$(u)}}}),(0,l.jsx)(m.ZP,{icon:(0,l.jsx)(pt.Z,{}),disabled:T,onClick:function(){var t=F.current,o=j.current;if(t&&o){var r={width:t.clientWidth,height:t.clientHeight,imageWidth:o.width,imageHeight:o.height,isHeight:!1},u=wt(r),v=u.newScale,x=M()(u,Pt);X(v),$(x)}}}),(0,l.jsx)(m.ZP,{icon:(0,l.jsx)(It.Z,{}),disabled:T,onClick:function(){var t=F.current,o=j.current;if(t&&o){var r={width:t.clientWidth,height:t.clientHeight,imageWidth:o.width,imageHeight:o.height,isHeight:!1},u=Le(r),v=u.newScale,x=M()(u,bt);X(v),$(x)}}}),(0,l.jsx)(m.ZP,{icon:(0,l.jsx)(ft.Z,{}),disabled:T,onClick:function(){var t=F.current,o=j.current;if(t&&o){var r={width:t.clientWidth,height:t.clientHeight,imageWidth:o.width,imageHeight:o.height,isHeight:!0},u=Le(r),v=u.newScale,x=M()(u,yt);X(v),$(x)}}}),q]})]})}var Ut=Dt},31364:function(y,a,e){e.r(a),e.d(a,{texts:function(){return s}});var p=e(89034);const s=[{value:"\u6269\u5C55\u7684\u6309\u94AE\u7EC4\u4EF6\uFF0C\u57FA\u4E8E antd Button \u7EC4\u4EF6\uFF0C\u589E\u52A0\u4E86\u81EA\u52A8\u52A0\u8F7D\u72B6\u6001\u529F\u80FD\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"autoLoading",paraId:1,tocIndex:2},{value:"\u70B9\u51FB\u540E\u662F\u5426\u81EA\u52A8\u8FDB\u5165\u52A0\u8F7D\u72B6\u6001",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"loadingDuration",paraId:1,tocIndex:2},{value:"\u52A0\u8F7D\u72B6\u6001\u6301\u7EED\u65F6\u95F4(ms)",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"1000",paraId:1,tocIndex:2},{value:"onClick",paraId:1,tocIndex:2},{value:"\u70B9\u51FB\u4E8B\u4EF6",paraId:1,tocIndex:2},{value:"(e: MouseEvent) => void | Promise<void>",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"\u9664\u4E86\u4E0A\u8FF0\u5C5E\u6027\u5916\uFF0C\u7EC4\u4EF6\u8FD8\u652F\u6301 antd Button \u7EC4\u4EF6\u7684\u6240\u6709\u5C5E\u6027\uFF08\u9664\u4E86 loading\uFF09\u3002",paraId:2,tocIndex:2}]},7384:function(y,a,e){e.r(a),e.d(a,{texts:function(){return s}});var p=e(79701);const s=[{value:"\u4F7F\u7528 Canvas \u5F00\u53D1\u7684\u81EA\u5B9A\u4E49\u9884\u89C8\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"images",paraId:1,tocIndex:2},{value:"\u56FE\u7247\u5217\u8868",paraId:1,tocIndex:2},{value:"ImageItem[]",paraId:1,tocIndex:2},{value:"[]",paraId:1,tocIndex:2},{value:"initialIndex",paraId:1,tocIndex:2},{value:"\u521D\u59CB\u663E\u793A\u7684\u56FE\u7247\u7D22\u5F15",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"0",paraId:1,tocIndex:2},{value:"onIndexChange",paraId:1,tocIndex:2},{value:"\u56FE\u7247\u5207\u6362\u65F6\u7684\u56DE\u8C03",paraId:1,tocIndex:2},{value:"(index: number) => void",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"onOcrRequest",paraId:1,tocIndex:2},{value:"OCR \u8BC6\u522B\u8BF7\u6C42\u56DE\u8C03",paraId:1,tocIndex:2},{value:"(request: OcrRequest) => void",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"rectPosition",paraId:1,tocIndex:2},{value:"\u77E9\u5F62\u6846\u4F4D\u7F6E",paraId:1,tocIndex:2},{value:"number[]",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"onImageChange",paraId:1,tocIndex:2},{value:"\u56FE\u7247\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:1,tocIndex:2},{value:"() => void",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"pagination",paraId:1,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u5206\u9875\u7EC4\u4EF6",paraId:1,tocIndex:2},{value:"ReactElement",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u5FC5\u586B",paraId:2,tocIndex:3},{value:"id",paraId:2,tocIndex:3},{value:"\u56FE\u7247\u552F\u4E00\u6807\u8BC6",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"url",paraId:2,tocIndex:3},{value:"\u56FE\u7247 URL",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"thumbnail",paraId:2,tocIndex:3},{value:"\u7F29\u7565\u56FE URL",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"\u5FC5\u586B",paraId:3,tocIndex:4},{value:"imageData",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u636E",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"\u662F",paraId:3,tocIndex:4},{value:"rectangle",paraId:3,tocIndex:4},{value:"\u8BC6\u522B\u533A\u57DF",paraId:3,tocIndex:4},{value:"Rectangle",paraId:3,tocIndex:4},{value:"\u662F",paraId:3,tocIndex:4},{value:"\u53C2\u6570",paraId:4,tocIndex:5},{value:"\u8BF4\u660E",paraId:4,tocIndex:5},{value:"\u7C7B\u578B",paraId:4,tocIndex:5},{value:"\u5FC5\u586B",paraId:4,tocIndex:5},{value:"x",paraId:4,tocIndex:5},{value:"\u77E9\u5F62\u5DE6\u4E0A\u89D2 x \u5750\u6807",paraId:4,tocIndex:5},{value:"number",paraId:4,tocIndex:5},{value:"\u662F",paraId:4,tocIndex:5},{value:"y",paraId:4,tocIndex:5},{value:"\u77E9\u5F62\u5DE6\u4E0A\u89D2 y \u5750\u6807",paraId:4,tocIndex:5},{value:"number",paraId:4,tocIndex:5},{value:"\u662F",paraId:4,tocIndex:5},{value:"width",paraId:4,tocIndex:5},{value:"\u77E9\u5F62\u5BBD\u5EA6",paraId:4,tocIndex:5},{value:"number",paraId:4,tocIndex:5},{value:"\u662F",paraId:4,tocIndex:5},{value:"height",paraId:4,tocIndex:5},{value:"\u77E9\u5F62\u9AD8\u5EA6",paraId:4,tocIndex:5},{value:"number",paraId:4,tocIndex:5},{value:"\u662F",paraId:4,tocIndex:5}]},60884:function(y,a,e){e.r(a),e.d(a,{texts:function(){return s}});var p=e(94183);const s=[{value:"\u6269\u5C55\u7684\u9009\u62E9\u5668\u7EC4\u4EF6\uFF0C\u57FA\u4E8E antd Select \u7EC4\u4EF6\uFF0C\u9ED8\u8BA4\u5F00\u542F\u641C\u7D22\u529F\u80FD\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"allowClear",paraId:1,tocIndex:2},{value:"\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"true",paraId:1,tocIndex:2},{value:"autoFocus",paraId:1,tocIndex:2},{value:"\u662F\u5426\u9ED8\u8BA4\u805A\u7126",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"\u9664\u4E86\u4E0A\u8FF0\u5C5E\u6027\u5916\uFF0C\u7EC4\u4EF6\u8FD8\u652F\u6301 antd Select \u7EC4\u4EF6\u7684\u6240\u6709\u5C5E\u6027\uFF08showSearch \u5DF2\u9ED8\u8BA4\u5F00\u542F\uFF09\u3002",paraId:2,tocIndex:2}]},74063:function(y,a,e){e.r(a),e.d(a,{texts:function(){return s}});var p=e(25534);const s=[]},49117:function(y,a,e){e.r(a),e.d(a,{texts:function(){return s}});var p=e(14581);const s=[{value:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u6570\u7EC4\uFF0C\u5176\u4E2D\u4E0D\u5305\u542B\u91CD\u590D\u7684\u5143\u7D20\u3002",paraId:0,tocIndex:1},{value:`import { unique, flatten, groupBy } from '@d-toolkit/utils';

unique([1, 1, 2, 2, 3]); // => [1, 2, 3]
unique(['a', 'b', 'a', 'c']); // => ['a', 'b', 'c']
`,paraId:1,tocIndex:2},{value:"\u6570\u7EC4\u6241\u5E73\u5316\uFF0C\u5C06\u591A\u7EF4\u6570\u7EC4\u8F6C\u6362\u4E3A\u4E00\u7EF4\u6570\u7EC4\u3002",paraId:2,tocIndex:3},{value:`import { unique, flatten, groupBy } from '@d-toolkit/utils';

flatten([1, [2, 3], [4, [5, 6]]]); // => [1, 2, 3, 4, 5, 6]
flatten(['a', ['b', 'c'], 'd']); // => ['a', 'b', 'c', 'd']
`,paraId:3,tocIndex:4},{value:"\u6309\u7167\u6307\u5B9A\u7684\u952E\u5BF9\u6570\u7EC4\u8FDB\u884C\u5206\u7EC4\u3002",paraId:4,tocIndex:5},{value:`import { unique, flatten, groupBy } from '@d-toolkit/utils';

const users = [
  { id: 1, role: 'admin' },
  { id: 2, role: 'user' },
  { id: 3, role: 'admin' },
];

groupBy(users, 'role');
// => {
//   admin: [{ id: 1, role: 'admin' }, { id: 3, role: 'admin' }],
//   user: [{ id: 2, role: 'user' }]
// } 
`,paraId:5,tocIndex:6}]},9059:function(y,a,e){e.r(a),e.d(a,{texts:function(){return s}});var p=e(30188);const s=[{value:"\u8FD9\u91CC\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u5B9E\u7528\u7684\u5DE5\u5177\u51FD\u6570\uFF0C\u5E2E\u52A9\u4F60\u66F4\u9AD8\u6548\u5730\u5F00\u53D1\u3002",paraId:0,tocIndex:0},{value:`npm install @d-toolkit/utils
`,paraId:1,tocIndex:1},{value:`import { capitalize, unique, deepClone } from '@d-toolkit/utils';
`,paraId:2,tocIndex:2},{value:"\u5B57\u7B26\u4E32\u5DE5\u5177",paraId:3,tocIndex:3},{value:" - \u63D0\u4F9B\u5B57\u7B26\u4E32\u5904\u7406\u76F8\u5173\u7684\u5DE5\u5177\u51FD\u6570",paraId:4,tocIndex:3},{value:"\u6570\u7EC4\u5DE5\u5177",paraId:5,tocIndex:3},{value:" - \u63D0\u4F9B\u6570\u7EC4\u64CD\u4F5C\u76F8\u5173\u7684\u5DE5\u5177\u51FD\u6570",paraId:4,tocIndex:3},{value:"\u5BF9\u8C61\u5DE5\u5177",paraId:6,tocIndex:3},{value:" - \u63D0\u4F9B\u5BF9\u8C61\u5904\u7406\u76F8\u5173\u7684\u5DE5\u5177\u51FD\u6570",paraId:4,tocIndex:3},{value:"URL \u5DE5\u5177",paraId:7,tocIndex:3},{value:" - \u63D0\u4F9B URL \u5904\u7406\u76F8\u5173\u7684\u5DE5\u5177\u51FD\u6570",paraId:4,tocIndex:3}]},3231:function(y,a,e){e.r(a),e.d(a,{texts:function(){return s}});var p=e(53575);const s=[{value:"\u6DF1\u62F7\u8D1D\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5168\u65B0\u7684\u5BF9\u8C61\uFF0C\u4E0E\u539F\u5BF9\u8C61\u6CA1\u6709\u5F15\u7528\u5173\u7CFB\u3002",paraId:0,tocIndex:1},{value:`import { deepClone, flattenObject } from '@d-toolkit/utils';

const obj = {
  a: 1,
  b: { c: 2 },
  d: [1, 2, { e: 3 }]
};

const cloned = deepClone(obj);
// cloned \u662F\u4E00\u4E2A\u5168\u65B0\u7684\u5BF9\u8C61\uFF0C\u4FEE\u6539 cloned \u4E0D\u4F1A\u5F71\u54CD\u539F\u5BF9\u8C61
`,paraId:1,tocIndex:2},{value:"\u5C06\u5D4C\u5957\u7684\u5BF9\u8C61\u6241\u5E73\u5316\uFF0C\u4F7F\u7528\u70B9\u53F7\u8FDE\u63A5\u952E\u540D\u3002",paraId:2,tocIndex:3},{value:`import { deepClone, flattenObject } from '@d-toolkit/utils';

const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

flattenObject(obj);
// => {
//   'a': 1,
//   'b.c': 2,
//   'b.d.e': 3
// } 
`,paraId:3,tocIndex:4}]},45720:function(y,a,e){e.r(a),e.d(a,{texts:function(){return s}});var p=e(28101);const s=[{value:"\u5C06\u5B57\u7B26\u4E32\u7684\u9996\u5B57\u6BCD\u8F6C\u6362\u4E3A\u5927\u5199\u3002",paraId:0,tocIndex:1},{value:`import { capitalize, camelToKebab, kebabToCamel } from '@d-toolkit/utils';

capitalize('hello'); // => 'Hello'
capitalize('world'); // => 'World'
`,paraId:1,tocIndex:2},{value:"\u5C06\u9A7C\u5CF0\u547D\u540D\u8F6C\u6362\u4E3A\u77ED\u6A2A\u7EBF\u547D\u540D\u3002",paraId:2,tocIndex:3},{value:`import { capitalize, camelToKebab, kebabToCamel } from '@d-toolkit/utils';

camelToKebab('helloWorld'); // => 'hello-world'
camelToKebab('backgroundColor'); // => 'background-color'
`,paraId:3,tocIndex:4},{value:"\u5C06\u77ED\u6A2A\u7EBF\u547D\u540D\u8F6C\u6362\u4E3A\u9A7C\u5CF0\u547D\u540D\u3002",paraId:4,tocIndex:5},{value:`import { capitalize, camelToKebab, kebabToCamel } from '@d-toolkit/utils';

kebabToCamel('hello-world'); // => 'helloWorld'
kebabToCamel('background-color'); // => 'backgroundColor'
`,paraId:5,tocIndex:6}]},78998:function(y,a,e){e.r(a),e.d(a,{texts:function(){return s}});var p=e(34051);const s=[{value:"\u63D0\u4F9B\u4E00\u7CFB\u5217\u5904\u7406 URL \u7684\u5B9E\u7528\u5DE5\u5177\u51FD\u6570\u3002",paraId:0,tocIndex:0},{value:"\u89E3\u6790 URL \u53C2\u6570\u4E3A\u5BF9\u8C61\u3002",paraId:1,tocIndex:1},{value:`import { parseUrlParams } from '@d-toolkit/utils';

const url = 'https://example.com?name=john&age=25';
parseUrlParams(url);
// => { name: 'john', age: '25' }
`,paraId:2,tocIndex:2},{value:"\u5C06\u5BF9\u8C61\u8F6C\u6362\u4E3A URL \u53C2\u6570\u5B57\u7B26\u4E32\u3002",paraId:3,tocIndex:3},{value:`import { stringifyUrlParams } from '@d-toolkit/utils';

const params = { name: 'john', age: 25 };
stringifyUrlParams(params);
// => 'name=john&age=25'
`,paraId:4,tocIndex:4},{value:"\u5411 URL \u6DFB\u52A0\u53C2\u6570\u3002",paraId:5,tocIndex:5},{value:`import { addUrlParams } from '@d-toolkit/utils';

const url = 'https://example.com';
const params = { name: 'john', age: 25 };
addUrlParams(url, params);
// => 'https://example.com?name=john&age=25'

// \u5DF2\u6709\u53C2\u6570\u7684 URL
const urlWithParams = 'https://example.com?type=user';
addUrlParams(urlWithParams, params);
// => 'https://example.com?type=user&name=john&age=25'
`,paraId:6,tocIndex:6},{value:"\u4ECE URL \u4E2D\u79FB\u9664\u6307\u5B9A\u53C2\u6570\u3002",paraId:7,tocIndex:7},{value:`import { removeUrlParams } from '@d-toolkit/utils';

const url = 'https://example.com?name=john&age=25&type=user';
removeUrlParams(url, ['age', 'type']);
// => 'https://example.com?name=john'
`,paraId:8,tocIndex:8},{value:"\u83B7\u53D6 URL \u7684\u57DF\u540D\u3002",paraId:9,tocIndex:9},{value:`import { getDomain } from '@d-toolkit/utils';

getDomain('https://www.example.com/path');
// => 'www.example.com'
`,paraId:10,tocIndex:10},{value:"\u5224\u65AD\u662F\u5426\u662F\u7EDD\u5BF9 URL\u3002",paraId:11,tocIndex:11},{value:`import { isAbsoluteUrl } from '@d-toolkit/utils';

isAbsoluteUrl('https://example.com'); // => true
isAbsoluteUrl('/path/to/page'); // => false
`,paraId:12,tocIndex:12},{value:"\u5B89\u5168\u5730\u7F16\u7801 URL \u7EC4\u4EF6\uFF0C\u5305\u62EC\u7279\u6B8A\u5B57\u7B26\u3002",paraId:13,tocIndex:13},{value:`import { encodeUrlComponent } from '@d-toolkit/utils';

encodeUrlComponent('hello world!'); // => 'hello%20world%21'
encodeUrlComponent('(test)'); // => '%28test%29'
`,paraId:14,tocIndex:14},{value:"\u5B89\u5168\u5730\u89E3\u7801 URL \u7EC4\u4EF6\uFF0C\u5904\u7406\u5F02\u5E38\u60C5\u51B5\u3002",paraId:15,tocIndex:15},{value:`import { decodeUrlComponent } from '@d-toolkit/utils';

decodeUrlComponent('hello%20world%21'); // => 'hello world!'
decodeUrlComponent('invalid%'); // => 'invalid%' (\u8FD4\u56DE\u539F\u5B57\u7B26\u4E32)
`,paraId:16,tocIndex:16},{value:"\u62FC\u63A5 URL \u8DEF\u5F84\uFF0C\u81EA\u52A8\u5904\u7406\u659C\u6760\u3002",paraId:17,tocIndex:17},{value:`import { joinPaths } from '@d-toolkit/utils';

joinPaths('api', '/users/', '/posts/'); // => 'api/users/posts'
joinPaths('https://example.com', 'api', 'users');
// => 'https://example.com/api/users'
`,paraId:18,tocIndex:18},{value:"\u83B7\u53D6 URL \u7684\u6587\u4EF6\u6269\u5C55\u540D\u3002",paraId:19,tocIndex:19},{value:`import { getUrlExtension } from '@d-toolkit/utils';

getUrlExtension('https://example.com/image.jpg'); // => 'jpg'
getUrlExtension('https://example.com/path/'); // => ''
`,paraId:20,tocIndex:20},{value:"\u9A8C\u8BC1 URL \u683C\u5F0F\u662F\u5426\u6709\u6548\uFF0C\u652F\u6301\u534F\u8BAE\u9A8C\u8BC1\u3002",paraId:21,tocIndex:21},{value:`import { isValidUrl } from '@d-toolkit/utils';

isValidUrl('https://example.com'); // => true
isValidUrl('not-a-url'); // => false

// \u9A8C\u8BC1\u7279\u5B9A\u534F\u8BAE
isValidUrl('ftp://example.com', { 
  protocols: ['https', 'http'] 
}); // => false

// \u8981\u6C42\u5FC5\u987B\u6709\u534F\u8BAE
isValidUrl('example.com', { 
  requireProtocol: true 
}); // => false
`,paraId:22,tocIndex:22},{value:"\u89C4\u8303\u5316 URL\uFF0C\u63D0\u4F9B\u591A\u4E2A\u9009\u9879\u6765\u63A7\u5236\u8F93\u51FA\u683C\u5F0F\u3002",paraId:23,tocIndex:23},{value:`import { normalizeUrl } from '@d-toolkit/utils';

// \u79FB\u9664\u672B\u5C3E\u659C\u6760
normalizeUrl('https://example.com/', { 
  removeTrailingSlash: true 
}); // => 'https://example.com'

// \u5F3A\u5236\u4F7F\u7528 HTTPS
normalizeUrl('http://example.com', { 
  forceHttps: true 
}); // => 'https://example.com'

// \u79FB\u9664\u67E5\u8BE2\u53C2\u6570\u548C\u54C8\u5E0C
normalizeUrl('https://example.com/?q=test#hash', {
  removeQueryParams: true,
  removeHash: true
}); // => 'https://example.com'
`,paraId:24,tocIndex:24}]}}]);
