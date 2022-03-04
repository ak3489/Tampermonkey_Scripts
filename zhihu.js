// ==UserScript==
// @name         知乎
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       ak3489
// @match        https://www.zhihu.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

   let style = `
       /* 宽度 */
       .Question-mainColumn {width: 1000px !important;}
       /* 标题透明 */
       .QuestionHeader-title{color:transparent}
       /* 隐藏右侧 */
       .Question-sideColumn.Question-sideColumn--sticky{display:none}
   `;
     let style_Add = document.createElement('style');
    if (document.lastChild) {
            document.lastChild.appendChild(style_Add).textContent = style;
        } else { // 避免网站加载速度太慢的备用措施
            let timer1 = setInterval(function(){ // 每 10 毫秒检查一下 html 是否已存在
                if (document.lastChild) {
                    clearInterval(timer1); // 取消定时器
                    document.lastChild.appendChild(style_Add).textContent = style;
                }
            });
        }

})();
