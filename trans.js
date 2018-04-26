'use strict';

const electron = require('electron');

document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://shinycolors.enza.fun/';

    const webview = document.getElementById('webview');

    const back = document.getElementById('back');
    const forward = document.getElementById('forward');
    const home = document.getElementById('home');

    back.addEventListener('click', function() {
        webview.goBack();
    }, false);

    forward.addEventListener('click', function() {
        webview.goForward();
    }, false);

    home.addEventListener('click', function() {
        webview.loadURL(url + 'home');
    }, false);
});