import { audiosFolder, imagesFolder, thumbsFolder, wordmapsFolder } from "../../util/constants";
import type { WordMap } from "../../types/wordmap";
import { currentWordmap, wordmaps } from "../../stores/wordmap";

const fs = require("fs");

export function save(wordmap: WordMap) {
  fs.writeFileSync(`${wordmapsFolder}/${wordmap.id}.wordmap.json`, JSON.stringify(wordmap));
}

export function moveAudioToWordViewFolder(audioPath: string, wordmapId: string) {
  fs.copyFileSync(audioPath, `${audiosFolder}/${wordmapId}`);
}

export function moveThumbToWordViewFolder(thumbPath: string, wordmapId: string) {
  fs.copyFileSync(thumbPath.replace("file://", ""), `${thumbsFolder}/${wordmapId}`);
}

export function thumbWasSet(thumb: string) {
  return thumb.length > 0;
}

export function allImagePointsOf(uuid: string) {
  let result: string[] = [];

  let unsub = wordmaps.subscribe(wordmaps => {
    for (const wordmap of wordmaps) {
      if (wordmap.id == uuid) {
        for (const point of wordmap.points) {
          result.push(point.uuid);
        }
      }
    }
  })

  unsub();

  return result;
}

export function wordmapOf(uuid: string) { return (`${wordmapsFolder}/${uuid}.wordmap.json`); }
export function audioOf(uuid: string) { return (`${audiosFolder}/${uuid}`); }
export function thumbOf(uuid: string) { return (`${thumbsFolder}/${uuid}`); }
export function imageFor(uuid: string) { return (`${imagesFolder}/${uuid}`); }
