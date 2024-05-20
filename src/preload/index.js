// import { contextBridge, ipcRenderer } from 'electron'
// import { electronAPI } from '@electron-toolkit/preload'

// // Custom APIs for renderer
// const api = {
//   runScript: () => ipcRenderer.send('run-script'),
//   addItem: (newItem) => ipcRenderer.send('add-item', newItem),
//   onItemAdded: (callback) => ipcRenderer.on('item-added', (event, newItem) => callback(newItem)),
//   updateItemValue: (itemId, field, val) => ipcRenderer.send('update-item', itemId, field, val),
//   updateCategory: (selectedItem, selectedCategory, itemId) => ipcRenderer.send('update-category', selectedItem, selectedCategory, itemId),
//   onRefreshPDF: (callback) => ipcRenderer.on('refresh-pdf', (event, savePath) => callback(savePath)),
//   savePath: (pathText) => ipcRenderer.send('save-path', pathText),
// }

// // contextBridge.exposeInMainWorld('electronAPI', electronAPI)
// // contextBridge.exposeInMainWorld('api', api)


// //Use `contextBridge` APIs to expose Electron APIs to
// //renderer only if context isolation is enabled, otherwise
// //just add to the DOM global.
// if (process.contextIsolated) {
//   try {
//     contextBridge.exposeInMainWorld('electron', electronAPI)
//     contextBridge.exposeInMainWorld('api', api)
    

//   } catch (error) {
//     console.error(error)
//   }
// } else {
//   window.electron = electronAPI
//   window.api = api
// }


// import { contextBridge, ipcRenderer } from 'electron';

// // Custom APIs for renderer
// const api = {
//   runScript: () => ipcRenderer.send('run-script'),
//   addItem: (newItem) => ipcRenderer.send('add-item', newItem),
//   onItemAdded: (callback) => ipcRenderer.on('item-added', (event, newItem) => callback(newItem)),
//   updateItemValue: (itemId, field, val) => ipcRenderer.send('update-item', itemId, field, val),
//   updateCategory: (selectedItem, selectedCategory, itemId) => ipcRenderer.send('update-category', selectedItem, selectedCategory, itemId),
//   onRefreshPDF: (callback) => ipcRenderer.on('refresh-pdf', (event, savePath) => callback(savePath)),
//   savePath: (pathText) => ipcRenderer.send('save-path', pathText),
// };

// // Use `contextBridge` APIs to expose Electron APIs to
// // renderer only if context isolation is enabled, otherwise
// // just add to the DOM global.
// if (process.contextIsolated) {
//   try {
//     contextBridge.exposeInMainWorld('electron', ipcRenderer);
//     contextBridge.exposeInMainWorld('api', api);
//   } catch (error) {
//     console.error(error);
//   }
// } else {
//   window.electron = ipcRenderer;
//   window.api = api;
// }


import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  runScript: () => ipcRenderer.send('run-script'),
  addItem: (newItem) => ipcRenderer.send('add-item', newItem),
  onItemAdded: (callback) => ipcRenderer.on('item-added', (event, newItem) => callback(newItem)),
  updateItemValue: (itemId, field, val) => ipcRenderer.send('update-item', itemId, field, val),
  updateCategory: (selectedItem, selectedCategory, itemId) => ipcRenderer.send('update-category', selectedItem, selectedCategory, itemId),
  // onRefreshPDF: (callback) => ipcRenderer.on('refresh-pdf', (event, savePath) => callback(savePath)),
  onRefreshPDF: (callback) => ipcRenderer.on('refresh-pdf', callback),
  savePath: (pathText) => ipcRenderer.send('save-path', pathText),
});
