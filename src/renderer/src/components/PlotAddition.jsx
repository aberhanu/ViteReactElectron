// import React, { useState } from 'react';

// function PlotAddition() {
//     const [plots, setPlots] = useState([]);
//     const [inputValue, setInputValue] = useState('');

//     const handleAddPlot = () => {
//         // Create a new plot regardless of the input value
//         const newPlot = {
//             id: `item-${Date.now()}`, // Generate unique ID for the item
//             name: inputValue || '', // Use the input value or an empty string
//             category: 'Select One',
//             x: '',
//             y: '',
//         };

//         // Update the plots state with the new plot
//         setPlots([...plots, newPlot]);

//         // Clear the input value
//         setInputValue('');
//     };

//     const handleInputChange = (e) => {
//         setInputValue(e.target.value);
//     };

//     const handleCategoryChange = (id, event) => {
//         // Update the category of the plot with the specified ID
//         const updatedPlots = plots.map(plot => {
//             if (plot.id === id) {
//                 return {
//                     ...plot,
//                     category: event.target.value,
//                 };
//             }
//             return plot;
//         });
//         setPlots(updatedPlots);
//     };

//     const handleXChange = (id, event) => {
//         // Update the x coordinate for the plot with the specified ID
//         const updatedPlots = plots.map(plot => {
//             if (plot.id === id) {
//                 return {
//                     ...plot,
//                     x: event.target.value,
//                 };
//             }
//             return plot;
//         });
//         setPlots(updatedPlots);
//     };

//     const handleYChange = (id, event) => {
//         // Update the y coordinate for the plot with the specified ID
//         const updatedPlots = plots.map(plot => {
//             if (plot.id === id) {
//                 return {
//                     ...plot,
//                     y: event.target.value,
//                 };
//             }
//             return plot;
//         });
//         setPlots(updatedPlots);
//     };

//     return (
//         <div id="container">
//             <h1>Add Plots</h1>
//             <div id="plotListContainer">
//                 <ul id="plotList">
//                     {plots.map(plot => (
//                         <li key={plot.id}>
//                             {plot.name}
//                             {/* Create category dropdown */}
//                             <select
//                                 value={plot.category}
//                                 onChange={(event) => handleCategoryChange(plot.id, event)}
//                             >
//                                 <option value="Select One">Select One</option>
//                                 <option value="plot">Plot</option>
//                                 <option value="barplot">Barplot</option>
//                                 {/* Add more options as needed */}
//                             </select>

//                             {/* Conditionally render input fields based on category */}
//                             {plot.category === 'plot' || plot.category === 'barplot' ? (
//                                 <div>
//                                     <input
//                                         type="text"
//                                         placeholder="x coordinate"
//                                         value={plot.x}
//                                         onChange={(event) => handleXChange(plot.id, event)}
//                                     />
//                                     <input
//                                         type="text"
//                                         placeholder="y coordinate"
//                                         value={plot.y}
//                                         onChange={(event) => handleYChange(plot.id, event)}
//                                     />
//                                 </div>
//                             ) : null}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             <div id="addPlotContainer">
//                 <input
//                     type="text"
//                     id="plotInput"
//                     placeholder="Enter an item"
//                     value={inputValue}
//                     onChange={handleInputChange}
//                 />
//                 <button id="addPlot" onClick={handleAddPlot}>Add Plot</button>
//             </div>
//             <hr />
//             <div>
//                 <button id="rbtn" type="button">Run Script</button>
//             </div>
//         </div>
//     );
// };

// export default PlotAddition



// import React, { useState } from 'react';

// function PlotAddition() {
//   const [plots, setPlots] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleAddPlot = () => {
//     const newPlot = {
//       id: `item-${Date.now()}`, // Generate unique ID for the item
//       name: inputValue || '', // Use the input value or an empty string
//       category: 'Select One',
//       x: '',
//       y: '',
//     };
//     setPlots([...plots, newPlot]);
//     setInputValue('');
//     window.api.addItem(newPlot.name);
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleCategoryChange = (id, event) => {
//     const updatedPlots = plots.map(plot => {
//       if (plot.id === id) {
//         const updatedPlot = {
//           ...plot,
//           category: event.target.value,
//         };
//         window.api.updateCategory(plot.name, event.target.value, plot.id);
//         return updatedPlot;
//       }
//       return plot;
//     });
//     setPlots(updatedPlots);
//   };

//   const handleXChange = (id, event) => {
//     const updatedPlots = plots.map(plot => {
//       if (plot.id === id) {
//         const updatedPlot = {
//           ...plot,
//           x: event.target.value,
//         };
//         window.api.updateItemValue(plot.id, 'x', event.target.value);
//         return updatedPlot;
//       }
//       return plot;
//     });
//     setPlots(updatedPlots);
//   };

//   const handleYChange = (id, event) => {
//     const updatedPlots = plots.map(plot => {
//       if (plot.id === id) {
//         const updatedPlot = {
//           ...plot,
//           y: event.target.value,
//         };
//         window.api.updateItemValue(plot.id, 'y', event.target.value);
//         return updatedPlot;
//       }
//       return plot;
//     });
//     setPlots(updatedPlots);
//   };

//   const handleRunScript = () => {
//     window.api.runScript();
//   };

//   return (
//     <div id="container">
//       <h1>Add Plots</h1>
//       <div id="plotListContainer">
//         <ul id="plotList">
//           {plots.map(plot => (
//             <li key={plot.id}>
//               {plot.name}
//               <select
//                 value={plot.category}
//                 onChange={(event) => handleCategoryChange(plot.id, event)}
//               >
//                 <option value="Select One">Select One</option>
//                 <option value="plot">Plot</option>
//                 <option value="barplot">Barplot</option>
//               </select>
//               {(plot.category === 'plot' || plot.category === 'barplot') && (
//                 <div>
//                   <input
//                     type="text"
//                     placeholder="x coordinate"
//                     value={plot.x}
//                     onChange={(event) => handleXChange(plot.id, event)}
//                   />
//                   <input
//                     type="text"
//                     placeholder="y coordinate"
//                     value={plot.y}
//                     onChange={(event) => handleYChange(plot.id, event)}
//                   />
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div id="addPlotContainer">
//         <input
//           type="text"
//           id="plotInput"
//           placeholder="Enter an item"
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//         <button id="addPlot" onClick={handleAddPlot}>Add Plot</button>
//       </div>
//       <hr />
//       <div>
//         <button id="rbtn" type="button" onClick={handleRunScript}>Run Script</button>
//       </div>
//     </div>
//   );
// }

// export default PlotAddition;


import React, { useState } from 'react';

function PlotAddition() {
  const [plots, setPlots] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddPlot = () => {
    const newPlot = {
      id: `item-${Date.now()}`,
      name: inputValue,
      category: 'Select One',
      x: '',
      y: '',
    };

    setPlots([...plots, newPlot]);
    setInputValue('');
    window.electron.addItem(newPlot);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCategoryChange = (id, event) => {
    const updatedPlots = plots.map((plot) => {
      if (plot.id === id) {
        const updatedPlot = { ...plot, category: event.target.value };
        window.electron.updateCategory(updatedPlot.name, updatedPlot.category, updatedPlot.id);
        return updatedPlot;
      }
      return plot;
    });
    setPlots(updatedPlots);
  };

  const handleXChange = (id, event) => {
    const updatedPlots = plots.map((plot) => {
      if (plot.id === id) {
        const updatedPlot = { ...plot, x: event.target.value };
        window.electron.updateItemValue(plot.id, 'x', event.target.value);
        return updatedPlot;
      }
      return plot;
    });
    setPlots(updatedPlots);
  };

  const handleYChange = (id, event) => {
    const updatedPlots = plots.map((plot) => {
      if (plot.id === id) {
        const updatedPlot = { ...plot, y: event.target.value };
        window.electron.updateItemValue(plot.id, 'y', event.target.value);
        return updatedPlot;
      }
      return plot;
    });
    setPlots(updatedPlots);
  };

  const handleRunScript = () => {
    window.electron.runScript();
  };

  return (
    <div id="container">
      <h1>Add Plots</h1>
      <div id="plotListContainer">
        <ul id="plotList">
          {plots.map((plot) => (
            <li key={plot.id}>
              {plot.name}
              <select
                value={plot.category}
                onChange={(event) => handleCategoryChange(plot.id, event)}
              >
                <option value="Select One">Select One</option>
                <option value="plot">Plot</option>
                <option value="barplot">Barplot</option>
              </select>
              {(plot.category === 'plot' || plot.category === 'barplot') && (
                <div>
                  <input
                    type="text"
                    placeholder="x coordinate"
                    value={plot.x}
                    onChange={(event) => handleXChange(plot.id, event)}
                  />
                  <input
                    type="text"
                    placeholder="y coordinate"
                    value={plot.y}
                    onChange={(event) => handleYChange(plot.id, event)}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div id="addPlotContainer">
        <input
          type="text"
          id="plotInput"
          placeholder="Enter an item"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button id="addPlot" onClick={handleAddPlot}>Add Plot</button>
      </div>
      <hr />
      <div>
        <button id="rbtn" type="button" onClick={handleRunScript}>Run Script</button>
      </div>
    </div>
  );
}

export default PlotAddition;
