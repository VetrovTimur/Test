!function(){"use strict";const e=document.querySelector(".burger"),t=document.querySelector(".navbar__content");e.addEventListener("click",(()=>{e.classList.toggle("active"),t.classList.toggle("active")})),window.innerWidth<1024&&document.querySelector(".navbar__content").classList.add("mobile"),window.onresize=function(){if(window.innerWidth>=1024){document.querySelector(".navbar__content").classList.remove("mobile");let e=window.pageYOffset||document.documentElement.scrollTop;window.addEventListener("scroll",(function(){const t=window.pageYOffset||document.documentElement.scrollTop;t>e?document.querySelector(".navbar").classList.add("scrollDown"):t<e&&document.querySelector(".navbar").classList.remove("scrollDown"),e=t<=0?0:t}),!1)}else document.querySelector(".navbar__content").classList.add("mobile")};const o=document.querySelector(".gallery__list");let n,c,s=!1;o.addEventListener("mousedown",(e=>{s=!0,o.classList.add("active"),n=e.pageX-o.offsetLeft,c=o.scrollLeft})),o.addEventListener("mouseleave",(e=>{s=!1,o.classList.remove("active")})),o.addEventListener("mouseup",(e=>{s=!1,o.classList.remove("active")})),o.addEventListener("mousemove",(e=>{if(!s)return;e.preventDefault();const t=3*(e.pageX-o.offsetLeft-n);o.scrollLeft=c-t}));const l=document.querySelectorAll(".slider__img"),r=document.querySelector(".slider__line"),i=document.querySelectorAll(".slider__dot"),d=document.querySelector(".slider__btn-next"),a=document.querySelector(".slider__btn-prev");let u,m=0,v=0;function L(){u=document.querySelector(".slider").offsetWidth,r.style.width=u*l.length+"px",l.forEach((e=>e.style.width=u+"px")),y()}function f(){m++,v++,console.log(v),m>l.length-1?m=l.length:(y(),g(m),console.log(`счетчик некст - ${m}`))}function _(){m--,m<0?m=0:(y(),g(m),console.log(`счетчик назад - ${m}`))}function y(){r.style.transform=`translateX(${-m*u}px)`}function g(e){i.forEach((e=>e.classList.remove("active-dot"))),i[e].classList.add("active-dot"),0===e&&3===e||(document.querySelector(".slider__btn-next").classList.remove("opacity"),document.querySelector(".slider__btn-prev").classList.remove("opacity")),0===e&&document.querySelector(".slider__btn-prev").classList.add("opacity"),3===e&&document.querySelector(".slider__btn-next").classList.add("opacity")}window.addEventListener("resize",L),d.addEventListener("click",f),a.addEventListener("click",_),L(),i.forEach(((e,t)=>{e.addEventListener("click",(()=>{m=t,y(),g(m)}))}));let w=0;setInterval((()=>{w++,w<=l.length-1?f():(_(),0===m&&(w=0)),console.log(`счетчик авто - ${w}`)}),3e3)}();