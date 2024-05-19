import Versions from './components/Versions';
import PlayerWidget from './components/PlayerWidget';
import SelectWidget from './components/SelectWidget';
import { Music } from "../../main/Lister/Lister.ts";
//import electronLogo from './assets/electron.svg'

function App(): JSX.Element {
  //const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  const list = [
    new Music("Music/Signed/ukr/Жадан і собаки - Троєщина.mp3", [{name:"Music"},{name:"Signed"}])
  ];

  return (
    <>
      <div id="title_container">
        <span>Localitron</span>
      </div>
      <div id="content_container">
        <PlayerWidget isButtonVisible={true}></PlayerWidget>
        <SelectWidget targetDir='D:/' selectList={list}></SelectWidget>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
