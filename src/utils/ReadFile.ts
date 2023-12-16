import fs from "fs"

export default class ReadFile {
    filepath: string = "";

    constructor(filepath: string) {
        this.filepath = filepath;
    }

    public filecontent(): string {
        const data = fs.readFileSync(this.filepath);
        return data.toString();
    }

    //  Get the total lines of code based on the total number of line breaks
    public totalLinesOfCode(): number {
        const data: string = this.filecontent();

        // split the data based on line breaks
        const splits: string[] = data.split("\n");

        return splits.length;
    }
}
