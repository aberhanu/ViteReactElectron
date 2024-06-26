import { app, shell, BrowserWindow, ipcMain, session, protocol, net } from 'electron';
import { join } from 'path';
import { electronApp, optimizer, is } from '@electron-toolkit/utils';
import icon from '../../resources/icon.png?asset';
const { exec } = require('child_process');
const path = require('path');
const url = require('url')
const fs = require('fs').promises;
import { Plot } from '../plot';

let mainWindow;
let savePath;
let plots = new Map();
const writePath = path.join(__dirname, 'written.R');

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      contextIsolation: true,
      enableRemoteModule: false,
      webSecurity: true,
      nodeIntegration: true
      
    }
  });

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: 'deny' };
  });

  // HMR for renderer based on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL']);
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'));
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron');

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  ipcMain.on('save-path', (event, pathText) => {
    savePath = pathText.toString();
  });

  ipcMain.on('run-script', async (event) => {
    if (!mainWindow) {
      console.error('mainWindow is not defined');
      return;
    }

    try {
      await writeScript();
      const command = `Rscript "${writePath}"`;
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing R script: ${error.message}`);
          return;
        }
        if(stdout){
          mainWindow.webContents.send('refresh-pdf', savePath.toString());
        }
        
      });
    } catch (err) {
      console.error('Error writing script or running R script:', err);
    }
  });

  ipcMain.on('add-item', (event, newItem) => {
    if (!mainWindow) {
      console.error('mainWindow is not defined');
      return;
    }
    mainWindow.webContents.send('item-added', newItem);
  });

  ipcMain.on('update-category', (event, itemName, category, itemId) => {
    plots.set(itemId, new Plot(`${category}(`));
  });

  ipcMain.on('update-item', (event, itemId, field, val) => {
    const curr = plots.get(itemId);
    curr[field] = val;
  });

  protocol.handle('atom', (request) => {
    const filePath = request.url.slice('atom://'.length)
    return net.fetch(url.pathToFileURL(filePath).toString())
  })
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

async function writeScript() {
  await clearPath();
  await startScript();
  await writeCommands();
  await closeScript();
}

async function startScript() {
  const pather = `pdf("${savePath}")\n`;
  await fs.appendFile(writePath, pather);
}

async function writeCommands() {
  for (let [id, plot] of plots) {
    let command = plot.maker.toString();
    for (const property in plot) {
      if (plot[property] !== undefined && property.toString() !== 'maker') {
        const line = `${plot[property].toString()}, `;
        command += line;
      }
    }
    command += ')\n';
    await fs.appendFile(writePath, command);
  }
}

async function closeScript() {
  await fs.appendFile(writePath, 'dev.off()\n');
}

async function clearPath() {
  await fs.writeFile(writePath, '');
}



