import{P as O,j as m}from"./index-7b6980cd.js";import{r as V}from"./react-25ab5c11.js";import{S as z,a as W}from"./swiper-525885bd.js";import{a as te,n as G,b as _,e as se,c as L,d as re}from"./swiper-24b2bd94.js";import{u as ie}from"./index-2b8e7141.js";import{T as ne}from"./TitleSection-4a00ec44.js";import"./recoil-219bc644.js";import"./reactRouter-bcec4121.js";import"./fbAuth-9e87268e.js";import"./fbApp-26a327c1.js";import"./fbStore-ed2d4d67.js";import"./fbStorage-a10cdba0.js";function k(y){let{swiper:e,extendParams:r,on:l,emit:T}=y;const b=te();r({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let f,x=_(),p;const t=[];function n(s){let M=0,v=0,c=0,g=0;return"detail"in s&&(v=s.detail),"wheelDelta"in s&&(v=-s.wheelDelta/120),"wheelDeltaY"in s&&(v=-s.wheelDeltaY/120),"wheelDeltaX"in s&&(M=-s.wheelDeltaX/120),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(M=v,v=0),c=M*10,g=v*10,"deltaY"in s&&(g=s.deltaY),"deltaX"in s&&(c=s.deltaX),s.shiftKey&&!c&&(c=g,g=0),(c||g)&&s.deltaMode&&(s.deltaMode===1?(c*=40,g*=40):(c*=800,g*=800)),c&&!M&&(M=c<1?-1:1),g&&!v&&(v=g<1?-1:1),{spinX:M,spinY:v,pixelX:c,pixelY:g}}function i(){e.enabled&&(e.mouseEntered=!0)}function a(){e.enabled&&(e.mouseEntered=!1)}function u(s){return e.params.mousewheel.thresholdDelta&&s.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&_()-x<e.params.mousewheel.thresholdTime?!1:s.delta>=6&&_()-x<60?!0:(s.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),T("scroll",s.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),T("scroll",s.raw)),x=new b.Date().getTime(),!1)}function A(s){const w=e.params.mousewheel;if(s.direction<0){if(e.isEnd&&!e.params.loop&&w.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&w.releaseOnEdges)return!0;return!1}function d(s){let w=s,$=!0;if(!e.enabled||s.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const S=e.params.mousewheel;e.params.cssMode&&w.preventDefault();let M=e.el;e.params.mousewheel.eventsTarget!=="container"&&(M=document.querySelector(e.params.mousewheel.eventsTarget));const v=M&&M.contains(w.target);if(!e.mouseEntered&&!v&&!S.releaseOnEdges)return!0;w.originalEvent&&(w=w.originalEvent);let c=0;const g=e.rtlTranslate?-1:1,P=n(w);if(S.forceToAxis)if(e.isHorizontal())if(Math.abs(P.pixelX)>Math.abs(P.pixelY))c=-P.pixelX*g;else return!0;else if(Math.abs(P.pixelY)>Math.abs(P.pixelX))c=-P.pixelY;else return!0;else c=Math.abs(P.pixelX)>Math.abs(P.pixelY)?-P.pixelX*g:-P.pixelY;if(c===0)return!0;S.invert&&(c=-c);let H=e.getTranslate()+c*S.sensitivity;if(H>=e.minTranslate()&&(H=e.minTranslate()),H<=e.maxTranslate()&&(H=e.maxTranslate()),$=e.params.loop?!0:!(H===e.minTranslate()||H===e.maxTranslate()),$&&e.params.nested&&w.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const h={time:_(),delta:Math.abs(c),direction:Math.sign(c),raw:s};t.length>=2&&t.shift();const N=t.length?t[t.length-1]:void 0;if(t.push(h),N?(h.direction!==N.direction||h.delta>N.delta||h.time>N.time+150)&&u(h):u(h),A(h))return!0}else{const h={time:_(),delta:Math.abs(c),direction:Math.sign(c)},N=p&&h.time<p.time+500&&h.delta<=p.delta&&h.direction===p.direction;if(!N){p=void 0;let D=e.getTranslate()+c*S.sensitivity;const C=e.isBeginning,X=e.isEnd;if(D>=e.minTranslate()&&(D=e.minTranslate()),D<=e.maxTranslate()&&(D=e.maxTranslate()),e.setTransition(0),e.setTranslate(D),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!C&&e.isBeginning||!X&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:h.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(f),f=void 0,t.length>=15&&t.shift();const q=t.length?t[t.length-1]:void 0,R=t[0];if(t.push(h),q&&(h.delta>q.delta||h.direction!==q.direction))t.splice(0);else if(t.length>=15&&h.time-R.time<500&&R.delta-h.delta>=1&&h.delta<=6){const B=c>0?.8:.2;p=h,t.splice(0),f=G(()=>{e.slideToClosest(e.params.speed,!0,void 0,B)},0)}f||(f=G(()=>{p=h,t.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5)},500))}if(N||T("scroll",w),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),S.releaseOnEdges&&(D===e.minTranslate()||D===e.maxTranslate()))return!0}}return w.preventDefault?w.preventDefault():w.returnValue=!1,!1}function o(s){let w=e.el;e.params.mousewheel.eventsTarget!=="container"&&(w=document.querySelector(e.params.mousewheel.eventsTarget)),w[s]("mouseenter",i),w[s]("mouseleave",a),w[s]("wheel",d)}function I(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",d),!0):e.mousewheel.enabled?!1:(o("addEventListener"),e.mousewheel.enabled=!0,!0)}function E(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,d),!0):e.mousewheel.enabled?(o("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}l("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&E(),e.params.mousewheel.enabled&&I()}),l("destroy",()=>{e.params.cssMode&&I(),e.mousewheel.enabled&&E()}),Object.assign(e.mousewheel,{enable:I,disable:E})}function F(y){let{swiper:e,extendParams:r,on:l}=y;r({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0};function T(t,n){const i=function(){let d,o,I;return(E,s)=>{for(o=-1,d=E.length;d-o>1;)I=d+o>>1,E[I]<=s?o=I:d=I;return d}}();this.x=t,this.y=n,this.lastIndex=t.length-1;let a,u;return this.interpolate=function(d){return d?(u=i(this.x,d),a=u-1,(d-this.x[a])*(this.y[u]-this.y[a])/(this.x[u]-this.x[a])+this.y[a]):0},this}function b(t){e.controller.spline=e.params.loop?new T(e.slidesGrid,t.slidesGrid):new T(e.snapGrid,t.snapGrid)}function f(t,n){const i=e.controller.control;let a,u;const A=e.constructor;function d(o){if(o.destroyed)return;const I=e.rtlTranslate?-e.translate:e.translate;e.params.controller.by==="slide"&&(b(o),u=-e.controller.spline.interpolate(-I)),(!u||e.params.controller.by==="container")&&(a=(o.maxTranslate()-o.minTranslate())/(e.maxTranslate()-e.minTranslate()),(Number.isNaN(a)||!Number.isFinite(a))&&(a=1),u=(I-e.minTranslate())*a+o.minTranslate()),e.params.controller.inverse&&(u=o.maxTranslate()-u),o.updateProgress(u),o.setTranslate(u,e),o.updateActiveIndex(),o.updateSlidesClasses()}if(Array.isArray(i))for(let o=0;o<i.length;o+=1)i[o]!==n&&i[o]instanceof A&&d(i[o]);else i instanceof A&&n!==i&&d(i)}function x(t,n){const i=e.constructor,a=e.controller.control;let u;function A(d){d.destroyed||(d.setTransition(t,e),t!==0&&(d.transitionStart(),d.params.autoHeight&&G(()=>{d.updateAutoHeight()}),se(d.wrapperEl,()=>{a&&d.transitionEnd()})))}if(Array.isArray(a))for(u=0;u<a.length;u+=1)a[u]!==n&&a[u]instanceof i&&A(a[u]);else a instanceof i&&n!==a&&A(a)}function p(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}l("beforeInit",()=>{if(typeof window<"u"&&(typeof e.params.controller.control=="string"||e.params.controller.control instanceof HTMLElement)){const t=document.querySelector(e.params.controller.control);if(t&&t.swiper)e.controller.control=t.swiper;else if(t){const n=i=>{e.controller.control=i.detail[0],e.update(),t.removeEventListener("init",n)};t.addEventListener("init",n)}return}e.controller.control=e.params.controller.control}),l("update",()=>{p()}),l("resize",()=>{p()}),l("observerUpdate",()=>{p()}),l("setTranslate",(t,n,i)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTranslate(n,i)}),l("setTransition",(t,n,i)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTransition(n,i)}),Object.assign(e.controller,{setTranslate:f,setTransition:x})}function ae(y){const{effect:e,swiper:r,on:l,setTranslate:T,setTransition:b,overwriteParams:f,perspective:x,recreateShadows:p,getEffectParams:t}=y;l("beforeInit",()=>{if(r.params.effect!==e)return;r.classNames.push(`${r.params.containerModifierClass}${e}`),x&&x()&&r.classNames.push(`${r.params.containerModifierClass}3d`);const i=f?f():{};Object.assign(r.params,i),Object.assign(r.originalParams,i)}),l("setTranslate",()=>{r.params.effect===e&&T()}),l("setTransition",(i,a)=>{r.params.effect===e&&b(a)}),l("transitionEnd",()=>{if(r.params.effect===e&&p){if(!t||!t().slideShadows)return;r.slides.forEach(i=>{i.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(a=>a.remove())}),p()}});let n;l("virtualUpdate",()=>{r.params.effect===e&&(r.slides.length||(n=!0),requestAnimationFrame(()=>{n&&r.slides&&r.slides.length&&(T(),n=!1)}))})}function oe(y,e){const r=L(e);return r!==e&&(r.style.backfaceVisibility="hidden",r.style["-webkit-backface-visibility"]="hidden"),r}function U(y,e,r){const l=`swiper-slide-shadow${r?`-${r}`:""}${y?` swiper-slide-shadow-${y}`:""}`,T=L(e);let b=T.querySelector(`.${l.split(" ").join(".")}`);return b||(b=re("div",l.split(" ")),T.append(b)),b}function Z(y){let{swiper:e,extendParams:r,on:l}=y;r({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),ae({effect:"coverflow",swiper:e,on:l,setTranslate:()=>{const{width:f,height:x,slides:p,slidesSizesGrid:t}=e,n=e.params.coverflowEffect,i=e.isHorizontal(),a=e.translate,u=i?-a+f/2:-a+x/2,A=i?n.rotate:-n.rotate,d=n.depth;for(let o=0,I=p.length;o<I;o+=1){const E=p[o],s=t[o],w=E.swiperSlideOffset,$=(u-w-s/2)/s,S=typeof n.modifier=="function"?n.modifier($):$*n.modifier;let M=i?A*S:0,v=i?0:A*S,c=-d*Math.abs(S),g=n.stretch;typeof g=="string"&&g.indexOf("%")!==-1&&(g=parseFloat(n.stretch)/100*s);let P=i?0:g*S,H=i?g*S:0,h=1-(1-n.scale)*Math.abs(S);Math.abs(H)<.001&&(H=0),Math.abs(P)<.001&&(P=0),Math.abs(c)<.001&&(c=0),Math.abs(M)<.001&&(M=0),Math.abs(v)<.001&&(v=0),Math.abs(h)<.001&&(h=0),e.browser&&e.browser.isSafari&&(Math.abs(M)/90%2===1&&(M+=.001),Math.abs(v)/90%2===1&&(v+=.001));const N=`translate3d(${H}px,${P}px,${c}px)  rotateX(${v}deg) rotateY(${M}deg) scale(${h})`,D=oe(n,E);if(D.style.transform=N,E.style.zIndex=-Math.abs(Math.round(S))+1,n.slideShadows){let C=i?E.querySelector(".swiper-slide-shadow-left"):E.querySelector(".swiper-slide-shadow-top"),X=i?E.querySelector(".swiper-slide-shadow-right"):E.querySelector(".swiper-slide-shadow-bottom");C||(C=U("coverflow",E,i?"left":"top")),X||(X=U("coverflow",E,i?"right":"bottom")),C&&(C.style.opacity=S>0?S:0),X&&(X.style.opacity=-S>0?-S:0)}}},setTransition:f=>{e.slides.map(p=>L(p)).forEach(p=>{p.style.transitionDuration=`${f}ms`,p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(t=>{t.style.transitionDuration=`${f}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const le="rPRC",ce="_79C8",de="xft2",fe="T5NE",pe="_3mHL",ue="S884",he="cP8U",me="l3-Q",we="kI9r",ye="ZJGn",Se="oam7",ge="R5-5",Te="UNQH",be="rJWM",j={sectionWrapper:le,section:ce,hidden:de,swiperWrapper:fe,yearSwiper:pe,yearSwiperSlide:ue,yearSlide:he,isActive:me,isInActive:we,historySwiper:ye,historySwiperSlide:Se,historySlide:ge,historySlideTitle:Te,historySlideDescription:be},xe="/ReOpenSG/assets/history_circle-cbc87662.svg",ve="/ReOpenSG/assets/history_circleline-e965a301.svg";function Q({isActive:y,year:e}){return m.jsxs("div",{className:`${j.yearSlide} ${y?j.isActive:j.isInActive}`,children:[m.jsx("span",{children:e}),m.jsx("img",{src:`${y?xe:ve}`,alt:"","aria-hidden":!0})]})}Q.propTypes={isActive:O.bool.isRequired,year:O.string.isRequired};function Y({isActive:y,year:e,history:r}){const{ref:l,inView:T}=ie({threshold:.8});return m.jsxs("div",{ref:l,className:`${j.historySlide} ${y||T?j.isActive:j.isInActive}`,children:[m.jsx("span",{className:j.historySlideTitle,children:e}),m.jsx("ul",{className:j.historySlideDescription,children:r.map(b=>m.jsx("li",{children:b},b))})]})}Y.propTypes={isActive:O.bool.isRequired,year:O.string.isRequired,history:O.arrayOf(O.string).isRequired};function K({historyData:y}){const[e,r]=V.useState(null),[l,T]=V.useState(null),b=Object.entries(y).toSorted((f,x)=>x[0]-f[0]);return m.jsx("section",{className:j.section,children:m.jsxs("div",{className:j.swiperWrapper,children:[m.jsx(z,{mousewheel:!0,centeredSlides:!0,modules:[F,Z,k],effect:"coverflow",breakpoints:{375:{slidesPerView:5,spaceBetween:10},1024:{slidesPerView:7,spaceBetween:20},1440:{slidesPerView:7,spaceBetween:30}},coverflowEffect:{rotate:0,stretch:0,depth:0,slideShadows:!0},onSwiper:r,controller:{by:"container",control:l},className:j.yearSwiper,children:b.map(([f])=>m.jsx(W,{className:j.yearSwiperSlide,children:({isActive:x})=>m.jsx(Q,{isActive:x,year:f},f)},f))}),m.jsx(z,{mousewheel:!0,centeredSlides:!0,modules:[F,Z,k],effect:"coverflow",breakpoints:{375:{slidesPerView:1,spaceBetween:10},1024:{slidesPerView:3,spaceBetween:20},1440:{slidesPerView:3,spaceBetween:30}},coverflowEffect:{rotate:20,scale:.7},onSwiper:T,controller:{by:"container",control:e},className:j.historySwiper,children:b.map(([f,x])=>m.jsx(W,{className:j.historySwiperSlide,children:({isActive:p})=>m.jsx(Y,{isActive:p,year:f,history:x})},f))})]})})}K.propTypes={historyData:O.object.isRequired};function ee({historyData:y}){const e=Object.entries(y).toSorted((r,l)=>l[0]-r[0]);return m.jsx("div",{className:"hidden mobile:block w-full h-full -text--openfoundation-secondary -bg--openfoundation-primary px-open-margin-mobile py-open-5xl",children:m.jsx("div",{className:"flex flex-col justify-center items-center gap-open-xl",children:e.map(([r,l])=>m.jsx(Y,{isActive:!1,year:r,history:l},r))})})}ee.propTypes={historyData:O.object.isRequired};const J={2007:["한국 소프트웨어산업협회 소프트웨어사업자 등록","Microsoft Gold Partner사 등록","‘주식회사 오픈에스지닷넷’ 설립"],2009:["기술보증기금 벤처기업 등록"],2010:["충남 아산시 본사 이전"],2017:["‘주식회사 오픈에스지’ 회사명 변경","R&D 센터 수립_서울 서초"],2020:["경기도 동탄으로 본사 이전 및 천안 자동화 연구소 신설"],2021:["Microsoft 공인파트너 MRPP 및 HoloLens2 판권 획득"],2022:["경영혁신형 중소기업 Main-biz 인증 획득","경광등 작동신호 무선 송출기 발명 특허 등록"],2023:["ISO 9001, 14001 획득","기술혁신형 중소기업 Inno-biz 인증 획득","벤처 기업 등록"]};function Xe(){return m.jsxs("div",{className:"w-full",children:[m.jsx(ne,{category:"연혁",title:"OpenSG가 걸어온 길",background:"bg-[url('@/assets/aboutUs_background.png')]",textAlign:"text-center"}),m.jsxs("div",{children:[m.jsx(K,{historyData:J}),m.jsx(ee,{historyData:J})]})]})}export{Xe as default};
