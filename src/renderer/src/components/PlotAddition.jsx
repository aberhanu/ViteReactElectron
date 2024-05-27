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

  const handleDeletePlot = (id) => {
    setPlots(plots.filter((plot) => plot.id !== id));
  }

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
                  <button onClick={() => handleDeletePlot(plot.id)}>Delete Plot</button>
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
