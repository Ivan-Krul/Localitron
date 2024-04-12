import Versions from './components/Versions'
import Player from './components/Player'
//import electronLogo from './assets/electron.svg'

function App(): JSX.Element {
  //const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="title_container">
        <span>Localify</span>
      </div>
      <div className="content_container">
        <Player isButtonVisible={true} eqOptions={["Full res", "Half res", "Fifth res", "Without"]}></Player>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
