// 创建本地浏览器窗口
const { app, BrowserWindow } = require('electron')

let win

function createWindow() {
  // 创建浏览器窗口
  // mainWindow = new BrowserWindow({ width: 1000, height: 670 })
  win = new BrowserWindow({
    width: 1550,
    height: 720,
    // width: 1000,
    // height: 670,
    titleBarStyle: 'hidden'
  })

  // 加载远程URL
  win.loadURL('http://localhost:3000/')
  //  或加载本地HTML文件
  // mainWindow.loadURL(`file://${__dirname}/app/index.html`)

  // 窗口是否可以拖动
  win.setMovable(true)

  // 打开开发者工具，默认不打开
  win.webContents.openDevTools()

  // 关闭window窗口
  win.on('closed', function() {
    win = null
  })
}

// 当 Electron 完成初始化，创建浏览器窗口
app.on('ready', createWindow)

// 所有窗口关闭时，退出
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (win === null) {
    createWindow()
  }
})
