import React, { useEffect, useState } from 'react';
import {defaultPlots, updateDefaultPlots} from '../Defaults'
import './index.scss';


function PlotAddition() {
  const [plots, setPlots] = useState(defaultPlots);
  const [inputValue, setInputValue] = useState('');

  const handleAddPlot = () => {
    const newPlot = {
      id: `item-${Date.now()}`,
      name: inputValue,
      category: 'Select One',
      x: '',
      y: '',
    };

    updateDefaultPlots([...plots, newPlot]);
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
    updateDefaultPlots(updatedPlots);
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
    updateDefaultPlots(updatedPlots);
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
    updateDefaultPlots(updatedPlots);
    setPlots(updatedPlots);
    
  };

  const handleDeletePlot = (id) => {
    updateDefaultPlots(plots.filter((plot) => plot.id !== id));
    setPlots(plots.filter((plot) => plot.id !== id));
  }

  const handleRunScript = () => {
    window.electron.runScript();
  };

  return (
    <>
      <h1>Add Plots</h1>
      <div id="plotListContainer">
        <ul id="plotList">
          {plots.map((plot) => (
            <li key={plot.id}>
              <div className='plot-div'>
                <p>{plot.name}</p>
                <select placeholder='Plot Type'
                  value={plot.category}
                  onChange={(event) => handleCategoryChange(plot.id, event)}
                >
                  <option value="Select One">Select One</option>
                  <option value="plot">Plot</option>
                  <option value="barplot">Barplot</option>
                </select>
                {(plot.category === 'plot' || plot.category === 'barplot') && (
                  <div>
                    <input className='half'
                      type="text"
                      placeholder="x coordinate"
                      value={plot.x}
                      onChange={(event) => handleXChange(plot.id, event)}
                    />
                    <input className='half'
                      type="text"
                      placeholder="y coordinate"
                      value={plot.y}
                      onChange={(event) => handleYChange(plot.id, event)}
                    />
                  </div>
                )}
                <button onClick={() => handleDeletePlot(plot.id)}>Delete Plot</button>
              </div>
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
    </>
  );
}

export default PlotAddition;
