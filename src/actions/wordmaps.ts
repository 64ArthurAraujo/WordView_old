import type { WordMap } from "./types/wordmap";
const fs = require("fs");

const dataFolder = process.env.APPDATA || (
    process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' :
    process.env.HOME + "/.local/share"
)

const wordmapsFolder = dataFolder + "/wordview/wordmaps/";

export function fetchWordmaps(): WordMap[] {
    if (!fs.existsSync(wordmapsFolder)) {
        fs.mkdirSync(wordmapsFolder, { recursive: true });
    }

    const files = fs.readdirSync(wordmapsFolder) as string[];

    if (files.length === 0) 
        return new Array<WordMap>();
    
    const wordmaps = parseWordmaps(files); 

    return wordmaps;
}



function parseWordmaps(files: string[]): WordMap[] {
    console.log("parsing wordmaps...")

    const wordmapsFiles = wordmapsInFiles(files);

    if (wordmapsFiles.length === 0) 
        return new Array<WordMap>();

    return processWordmaps(wordmapsFiles) as WordMap[];
}

function processWordmaps(files: string[]) {
    let wordmaps = [];

    files.forEach(file => {
        let wordmap = fs.readFileSync(wordmapsFolder + file, 'utf8');

        wordmaps.push(JSON.parse(wordmap) as WordMap);
    });

    return wordmaps;
}

function wordmapsInFiles(files: string[]) {
    const wordmaps = [];

    files.forEach(file => {
        if (file.endsWith(".wordmap.json")) {
            wordmaps.push(file);
        }
    });

    return wordmaps;
}

