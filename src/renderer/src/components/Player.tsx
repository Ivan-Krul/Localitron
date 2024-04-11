//import { dialog } from "electron";

interface Props {
    eqOptions?: string[];
    isButtonVisible?: boolean;
    isEQVisible?: boolean;
}

function Player({eqOptions = ["Full res", "Without"],isButtonVisible = true, isEQVisible = false}:Props) {
    let comp : JSX.Element[] = [];
    for(var i = 0; i < eqOptions.length; i++) {
        comp.push(<option value={eqOptions[i]} >{eqOptions[i]} EQ</option>);
    }

    //let showOpenDir = () => {dialog.showOpenDialog({properties: ['openFile']})};

    return (
    <>
        <div id="player_container" className="player_container">
            {isEQVisible? <canvas id="equalizer_visualer"></canvas> : <></>}
            <audio controls id="player" src="./Zenith.mp3"></audio>
            
            {isButtonVisible
            ? <>
            <button id="button_previous">Previous</button>
            <button id="button_chooseRandomly">Choose Randomly</button>
            <button id="button_next">Next</button>
            <button id="button_push">Push to list</button>
            <button id="button_pop">Pop from list</button>
            <button id="button_clear">Clear list</button>
            <button id="button_downloadPlaylist">Download playlist</button>
            <select id="select_eqRenderStage">
                {comp}
            </select>
            </> : <></>}
        </div>
    </>
    );
}

export default Player;
