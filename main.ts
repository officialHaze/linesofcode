import ReadFile from "./src/utils/ReadFile"; 


class LinesOfCode
{
    public static main():void {
        const filepath = "C:/PARTITION-DEV/reactfileconverter/src/App.tsx";
        
        const read = new ReadFile(filepath);

        const totalLinesOfCode = read.totalLinesOfCode();

        console.log("Total lines of code: ", totalLinesOfCode);
    }
}

LinesOfCode.main();
