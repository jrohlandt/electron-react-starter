const { app, BrowserWindow } = require("electron");
const path = require("path");

function isDev() {
  return true;
}

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (isDev()) {
    // Load index.html via webpack dev server.
    require(path.resolve(__dirname, "..", "webpack-server.js"));
    mainWindow.loadURL("http://localhost:3000/ui/dist/index.html");
  } else {
    const htmlFile = path.resolve(__dirname, "..", "ui", "dist", "index.html");
    win.loadFile(htmlFile);
  }

  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
