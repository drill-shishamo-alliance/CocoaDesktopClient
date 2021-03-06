const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');
const autoLaunch = require('auto-launch');
const ipcMain = electron.ipcMain;
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 570,
    height: 340,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`
  );
  if (isDev) {
    // Open the DevTools.
    // BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('ready', () => {
  const launcher = new autoLaunch({
    name: 'cocoa-desktop',
    path: app.getPath('exe'),
  });

  launcher.isEnabled().then(isEnable => {
    if (isEnable) return;
    launcher.enable();
  });
});

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

ipcMain.on('message', (event, arg) => {
  console.log(arg);
  event.sender.send('reply', 'pong');
  const subWindow = new BrowserWindow({
    width: 500,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  subWindow.show();
});
