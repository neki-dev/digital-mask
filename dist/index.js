"use strict";function applyStringMask(t,n,p="_"){let a=t.replace(/\D+/g,"");for(let t=0;t<n.length;t+=1)(void 0===a[t]||n[t]!==p&&n[t]!==a[t])&&(a=a.substring(0,t)+n[t]+a.substring(t));return a=a.substring(0,n.length)}function applyInputMask(t,n,p="_"){t.value&&(t.value=applyStringMask(t.value,n,p),0<(n=t.value.search(/(\d)\D+$/)+1)&&t.setSelectionRange(n,n))}function bindInputMask(t,n,p="_"){const a=()=>{applyInputMask(t,n,p)};return t.addEventListener("input",a),()=>{t.removeEventListener("input",a)}}exports.bindInputMask=exports.applyInputMask=exports.applyStringMask=void 0,module.exports={applyStringMask:applyStringMask,applyInputMask:applyInputMask,bindInputMask:bindInputMask};