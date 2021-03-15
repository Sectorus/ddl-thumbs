// ==UserScript==
// @name         DDL Preview
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ddl-warez.to/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var expression = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi;
var elements = document.getElementsByClassName('no_overflow');

[].slice.call(elements).forEach(function(element){
    try{
	var img_string = element.getElementsByTagName('a')[0].getAttribute('data-original-title');
	var matches = img_string.match(expression);

	var img = document.createElement("img");
	img.src = matches[0].slice(0, -1);
	img.width = 200;
	img.height = 300;
	element.appendChild(img);
    }
    catch (e) {
        console.log(e);
    }
});



})();
