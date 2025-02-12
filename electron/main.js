const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Carregar o servidor React (localhost)
  mainWindow.loadURL('http://localhost:3000');  // Assumindo que o React está rodando na porta 3000

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Quando o app estiver pronto, cria a janela
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quando todas as janelas forem fechadas, encerre o app (em sistemas não-macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
