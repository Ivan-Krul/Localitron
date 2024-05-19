
import { LinkChopper } from "../Utils/LinkChopper";

export class Directory {
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export class Music {
    public readonly name: string;
    public readonly folderTrace: Directory[];

    public readonly path: string;

    constructor(path: string, folderTrace: Directory[]) {
        this.path = path;
        this.name = LinkChopper.cropName(path);
        this.folderTrace = folderTrace;
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
            let folders: Directory[] = [];

            for(let f = 0; f < musicFolders.length; f++) {
                folders.push(new Directory(musicFolders[f]));
            }

            this.musicList.push(new Music(musicPath, folders));
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
