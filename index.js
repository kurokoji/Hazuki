const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'SCBrowser',
    webPreferences: { nodeIntegration: false }
  });

  mainWindow.loadURL(url.format({
    pathname: 'shinycolors.enza.fun/',
    protocol: 'https',
    slashes: true
  }));

  //mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.on("page-title-updated", () => {
    mainWindow.setTitle('SCBrowser');
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});