import React, { useState } from 'react';
import {defaultPath, updateDefaultPath} from './Defaults'

function PathEntry() {
  const handlePathBlur = (event) => {
    
    const pathText = event.target.value;
    updateDefaultPath(pathText);
    window.electron.savePath(pathText);
  };

  return (
    <div id="askPath">
      <h2>Enter path to save the PDF (i.e., path/file-name.pdf):</h2>
      <input type="text" id="path" onBlur={handlePathBlur} placeholder={defaultPath == '' ? 'Enter Path Here': defaultPath}/>
    </div>
  );
}

export default PathEntry;
