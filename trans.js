'use strict';

const electron = require('electron');

document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://shinycolors.enza.fun/';

    const webview = document.getElementById('webview');

    const back = document.getElementById('back');
    const reload = document.getElementById('reload');
    const forward = document.getElementById('forward');
    const home = document.getElementById('home');
    const gasha = document.getElementById('gasha');
    const idol = document.getElementById('idol');
    const produce = document.getElementById('produce');
    const fes = document.getElementById('fes');
    const shop = document.getElementById('shop');
    const item = document.getElementById('item');
    const event = document.getElementById('event');

    back.addEventListener('click', function() {
        webview.goBack();
    }, false);

    reload.addEventListener('click', function() {
        webview.reload();
    });

    forward.addEventListener('click', function() {
        webview.goForward();
    }, false);

    home.addEventListener('click', function() {
        webview.loadURL(url + 'home');
    }, false);

    gasha.addEventListener('click', function() {
        webview.loadURL(url + 'gasha');
    }, false);

    idol.addEventListener('click', function() {
        webview.loadURL(url + 'idolPortal');
    }, false);

    produce.addEventListener('click', function() {
        webview.loadURL(url + 'produceReady');
    }, false);

    fes.addEventListener('click', function() {
        webview.loadURL(url + 'fesTop');
    }, false);

    shop.addEventListener('click', function() {
        webview.loadURL(url + 'shop');
    }, false);

    item.addEventListener('click', function() {
        webview.loadURL(url + 'item');
    }, false);

    event.addEventListener('click', function() {
        webview.loadURL(url + 'produceMarathon');
    }, false);
});