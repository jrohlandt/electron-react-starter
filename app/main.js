const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
// const fs = require("fs");

function isDev() {
  return true;
}

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // if (isDev()) {
  //   // Load index.html via webpack dev server.
  //   require(path.resolve(__dirname, "..", "webpack-server.js"));
  //   mainWindow.loadURL("http://localhost:3000/ui/dist/index.html");
  // } else {
  if (isDev()) {
    const htmlFile = path.resolve(__dirname, "..", "ui", "dist", "index.html");
    win.loadFile(htmlFile);
    win.webContents.openDevTools();

    setTimeout(function () {
      console.log("sending testmain");
      win.webContents.send("testmain", "Hello from main.js");
    }, 3000);
  } else {
    const htmlFile = path.resolve(__dirname, "..", "ui", "dist", "index.html");
    win.loadFile(htmlFile);
  }
}

app.whenReady().then(createWindow);

ipcMain.on("test-signal", (event, message) => {
  console.log("test signal", message);
});
