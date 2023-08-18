console.log("\n%c Stellar v"+stellar.version+" %c\n"+stellar.github+"\n","color:#e8fafe;background:#03c7fa;padding:8px;border-radius:4px","margin-top:8px");const util={diffDate:(e,t=!1)=>{const l=new Date,a=new Date(e),s=l.getTime()-a.getTime(),n=36e5,r=24*n;let i;if(t){const e=s/2592e6,t=s/r,l=s/n,a=s/6e4;i=e>12?null:e>=1?parseInt(e)+" "+stellar.config.date_suffix.month:t>=1?parseInt(t)+" "+stellar.config.date_suffix.day:l>=1?parseInt(l)+" "+stellar.config.date_suffix.hour:a>=1?parseInt(a)+" "+stellar.config.date_suffix.min:stellar.config.date_suffix.just}else i=parseInt(s/r);return i},copy:(e,t)=>{const l=document.getElementById(e);l&&(l.select(),document.execCommand("Copy"),t&&t.length>0&&hud.toast(t))},toggle:e=>{const t=document.getElementById(e);t&&t.classList.toggle("display")}},hud={toast:(e,t)=>{t=isNaN(t)?2e3:t;var l=document.createElement("div");l.classList.add("toast"),l.innerHTML=e,document.body.appendChild(l),setTimeout((function(){l.style.webkitTransition="-webkit-transform 0.5s ease-in, opacity 0.5s ease-in",l.style.opacity="0",setTimeout((function(){document.body.removeChild(l)}),500)}),t)}},l_body=document.querySelector(".l_body"),sidebar={toggle:()=>{l_body&&(l_body.classList.add("mobile"),l_body.classList.toggle("sidebar"))}},init={toc:()=>{stellar.jQuery((()=>{var e=[];$("article.md-text :header").each((function(t,l){e.push(l)})),$(document,window).scroll((function(t){var l=$(this).scrollTop(),a=null;for(var s in e){var n=$(e[s]);n.offset().top>l+32||(a?n.offset().top>=a.offset().top&&(a=n):a=n)}if(a){$("#data-toc a.toc-link").removeClass("active");var r="#"+a.attr("id");if("#undefined"!=r){const e=$('#data-toc a.toc-link[href="'+encodeURI(r)+'"]');if(e.length>0){e.addClass("active");const t=document.querySelector(".widgets"),l=document.querySelector('#data-toc a.toc-link[href="'+encodeURI(r)+'"]'),a=l.getBoundingClientRect().bottom-t.getBoundingClientRect().bottom+100,s=l.getBoundingClientRect().top-t.getBoundingClientRect().top-64;s<0?t.scrollBy(0,s):a>0&&t.scrollBy(0,a)}}else $("#data-toc a.toc-link:first").addClass("active")}}))}))},sidebar:()=>{stellar.jQuery((()=>{$("#data-toc a.toc-link").click((function(e){l_body.classList.remove("sidebar")}))}))},relativeDate:e=>{e.forEach((e=>{const t=e,l=t.getAttribute("datetime");let a=util.diffDate(l,!0);a&&(t.innerText=a)}))},registerTabsTag:function(){document.querySelectorAll(".tabs .nav-tabs .tab").forEach((e=>{e.addEventListener("click",(t=>{if(t.preventDefault(),e.classList.contains("active"))return;[...e.parentNode.children].forEach((t=>{t.classList.toggle("active",t===e)}));const l=document.getElementById(e.querySelector("a").getAttribute("href").replace("#",""));[...l.parentNode.children].forEach((e=>{e.classList.toggle("active",e===l)})),l.dispatchEvent(new Event("tabs:click",{bubbles:!0}))}))})),window.dispatchEvent(new Event("tabs:register"))}};if(init.toc(),init.sidebar(),init.relativeDate(document.querySelectorAll("#post-meta time")),init.registerTabsTag(),stellar.plugins.scrollreveal&&stellar.loadScript(stellar.plugins.scrollreveal.js).then((function(){ScrollReveal().reveal("body .reveal",{distance:stellar.plugins.scrollreveal.distance,duration:stellar.plugins.scrollreveal.duration,interval:stellar.plugins.scrollreveal.interval,scale:stellar.plugins.scrollreveal.scale,easing:"ease-out"})})),stellar.plugins.lazyload&&(stellar.loadScript(stellar.plugins.lazyload.js,{defer:!0}),window.lazyLoadOptions={elements_selector:".lazy"},window.addEventListener("LazyLoad::Initialized",(function(e){window.lazyLoadInstance=e.detail.instance}),!1),document.addEventListener("DOMContentLoaded",(function(){window.lazyLoadInstance?.update()}))),stellar.plugins.stellar)for(let e of Object.keys(stellar.plugins.stellar)){let t=stellar.plugins.stellar[e];if("linkcard"==e)stellar.loadScript(t,{defer:!0}).then((function(){setCardLink(document.querySelectorAll("a.link-card[cardlink]"))}));else{const l=document.getElementsByClassName("stellar-"+e+"-api");null!=l&&l.length>0&&stellar.jQuery((()=>{stellar.loadScript(t,{defer:!0}),"timeline"==e&&stellar.loadScript(stellar.plugins.marked)}))}}if(stellar.plugins.swiper){const e=document.getElementById("swiper-api");null!=e&&(stellar.loadCSS(stellar.plugins.swiper.css),stellar.loadScript(stellar.plugins.swiper.js,{defer:!0}).then((function(){const t=e.getAttribute("effect")||"";new Swiper(".swiper#swiper-api",{slidesPerView:"auto",spaceBetween:8,centeredSlides:!0,effect:t,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})})))}if(stellar.plugins.preload&&("instant_page"==stellar.plugins.preload.service?stellar.loadScript(stellar.plugins.preload.instant_page,{defer:!0,type:"module",integrity:"sha384-OeDn4XE77tdHo8pGtE1apMPmAipjoxUQ++eeJa6EtJCfHlvijigWiJpD7VDPWXV1"}):"flying_pages"==stellar.plugins.preload.service&&(window.FPConfig={delay:0,ignoreKeywords:[],maxRPS:5,hoverDelay:25},stellar.loadScript(stellar.plugins.preload.flying_pages,{defer:!0}))),stellar.plugins.fancybox){let e="img[fancybox]:not(.error)";stellar.plugins.fancybox.selector&&(e+=`, ${stellar.plugins.fancybox.selector}`),0!==document.querySelectorAll(e).length&&(stellar.loadCSS(stellar.plugins.fancybox.css),stellar.loadScript(stellar.plugins.fancybox.js,{defer:!0}).then((function(){Fancybox.bind(e,{groupAll:!0,hideScrollbar:!1,Thumbs:{autoStart:!1},caption:function(e,t,l){return l.$trigger.alt||null}})})))}stellar.search.service&&"local_search"==stellar.search.service&&stellar.jQuery((()=>{stellar.loadScript("/js/search/local-search.js",{defer:!0}).then((function(){var e=$("input#search-input");if(0!=e.length){var t=document.querySelector("div#search-result");e.focus((function(){var t=stellar.search[stellar.search.service]?.path||"/search.json";t.startsWith("/")&&(t=t.substring(1)),t=stellar.config.root+t;const l=e.attr("data-filter")||"";searchFunc(t,l,"search-input","search-result")})),e.keydown((function(e){13==e.which&&e.preventDefault()})),new MutationObserver((function(e,t){1==e.length&&(e[0].addedNodes.length?$(".search-wrapper").removeClass("noresult"):e[0].removedNodes.length&&$(".search-wrapper").addClass("noresult"))})).observe(t,{childList:!0})}}))})),stellar.plugins.heti&&(stellar.loadCSS(stellar.plugins.heti.css),stellar.loadScript(stellar.plugins.heti.js,{defer:!0}).then((function(){const e=new Heti(".heti");(function(){const e=document.querySelectorAll(this.rootSelector);for(let t of e)this.spacingElement(t)}).bind(e)(),stellar.plugins.heti.enable=!1}))),stellar.plugins.copycode&&stellar.loadScript(stellar.plugins.copycode.js,{defer:!0});