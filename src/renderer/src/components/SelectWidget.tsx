import './Folder';
import * as Lister from "../../../main/Lister/Lister.ts";

interface Props {
  targetDir: string;
  selectList?: Lister.Music[];
}

function SelectWidget({ targetDir, selectList = [] }: Props) {
  const rows: JSX.Element[] = [];

  selectList.forEach((music) => {
    const folders: JSX.Element[] = [];
    music.folderTrace.forEach((dir: Lister.Directory) => {
      folders.push(<Folder>{dir}</Folder>);
    });
  rows.push(<tr>{folders} {music.name}</tr>);
});

return (<div id={"select_widget"}>
  <div><span style={{ position: 'absolute', left: '0%' }}>Target: "{targetDir}"</span><span style={{ position: 'absolute', right: '0%' }}>Count: {selectList.length}</span></div>
  <table>
    {rows}
  </table>
</div>);
}

export default SelectWidget;