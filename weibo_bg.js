// ==UserScript==
// @name         微博去背景图片
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://weibo.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

   document.querySelector("body").style.cssText='background-image:none'
})();
