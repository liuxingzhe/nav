import{d as b}from"./chunk-YH6FRKU2.js";var L=b((p,v)=>{"use strict";(function(d,r){typeof define=="function"&&define.amd?define([],r):typeof p<"u"?r():(r(),d.FileSaver={})})(p,function(){"use strict";function d(e,t){return typeof t>"u"?t={autoBom:!1}:typeof t!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function r(e,t,i){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){l(n.response,t,i)},n.onerror=function(){console.error("could not download file")},n.send()}function w(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return 200<=t.status&&299>=t.status}function s(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,m=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!m?function(e,t,i){var n=a.URL||a.webkitURL,o=document.createElement("a");t=t||e.name||"download",o.download=t,o.rel="noopener",typeof e=="string"?(o.href=e,o.origin===location.origin?s(o):w(o.href)?r(e,t,i):s(o,o.target="_blank")):(o.href=n.createObjectURL(e),setTimeout(function(){n.revokeObjectURL(o.href)},4e4),setTimeout(function(){s(o)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,i){if(t=t||e.name||"download",typeof e!="string")navigator.msSaveOrOpenBlob(d(e,i),t);else if(w(e))r(e,t,i);else{var n=document.createElement("a");n.href=e,n.target="_blank",setTimeout(function(){s(n)})}}:function(e,t,i,n){if(n=n||open("","_blank"),n&&(n.document.title=n.document.body.innerText="downloading..."),typeof e=="string")return r(e,t,i);var o=e.type==="application/octet-stream",E=/constructor/i.test(a.HTMLElement)||a.safari,y=/CriOS\/[\d]+/.test(navigator.userAgent);if((y||o&&E||m)&&typeof FileReader<"u"){var u=new FileReader;u.onloadend=function(){var c=u.result;c=y?c:c.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=c:location=c,n=null},u.readAsDataURL(e)}else{var h=a.URL||a.webkitURL,f=h.createObjectURL(e);n?n.location=f:location.href=f,n=null,setTimeout(function(){h.revokeObjectURL(f)},4e4)}});a.saveAs=l.saveAs=l,typeof v<"u"&&(v.exports=l)})});export{L as a};
