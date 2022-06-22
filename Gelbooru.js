// ==UserScript==
// @name        Gelbooru
// @namespace   C:\Users\Jacek\OneDrive\Greasemonkey\Gelbooru.js
// @include     http://konachan.com/post/show/*
// @version     1
// @grant       none
// ==/UserScript==
var div = document.getElementById('png');
if (div == null) {
  div = document.getElementById('highres');
}
if (div != null) {
  window.location.href = div.href;
}
