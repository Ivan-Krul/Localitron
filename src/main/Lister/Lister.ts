
import { LinkChopper } from "../Utils/LinkChopper";

export class ListerElement {
    public name: string;
    public path: string[];

    constructor(name: string, path: string[]) {
        this.name = name;
        this.path = path;
    }
}

export class Lister {


    private globalList: ListerElement[];



    public constructor(globalPathList: string[]) {
        this.globalList = [];

        this.generateElements(globalPathList);
    }    

    private generateElements(globalPathList: string[]) {
        for(let i = 0; i < globalPathList.length; i++) {
            let liEl = new ListerElement(LinkChopper.cropName(globalPathList[i]),LinkChopper.cropDir(globalPathList[i]));

            this.globalList.push(liEl);
        }
    }
}
