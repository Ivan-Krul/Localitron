
import { LinkChopper } from "../Utils/LinkChopper";

export class Folder {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export class Music {
    public name: string;
    public path: Folder[];

    constructor(name: string, path: Folder[]) {
        this.name = name;
        this.path = path;
    }
}

export class Lister {
    private origin: string;
    private musicList: Music[];

    public constructor(origin: string, globalList: string[]) {
        this.origin = origin;
        this.musicList = [];

        this.setNewOrigin(origin, globalList);
    }

    public setNewOrigin(origin: string, globalList: string[]) {
        this.origin = origin;
        this.musicList = [];

        for(let i = 0; i < globalList.length; i++) {
            const musicPath = globalList[i];
            
            const musicFolders = LinkChopper.cropDir(musicPath);
            let folders: Folder[] = [];

            for(let f = 0; f < musicFolders.length; f++) {
                folders.push(new Folder(musicFolders[f]));
            }

            this.musicList.push(new Music(LinkChopper.cropName(musicPath), folders));
        }
    }

    public getMusicLength(){
        return this.musicList.length;
    }

    public getMusic(index: number) {
        return this.musicList[index];
    }

    public getOrigin() {
        return this.origin;
    }
}
