const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		resizable: true,
		minWidth: 720,
		minHeight: 640,
	});

	mainWindow.loadURL(`file://${path.join(__dirname, "../public/index.html")}`);

	mainWindow.maximize();
    mainWindow.removeMenu();

	mainWindow.on("closed", () => {
		mainWindow = null;
	});
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
	if (mainWindow === null) createWindow();
});
