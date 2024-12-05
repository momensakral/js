(()=>{var e,t,n,a,o,s,l,i,r=document.getElementById("satuMomen"),c=document.documentElement.lang,d=document.getElementById("loader");d&&(window.onload=d.style.display="none");var u=r.dataset.guest,m=document.getElementById("guestNameSlot");u&&m&&(m.innerHTML=u);var y=r.dataset.group,f=document.getElementById("groupNameSlot");y&&f&&(f.innerHTML=y);var p=document.getElementById("btnMusic"),v=document.getElementById("music")?document.getElementById("music"):null,g=document.querySelector(".sc-music > iframe"),h=g?SC.Widget(g):null,b=!1;playMusic=function(e){v&&(e?(v.play(),b=!0):(b?v.pause():v.play(),b=!b)),h&&SC.Widget.Events.READY&&(b?(h.pause(),b=!1):(h.play(),b=!0)),p&&(b?p.classList.add("playing"):p.classList.remove("playing"))},v&&(v.onplaying=function(){b=!0,p.classList.add("playing")},v.onpause=function(){b=!1,p.classList.remove("playing")}),showGift=function(e){for(var t=0;t<$.length;t++)t!=e&&(L[t].style.display="none");L[e].style.display="inherit",eu()};for(var L=document.getElementsByClassName("gift-container"),E=0;E<L.length;E++)L[E].style.display="none";for(var $=document.getElementsByClassName("btn-gift"),_=function(e){$[e].onclick=function(){showGift(e)}},x=0;x<$.length;x++)_(x);var w=document.getElementById("lightboxWrapper"),T=document.getElementById("lightboxCloseBtn"),B=document.getElementById("lightboxNextBtn"),M=document.getElementById("lightboxPrevBtn"),H=document.querySelector("#lightboxWrapper > .lightbox-list"),I=document.getElementsByClassName("lightbox");showLightbox=function(e){w.classList.add("show"),H.innerHTML='<div class="lightbox-inner"><img src="'.concat(I[e].src,'"></div>'),B.dataset.index=e,M.dataset.index=e,eu(),window.removeEventListener(ea[P].down,ei,!1)},B.onclick=function(){var e=parseInt(B.dataset.index)+1;e>=I.length&&(e=0),showLightbox(e)},M.onclick=function(){var e=parseInt(M.dataset.index)-1;-1==e&&(e=I.length-1),showLightbox(e)},closeLightbox=function(){w.classList.remove("show"),H.innerHTML="",window.addEventListener(ea[P].down,ei,!1)};for(var q=function(e){I[e].onclick=function(){showLightbox(e)}},k=0;k<I.length;k++)q(k);T.onclick=function(){closeLightbox()};var S=document.getElementsByTagName("BODY")[0],C=document.getElementById("modalOverlay");showModal=function(e){S.classList.add("modal-open"),C.classList.add("show"),C.style="display: block;",e.classList.add("show"),e.style="display: block;",eu(),window.removeEventListener(ea[P].down,ei,!1)},closeModal=function(e){S.classList.remove("modal-open"),C.classList.remove("show"),C.style="display: none;",e.classList.remove("show"),e.style="display: none;",window.addEventListener(ea[P].down,ei,!1)};var N=document.getElementsByClassName("countdown-wrapper");displayCountdown=function(e){var t=new Date(e.dataset.datetime).getTime(),n=e.querySelector(".countdown > .day > .number"),a=e.querySelector(".countdown > .hour > .number"),o=e.querySelector(".countdown > .minute > .number"),s=e.querySelector(".countdown > .second > .number"),l=setInterval(function(){var e=(new Date).getTime(),i=t-e;n.innerHTML=Math.floor(i/864e5),a.innerHTML=Math.floor(i%864e5/36e5),o.innerHTML=Math.floor(i%36e5/6e4),s.innerHTML=Math.floor(i%6e4/1e3),i<0&&(clearInterval(l),n.innerHTML="00",a.innerHTML="00",o.innerHTML="00",s.innerHTML="00")},1e3)};for(var A=0;A<N.length;A++)displayCountdown(N[A]);for(var W=document.getElementsByClassName("btn-rsvp"),D=null!==(e=document.querySelector(".rsvp-placeholder"))&&void 0!==e?e:null,O=null!==(t=document.querySelector(".rsvp-form"))&&void 0!==t?t:null,F=0;F<W.length;F++)D?W[F].style.display="none":W[F].onclick=function(){showModal(rsvpModal)};for(var Y=document.getElementsByClassName("account-number"),R=0;R<Y.length;R++)Y[R].style.display="inline",Y[R].innerHTML&&("id"==c?Y[R].insertAdjacentHTML("afterend","<button type='button' class='btn btn-sm btn-primary ml-2 mb-1 animate__animated animate__zoomIn animate__slow delay-5' data-text='".concat(Y[R].innerText,"' onclick='copyText(event)' style='font-family: sans-serif; border-radius: 4px; line-height: 1'>Salin</button>")):Y[R].insertAdjacentHTML("afterend","<button type='button' class='btn btn-sm btn-primary ml-2 mb-1 animate__animated animate__zoomIn animate__slow delay-5' data-text='".concat(Y[R].innerText,"' onclick='copyText(event)' style='font-family: sans-serif; border-radius: 4px; line-height: 1'>Copy</button>")));for(var j=document.getElementsByClassName("copy-address"),z=0;z<j.length;z++)j[z].innerHTML&&("id"==c?j[z].insertAdjacentHTML("afterend","<button type='button' class='btn btn-sm btn-primary mt-2 animate__animated animate__fadeInUp animate__slow delay-5' data-text='".concat(j[z].innerText,"' onclick='copyText(event)' style='font-family: sans-serif; border-radius: 4px;'>Salin Alamat</button>")):j[z].insertAdjacentHTML("afterend","<button type='button' class='btn btn-sm btn-primary mt-2 animate__animated animate__fadeInUp animate__slow delay-5' data-text='".concat(j[z].innerText,"' onclick='copyText(event)' style='font-family: sans-serif; border-radius: 4px;'>Copy to Clipboard</button>")));copyText=function(e){var t=document.createElement("input");t.autofocus=!1,t.value=e.target.dataset.text,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove();var n=e.target.innerHTML;e.target.innerHTML="id"==c?"Disalin":"Copied",setTimeout(function(){e.target.innerHTML=n},2e3)};var U=function(){document.getElementById("workspace-container");var e=document.querySelector(".canvas"),t=document.getElementById("panZoom"),n=Number(window.screen.width>430?414:window.screen.width),a=Number(window.innerHeight>932?736:window.innerHeight)/n*9,o=Number(window.innerHeight)/736,s=Number(window.screen.width)/414,l=46*(a<16||window.screen.width>430?16:a);e.style.height="".concat(l,"px"),r.style.height="".concat(l,"px"),t.style.transform="scale(".concat(o<s?o:s,") translate(0px,0px)")};U(),window.addEventListener("resize",U,!1);var P="",X=function(){try{return document.createEvent("TouchEvent"),P="touch",!0}catch(e){return P="mouse",!1}};X();var Z=document.querySelectorAll(".satumomen_slide"),G=document.querySelectorAll(".satumomen_menu_item"),J=document.getElementById("smMenu"),K=document.querySelector(".satumomen_menu_list"),Q=G.length<5?J.offsetWidth/G.length:J.offsetWidth/5,V=0,ee=function(){Array.from(Z).forEach(function(e){e.style.display="none"}),Array.from(G).forEach(function(e){e.style.maxWidth="".concat(Q,"px"),e.classList.remove("active"),e.onclick=function(t){t.cancelable&&t.preventDefault(),V=Array.from(G).indexOf(e),en(V)}}),Z[V].style.display="",G[V].classList.add("active")};ee();var et=function(){ee(),en(V=V<Z.length-1?V+1:0,!1),el()},en=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];ee(),t&&eu();var n=K.offsetWidth-K.scrollWidth;Z[e].style.display="",G[e].classList.add("active");var a=J.offsetWidth/2-Q/2-G[e].offsetLeft;K.style.transform="translateX(".concat(a>0?0:a<n?n:a,"px)"),V=e},ea={mouse:{down:"mousedown",move:"mousemove",up:"mouseup"},touch:{down:"touchstart",move:"touchmove",up:"touchend"}},eo=0,es=function(e){var t=X()?e.touches[0].clientY:e.clientY;eo-50>t&&(eu(),et()),eo<t-50&&(ee(),en(V=V>0?V-1:V),el(),eu())},el=function(e){window.removeEventListener(ea[P].move,es,!1)},ei=function(e){e.cancelable&&e.preventDefault(),eo=X()?e.touches[0].clientY:e.clientY,window.addEventListener(ea[P].up,el,!1),window.addEventListener(ea[P].move,es,!1)},er=document.getElementById("btnAutoplay"),ec=!1,ed=function(){ec||(ec=!0,autoPlay=setInterval(function(){et()},15e3),er.classList.add("playing"))},eu=function(){ec&&(ec=!1,clearInterval(autoPlay),er.classList.remove("playing"))};er.addEventListener("click",function(e){e.cancelable&&e.preventDefault(),ec?eu():ec||em?ed():ey()},!1),openFullScreen=function(){document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.webkitRequestFullscreen?document.documentElement.webkitRequestFullscreen():document.documentElement.msRequestFullscreen&&document.documentElement.msRequestFullscreen()};for(var em=!1,ey=function(e){em=!0;for(var t=0;t<ef.length;t++)ef[t].classList.add("d-none");playMusic(!0),ed(),-1!=navigator.userAgent.indexOf("UCBrowser")||-1!=navigator.userAgent.indexOf("MiuiBrowser")||navigator.userAgent.includes("OppoBrowser")||navigator.userAgent.includes("HeyTapBrowser")?console.log("Browser not support portrait full screen mode"):openFullScreen(),document.querySelector(".not-open").classList.remove("not-open"),window.addEventListener(ea[P].down,ei,!1),et()},ef=document.getElementsByClassName("btn-open-invitation"),ep=0;ep<ef.length;ep++)ef[ep].addEventListener("click",ey,!1)})(),document.addEventListener("DOMContentLoaded",function(){var e=new URLSearchParams(window.location.search).get("to");e||(e="Nama Tamu"),document.getElementById("guestNameSlot").innerHTML=e});