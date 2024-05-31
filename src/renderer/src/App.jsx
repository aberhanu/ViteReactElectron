import Output from "./components/Output/Output"
import PathEntry from "./components/PathEntry"
import PlotAddition from "./components/PlotAddition/PlotAddition"
import { Routes, Route} from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar";
import Code from "./components/Code/Code";
import Nodes from "./components/Nodes/Nodes";
import Share from "./components/Share/Share";



function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')  
  
  

  return (
    <>
      <Sidebar/>
      <Output/>
    </>
  )
}

export default App

