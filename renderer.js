// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const { ipcRenderer} = require('electron')
const { BrowserWindow } = require('electron').remote


window.addEventListener('DOMContentLoaded',() => {
    document.getElementById('btn').addEventListener('click',() =>{
       ipcRenderer.send('msg','888');
       let win = new BrowserWindow({
        width: 400,
        height: 400
       })
       win.loadURL('https://narakus.xyz')

    
    })
  
    ipcRenderer.on('push',(event,arg) => {

        document.getElementById('messg').innerHTML=arg

    })

  
})