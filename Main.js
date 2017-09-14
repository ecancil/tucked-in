/**
 * Created by ecancil on 9/9/17.
 */
const {app, BrowserWindow} = require('electron')
let win = null;
function createWindow() {
	// Initialize the window to our specified dimensions
	win = new BrowserWindow({width: 1000, height: 600});
	// Specify entry point
	win.loadURL('http://localhost:4200');
	// Show dev tools
	// Remove this line before distributing
	win.webContents.openDevTools()
	//win.webContents.on('did-get-redirect-request', handleNewWindow);
	win.webContents.on('did-navigate', handleNewWindow);
	win.webContents.on('will-navigate', handleNewWindow);
	// Remove window once app is closed
	win.on('closed', function () {
		win = null;
	});
}

app.on('ready', function () {
	createWindow();
});
app.on('activate', () => {
	if (win === null) {
		createWindow()
	}
})
app.on('window-all-closed', function () {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

function willNav(e, url, frameName, disposition, options)
{
	console.log(url)
	if(url.indexOf('https://accounts.google.com') > -1){
		e.preventDefault();
		win.loadURL(url);
	}
	return;
		if (url.indexOf('localhost:4200') > -1)	{
			//e.preventDefault();
			win.loadURL("localhost:4200" + '?login=true');
		}

}

function handleNewWindow(e, url, frameName, disposition, options)
{

	// Catch OAuth opening a new window and attach callbacks to close it and redirect the main
	// window after it has logged in
		console.log("==============")
		console.log(url);
		console.log("\n\n\n\n\n")
		//e.stopImmediatePropagation();

}
