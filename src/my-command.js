import BrowserWindow from 'sketch-module-web-view'
import UI from 'sketch/ui'
// documentation: https://developer.sketchapp.com/reference/api/

const webviewIdentifier = 'sketch-react-webview.webview'
export default function () {
  const options = {
    identifier: webviewIdentifier,
    width: 240,
    height: 180,
    show: false
  }

  const browserWindow = new BrowserWindow(options)

  // only show the window when the page has loaded to avoid a white flash
  browserWindow.once('ready-to-show', () => {
    browserWindow.show()
  })

  const webContents = browserWindow.webContents

  // print a message when the page loads
  webContents.on('did-finish-load', () => {
    console.log("ok")
    UI.message('UI loaded!')
  })

  browserWindow.loadURL(require('../resources/webview.html'))
}
