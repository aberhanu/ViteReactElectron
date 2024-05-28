import Output from "./components/Output"
import PathEntry from "./components/PathEntry"
import PlotAddition from "./components/PlotAddition"
import Layout from './components/Layout/Layout';
import { Routes, Route} from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import PlotsPage from "./components/PlotsPage/PlotsPage";



function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')  
  

  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="plots-page"  element={<PlotsPage/>} />
          </Route>
        </Routes>
    </>
  )
}

export default App

