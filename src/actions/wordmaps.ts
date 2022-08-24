import { randomUUID } from "crypto";
import { wordmapsFolder } from "../util/constants";
import { isWordmapCreatorOpen } from "../stores/overlay";
import { wordmaps } from "../stores/overlay";
import type { WordMap } from "./types/wordmap";
import { fileExists } from "../util/file";

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

export function createWordmap(audioPath: string, title: string, description: string, thumbPath?: string) {
    let wordmapId = randomUUID();

    if (!fs.existsSync(wordmapsFolder + "/audio")) {
        fs.mkdirSync(wordmapsFolder + "/audio", { recursive: true });
    }

    fs.copyFileSync(audioPath, wordmapsFolder + `audio/${wordmapId}`);

    console.log(thumbPath);
    console.log(thumbPath.length);

    if (thumbPath.length > 0) {
        if (!fs.existsSync(wordmapsFolder + "/thumb")) {
            fs.mkdirSync(wordmapsFolder + "/thumb", { recursive: true });
        }

        fs.copyFileSync(thumbPath.replace("file://", ""), `${wordmapsFolder}thumb/${wordmapId}`);
    }

    const wordmap: WordMap = {
        id: wordmapId,
        title: title,
        description: description,
        durationInMiliseconds: 0,
        thumbPath: `${wordmapsFolder}thumb/${wordmapId}` ?? "",
        audioPath: `${wordmapsFolder}audio/${wordmapId}`,
        points: []
    }

    fs.writeFileSync(wordmapsFolder + `${wordmapId}.wordmap.json`, JSON.stringify(wordmap));
    isWordmapCreatorOpen.set(false);

    fetchWordmaps();
}


export function deleteWordmap(uuid: string) {
    const filesToDelete = [
        wordmapsFolder + uuid + ".wordmap.json",
        wordmapsFolder + "/audio/" + uuid,
        wordmapsFolder + "/thumb/" + uuid
    ]

    for (const file of filesToDelete) {
        try {
            fs.unlinkSync(file);
        } catch (err) { }
    }
}
