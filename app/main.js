const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
// const fs = require("fs");

function isDev() {
  if (process.env["NODE_ENV"] === undefined) {
    return false;
  }

  if (process.env["NODE_ENV"] === "development") {
    return true;
  }

  return false;
}

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (isDev()) {
    win.loadURL("http://localhost:8080");
    win.webContents.openDevTools();
  } else {
    const htmlFile = path.resolve(__dirname, "..", "ui", "dist", "index.html");
    win.loadFile(htmlFile);
  }

  setTimeout(function () {
    console.log("sending testmain");
    win.webContents.send("testmain", "Hello from main.js");
  }, 3000);
}

app.whenReady().then(createWindow);

ipcMain.on("test-signal", (event, message) => {
  console.log("test signal", message);
});
