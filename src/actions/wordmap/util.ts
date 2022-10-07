import { wordmapsFolder } from "../../util/constants";
import type { WordMap } from "../types/wordmap";

const fs = require("fs");

export function save(wordmap: WordMap) {
  fs.writeFileSync(wordmapsFolder + `${wordmap.id}.wordmap.json`, JSON.stringify(wordmap));
}

export function moveAudioToWordViewFolder(audioPath: string, wordmapId: string) {
  fs.copyFileSync(audioPath, wordmapsFolder + `audio/${wordmapId}`);
}

export function moveThumbToWordViewFolder(thumbPath: string, wordmapId: string) {
  fs.copyFileSync(thumbPath.replace("file://", ""), `${wordmapsFolder}thumb/${wordmapId}`);
}

export function thumbWasSet(thumb: string) {
  return thumb.length > 0;
}

export function wordmapOf(uuid: string) { return (wordmapsFolder + uuid + ".wordmap.json"); }
export function audioOf(uuid: string) { return (wordmapsFolder + "/audio/" + uuid); }
export function thumbOf(uuid: string) { return (wordmapsFolder + "/thumb/" + uuid); }
