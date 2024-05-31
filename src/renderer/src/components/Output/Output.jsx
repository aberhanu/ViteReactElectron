import React, { useEffect, useState, useRef } from 'react';


function Output() {
  const [pdfPath, setPdfPath] = useState('');

  useEffect(() => {
    const handleRefreshPDF = (event, savePath) => {
      console.log(`Received refresh-pdf event with path: ${savePath}`);
      setPdfPath(savePath)
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
    <div className='output-div'>
      {pdfPath ? (
        <embed src={`atom://${pdfPath}`}  id="pdf" width="850px" height="1100px" />
      ) : (
        <p>No PDF Generated</p>
      )}
    </div>
  );
}

export default Output;


