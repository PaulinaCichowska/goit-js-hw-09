!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.body,n=null;e.disabled=!0,t.addEventListener("click",(function(){n=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),t.disabled=!0,e.disabled=!1}),1e3)})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.eafad09f.js.map