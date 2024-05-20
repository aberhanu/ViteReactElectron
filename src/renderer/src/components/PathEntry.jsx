// import React from 'react';

// function PathEntry(){

//     return(
//         <div id="askPath">
//             <h2>Enter path to save the PDF (i.e. path/file-name.pdf):</h2>
//             <input type="text" id="path"/>
//         </div>
//     )
// }
// export default PathEntry


import React from 'react';

function PathEntry() {
  const handlePathBlur = (event) => {
    const pathText = event.target.value;
    window.electron.savePath(pathText);
  };

  return (
    <div id="askPath">
      <h2>Enter path to save the PDF (i.e., path/file-name.pdf):</h2>
      <input type="text" id="path" onBlur={handlePathBlur} />
    </div>
  );
}

export default PathEntry;
