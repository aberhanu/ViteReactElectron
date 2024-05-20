// function Output(){
//     return(
//         <body>
//             <embed src="" id="pdf" width="850px" height="1100px" />
//             <p id="outputPath"></p>
//             <script src="./renderer.js"></script>
//         </body>

//     )
// }
// export default Output

// import { contextBridge, ipcRenderer } from 'electron'
// import React, { useEffect } from 'react'

// function Output() {
//   // window.api.onRefreshPDF ((savePath)=> {
//   //   document.getElementById('pdf').setAttribute('src',savePath);
//   // });
  

//   useEffect(() => {
//     const handleRefreshPDF = (savePath) => {
//       document.getElementById('pdf').setAttribute('src', savePath)
//     }

//     window.api.onRefreshPDF(handleRefreshPDF)

//     return () => {
//       // Clean up the event listener on unmount
//       window.api.onRefreshPDF(null)
//     }
//   }, [])

//   return (
//     <div>
//       <embed src="" id="pdf" width="850px" height="1100px" />
//       <p id="outputPath"></p>
//     </div>
//   )
// }

// export default Output


// import React, { useEffect } from 'react';

// function Output() {
//   useEffect(() => {
//     const handleRefreshPDF = (savePath) => {
//       document.getElementById('pdf').setAttribute('src', savePath);
//     };

//     // Ensure window.electron is defined and use the correct method to listen for events
//     if (window.electron && window.electron.onRefreshPDF) {
//       window.electron.onRefreshPDF(handleRefreshPDF);
//     } else {
//       console.error('window.electron.onRefreshPDF is not defined');
//     }

//     return () => {
//       // Clean up the event listener on unmount
//       if (window.electron && window.electron.removeListener) {
//         window.electron.removeListener('refresh-pdf', handleRefreshPDF);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <embed src="" id="pdf" width="850px" height="1100px" />
//       <p id="outputPath"></p>
//     </div>
//   );
// }

// export default Output;



import React, { useEffect, useState, useRef } from 'react';


function Output() {
  const [pdfPath, setPdfPath] = useState('');
  const embedRef = useRef(null);
  

  useEffect(() => {
    const handleRefreshPDF = (event, savePath) => {
      console.log(`Received refresh-pdf event with path: ${savePath}`);
      setPdfPath(savePath)
      console.log(pdfPath)
      // if (embedRef.current) {
      //   embedRef.current.setAttribute('src', savePath);
      //   }
      
    };

    if (window.electron && window.electron.onRefreshPDF) {
      window.electron.onRefreshPDF(handleRefreshPDF);
    } else {
      console.error('window.electron.onRefreshPDF is not defined');
    }

    return () => {
      if (window.electron && window.electron.removeListener) {
        window.electron.removeListener('refresh-pdf', handleRefreshPDF);
      }
    };
  }, []);

  return (
    <div>
      {pdfPath ? (
        <embed src={`file://${pdfPath}`} id="pdf" width="850px" height="1100px" />
      ) : (
        <p>No PDF generated yet.</p>
      )}
      

    </div>
  );
  // return (
  //   <div>
  //     <p>PDF Path: {pdfPath}</p>
  //     <embed id='pdf' ref={embedRef} width="600" height="500" type="application/pdf" />
  //   </div>
  // );
}

export default Output;


