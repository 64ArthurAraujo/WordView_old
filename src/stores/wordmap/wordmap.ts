import { writable } from "svelte/store";
import type { Point, WordMap } from "../../types/wordmap";
import { wordmapsFolder } from "../../util/constants";
import { clearEditorStores } from "../overlay";
const fs = require("fs");

export const wordmaps = writable([] as WordMap[]);
export const currentWordmap = writable({} as WordMap);
export const currentPoint = writable({} as Point);
export const audioPaused = writable(true);

export function clearStores() {
  currentWordmap.set({} as WordMap);
  currentPoint.set({} as Point);
  audioPaused.set(true);
  clearEditorStores();
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

export function getCurrentWordmap() {
  let result: WordMap;

  currentWordmap.subscribe(wordmap => {
    result = wordmap;
  });

  return result;
}

export function saveCurrentWordmap() {
  currentWordmap.subscribe(async wordmap => {
    if (wordmap.id == undefined) return;

    await fs.writeFileSync(`${wordmapsFolder}/${wordmap.id}.wordmap.json`, JSON.stringify(wordmap));
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

export function isThereAImageAt(location: number) {
  let result = false;

  let unsub = currentWordmap.subscribe(wordmap => {
    for (const point of wordmap.points) {
      if (point.timelineLocation == location) {
        result = true;
      }
    }
  })

  unsub();

  return result;
}

export function isThereLyricsAt(location: number) {
  let result = false;

  let unsub = currentWordmap.subscribe(wordmap => {
    for (const lyric of wordmap.lyrics) {
      if (lyric.timelineLocation == location) {
        result = true;
      }
    }
  })
  
  unsub();

  return result;
}
