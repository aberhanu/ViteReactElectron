let defaultPath = '';
let defaultPlots = [];

function updateDefaultPlots(newPlots){
    defaultPlots = newPlots;
}

function updateDefaultPath(newPath){
    defaultPath= newPath;
}
export {defaultPlots, updateDefaultPlots, defaultPath, updateDefaultPath}