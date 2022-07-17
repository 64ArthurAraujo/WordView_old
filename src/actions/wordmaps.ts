const { ipcRenderer } = require('electron');

export function fetchWordmaps() {

    ipcRenderer.send('request', 'host-data-folder');

    ipcRenderer.on('response', (event, arg) => {
        console.log(arg);
    });
    
}
