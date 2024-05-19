//import { dialog } from "electron";

interface Props {
  isEQVisible?: boolean;
  isButtonVisible?: boolean;
}

function Player({ isEQVisible = false, isButtonVisible = true}: Props) {

  return (
    <>
      <div id="player_widget">
        {isEQVisible ? <canvas id="equalizer_visualer"></canvas> : <></>}
        <audio controls id="player" src="./Zenith.mp3"></audio>

        {isButtonVisible
          ? <>
            <button id="button_previous">Previous</button>
            <button id="button_chooseRandomly">Choose Randomly</button>
            <button id="button_next">Next</button>
            <button id="button_push">Push to list</button>
            <button id="button_pop">Pop from list</button>
            <button id="button_clear">Clear list</button>
          </> : (<></>)}
      </div>
    </>
  );
}

export default Player;
