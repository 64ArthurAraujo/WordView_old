const { app, BrowserWindow } = require("electron")
const path = require("path")

let mainWindow

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 900,
		height: 680,
	})

	mainWindow.loadURL(`file://${path.join(__dirname, "../public/index.html")}`)

	mainWindow.on("closed", () => {
		mainWindow = null
	})
}

app.on("ready", createWindow)

// those two events completely optional to subscrbe to, but that's a common way to get the
// user experience people expect to have on macOS: do not quit the application directly
// after the user close the last window, instead wait for Command + Q (or equivalent).
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit()
})
app.on("activate", () => {
	if (mainWindow === null) createWindow()
})