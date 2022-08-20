import { randomUUID } from "crypto";
import { wordmapsFolder } from "../util/constants";
import { isWordmapCreatorOpen } from "../stores/overlay";
import { wordmaps } from "../stores/overlay";
import type { WordMap } from "./types/wordmap";

const fs = require("fs");


export function fetchWordmaps() {
    if (!fs.existsSync(wordmapsFolder)) {
        fs.mkdirSync(wordmapsFolder, { recursive: true });
    }

    const files = fs.readdirSync(wordmapsFolder) as string[];

    if (files.length === 0)
        return new Array<WordMap>();

    const wordMaps = parseWordmaps(files);

    wordmaps.set(wordMaps);
}



function parseWordmaps(files: string[]): WordMap[] {
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

// Wordmap Creation //

export function createWordmap(audioPath: string, title: string, description: string) {
    let wordmapId = randomUUID();

    if (!fs.existsSync(wordmapsFolder + "/audio")) {
        fs.mkdirSync(wordmapsFolder + "/audio", { recursive: true });
    }

    fs.copyFileSync(audioPath, wordmapsFolder + `audio/${wordmapId}`);

    const wordmap: WordMap = {
        id: wordmapId,
        title: title,
        description: description,
        durationInMiliseconds: 0,
        thumb: "",
        audioPath: `${wordmapsFolder}audio/${wordmapId}`,
        points: []
    }

    fs.writeFileSync(wordmapsFolder + `${wordmapId}.wordmap.json`, JSON.stringify(wordmap));
    isWordmapCreatorOpen.set(false);

    fetchWordmaps();
}
