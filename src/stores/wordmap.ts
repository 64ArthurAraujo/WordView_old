import { writable } from "svelte/store";
import type { Point, WordMap } from "../types/wordmap";
import { wordmapsFolder } from "../util/constants";
const fs = require("fs");

export const wordmaps = writable([] as WordMap[]);
export const currentWordmap = writable({} as WordMap);
export const currentPoint = writable({} as Point);
export const audioPaused = writable(true);

export function clearStores() {
  currentWordmap.set({} as WordMap);
  currentPoint.set({} as Point);
  audioPaused.set(true);
}

export function setCurrentWordmap(uuid: string) {
  wordmaps.subscribe(wordmaps => {
    for (const wordmap of wordmaps) {
      if (wordmap.id === uuid) {
        currentWordmap.set(wordmap);
      }
    }
  })
}

export function saveCurrentWordmap() {
  currentWordmap.subscribe(async wordmap => {
    if (wordmap.id == undefined) return;

    await fs.writeFileSync(wordmapsFolder + `${wordmap.id}.wordmap.json`, JSON.stringify(wordmap));
  })
}

export function currentPointPosition() {
  let result = 0;

  currentWordmap.subscribe(wordmap => {
    currentPoint.subscribe(currentPoint => {
      if (wordmap.points == undefined || wordmap.points.length <= 0) return;

      for (let i = 0; i < wordmap.points.length; i++) {
        let point = wordmap.points[i];

        if (point.timelineLocation == currentPoint.timelineLocation) {
          result = i;
        }
      }
    })
  })

  return result;
}
