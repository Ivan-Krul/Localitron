import Player from "./Player";

interface Props {
  eqOptions?: string[];
  isButtonVisible?: boolean;
  isEQVisible?: boolean;
}

function PlayerWidget({ isButtonVisible, isEQVisible }: Props) {
  return (
    <div className="player_widget">
      <Player isButtonVisible={isButtonVisible} isEQVisible={isEQVisible}/>
    </div>
  );
}

export default PlayerWidget;