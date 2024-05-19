import Versions from './components/Versions'
import PlayerWidget from './components/PlayerWidget'
//import electronLogo from './assets/electron.svg'

function App(): JSX.Element {
  //const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div id="title_container">
        <span>Localitron</span>
      </div>
      <div id="content_container">
        <PlayerWidget isButtonVisible={true}></PlayerWidget>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
