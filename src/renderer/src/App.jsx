import Output from "./components/Output"
import PathEntry from "./components/PathEntry"
import PlotAddition from "./components/PlotAddition"
import Layout from './components/Layout/Layout';
import { Routes, Route} from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import PlotsPage from "./components/PlotsPage/PlotsPage";
import CodePage from "./components/CodePage/CodePage";
import NodesPage from "./components/NodesPage/NodesPage";
import SharePage from "./components/SharePage/SharePage";



function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')  
  

  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="plots-page"  element={<PlotsPage/>} />
            <Route path="nodes-page" element={<NodesPage/>}/>
            <Route path="code-page" element={<CodePage/>}/>
            <Route path="share-page" element={<SharePage/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default App

