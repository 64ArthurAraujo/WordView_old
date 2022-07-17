const { app, ipcMain, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		resizable: true,
		minWidth: 720,
		minHeight: 640,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
	});
    
	mainWindow.loadURL(`file://${path.join(__dirname, "../public/index.html")}`);

	mainWindow.maximize();
    // mainWindow.removeMenu();

	mainWindow.on("closed", () => {
		mainWindow = null;
	});
}

ipcMain.on('request', (event, arg) => {
    let response;

    switch (arg) {
        case 'host-data-folder': 
            response = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' : process.env.HOME + "/.local/share");
            break;
    }
    
    event.reply('response', response)
});

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
	if (mainWindow === null) createWindow();
});
