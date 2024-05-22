import Output from "./components/Output"
import PathEntry from "./components/PathEntry"
import PlotAddition from "./components/PlotAddition"


function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div>
        <PathEntry/>
        <PlotAddition/>
        <hr/>
      </div>
      <Output/>
      
    </>
  )
}

export default App

