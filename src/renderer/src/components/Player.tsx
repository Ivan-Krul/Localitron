
interface Props {
    buttonVisibility?: boolean;
    onPlay?: (path: string) => boolean;
}

function Player({}) {

    return (
    <>
        <div id="player_container" className="player_container">
            <audio controls id="player"></audio>

            <button id="button_previous">Previous</button>
            <button id="button_chooseRandomly">Choose Randomly</button>
            <button id="button_next">Next</button>
            <button id="button_push">Push to list</button>
            <button id="button_pop">Pop from list</button>
            <button id="button_clear">Clear list</button>
            <button id="button_downloadPlaylist">Download playlist (valid in directory with
                content.txt)</button>
            <select id="select_eqRenderStage">
                <option value="full">Full res EQ</option>
                <option value="half">Half res EQ</option>
                <option value="fifth">Fifth res EQ</option>
                <option value="average x5">Average x5 res EQ</option>
                <option value="average 4">Average 4 res EQ</option>
                <option value="only 3">Only 3 res EQ</option>
                <option value="no">Without EQ</option>
            </select>
        </div>
    </>
    );
}

export default Player;
