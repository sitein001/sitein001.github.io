(function(){function a(a){const b=decodeURIComponent(document.cookie).split(";");if(0===b.length)return null;let c=null;return b.some(b=>{if(" "===b[0]&&(b=b.slice(1)),b=b.split("="),a===b[0])return c=b[1],!0}),c}if(!("serviceWorker"in navigator)||!("PushManager"in window))return;window.edPushSDK=window.edPushSDK||[];let b=null;try{b=localStorage.getItem("ufp2")||a("ufp2")}catch(a){}if(!b){window.nameDomainUfp2="supervid.pro";let a=document.createElement("script");a.async=!0,a.src="https://topswp.com/ls/ufp2.min.js",document.head.appendChild(a)}let c=new function(){function a(a,b){let c=window.edPushSDK.filter(function(b){return b[0]&&b[0]===a&&"function"==typeof b[1]});0<c.length&&c.forEach(function(a){a[1](b)})}function b(){return navigator.permissions?navigator.permissions.query({name:"notifications"}).then(a=>a.state):new Promise(a=>{a(Notification.permission)})}function c(){return new Promise(function(a,b){let c=["h="+h.config.h,"fp="+h.config.uid];h.config.tpl&&c.push("tpl="+h.config.tpl),navigator.serviceWorker.register("/sw.js?"+c.join("&")).then(function(b){let c;b.installing?c=b.installing:b.waiting?c=b.waiting:b.active&&(c=b.active),c&&("activated"===c.state?a(b):c.addEventListener("statechange",function(c){"activated"===c.target.state&&a(b)}))}).catch(function(a){b(a)})})}function d(a,b){return i||b?fetch(h.config.pushApi+"/phsub?"+["a=1","s=1","src="+h.config.src,"p="+h.config.pid,"st="+h.config.sid,"wd="+h.config.wid,"fp="+encodeURIComponent(h.config.uid),"d="+encodeURIComponent(h.config.d),"e="+encodeURIComponent(a.endpoint),"tpl="+h.config.tpl,"tz="+Math.ceil(new Date().getTimezoneOffset()/-60),"sbid="+(j.si1||""),"sbid2="+(j.si2||"")].join("&")):Promise.resolve()}function e(a){return new Promise(function(b){let c=new MessageChannel;navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage(a,[c.port2]),b()})}function f(a){const b="=".repeat((4-a.length%4)%4),c=(a+b).replace(/\-/g,"+").replace(/_/g,"/"),d=window.atob(c),e=new Uint8Array(d.length);for(let b=0;b<d.length;++b)e[b]=d.charCodeAt(b);return e}function g(){return c().then(function(a){const b={userVisibleOnly:!0,applicationServerKey:f(h.config.pk)};return a.pushManager.subscribe(b)}).then(function(a){return d(a,"new")}).then(function(a){return new Promise(function(b){b(a.json().then(function(a){return a}).catch(function(){return{}}))})}).then(function(b){return b.s=b.s||0,e({fp:h.config.uid,sbid:j.si1||"",sbid2:j.si2||"",sv:b.s}).then(function(){1===b.s?a("onGranted"):a("onSubscribed")})}).catch(function(b){a("onError",b)})}this.config={};let h=this,i=!1,j={si1:"",si2:""};try{let a=new URL(window.location.href);j.si1=a.searchParams.get("si1"),j.si2=a.searchParams.get("si2")}catch(a){let b=window.location.search.substring(1).split("&");for(let a=0;a<b.length;a++){let c=b[a].split("="),d=decodeURIComponent(c[0]),e=decodeURIComponent(c[1]);if("undefined"==typeof j[d])j[d]=decodeURIComponent(e);else if("string"==typeof j[d]){let a=j[d];j[d]=[a,decodeURIComponent(e)]}else j[d].push(decodeURIComponent(e))}}j.si1=(j.si1||"").substring(0,32),j.si2=(j.si2||"").substring(0,32),this.init=function(f){if(h.config=f,!!h.config.pk)return navigator.serviceWorker.getRegistrations().then(a=>{i=0===a.length||0===a.filter(function(a){return-1<a.active.scriptURL.indexOf(document.location.hostname+"/sw.js")}).length}),a("onInit"),b().then(function(b){"prompt"===b||"default"===b?Notification.requestPermission().then(function(b){if("granted"===b)g();else if("denied"===b)a("onDenied");else if("default"===b){let b=-1<navigator.userAgent.toLowerCase().indexOf("firefox");a(b?"onDenied":"onClose")}}).catch(function(b){a("onError",b)}):"granted"===b?c().then(function(a){return a.pushManager.getSubscription()}).then(function(b){return b?d(b).then(function(a){return new Promise(function(b){b(a.json().then(function(a){return a}).catch(function(){return{}}))})}).then(function(a){return a.s=a.s||0,e({fp:h.config.uid,sbid:j.si1||"",sbid2:j.si2||"",sv:a.s})}).then(function(){a("onSubscribed")}):g()}).catch(function(b){a("onError",b)}):"denied"==b&&a("onDenied")})}},d=setInterval(function(){try{b=localStorage.getItem("ufp2")||a("ufp2"),b&&(clearInterval(d),c.init({pushApi:"https://nativesp.pro",pk:"BKLXCr8Pte1pKLCozLm8gP67hRMF1qf70v6JfM-okq2yW7XgN9sGs8zWZFV-rQWkNAKNiXxcHpbdo7eZJYYoUq8",src:0,pid:92353,sid:28883,wid:0,uid:b,d:"supervid.pro",h:"waWQiOjAsInNpZCI6MCwid2lkIjowLCJzcmMiOjB9eyJ",tpl:"27"}))}catch(a){}},50)})();