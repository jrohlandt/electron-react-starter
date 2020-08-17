const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  const htmlFile = path.resolve(__dirname, "..", "ui", "dist", "index.html");
  win.loadFile(htmlFile);

  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
