
class Lister {
    private globalList: string[];
    private folders: string[];



    public constructor(globalList: string[]) {
        this.globalList = globalList;
        this.folders = [];

        this.unfoldToFolders();
    }    

    private unfoldToFolders() {
        for(let i = 0; i < this.globalList.length; i++) {
            let found = this.folders.findIndex((arg: string) => { return arg === this.globalList[i]; });

            if(found === -1) {
                this.folders.push()
            }

        }

    }
}
