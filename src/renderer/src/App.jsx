import Output from "./components/Output"
import PathEntry from "./components/PathEntry"
import PlotAddition from "./components/PlotAddition"
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import PlotsPage from "./components/PlotsPage/PlotsPage";


function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="plots-page"  element={<PlotsPage/>} />
          </Route>
        </Routes>
        {/* <div>
          <Sidebar/>
          <Routes>
            <Route path="/" element={<PathEntry />} />
          </Routes>
        </div> */}
      </Router>
      {/* <div>
        <PathEntry/>
        <PlotAddition/>
        <hr/>
      </div>
      <Output/> */}

      
    </>
  )
}

export default App

