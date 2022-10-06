import { writable } from "svelte/store";
import type { Point, WordMap } from "../actions/types/wordmap";
import { wordmapsFolder } from "../util/constants";
const fs = require("fs");

export const wordmaps = writable([] as WordMap[]);

export const currentWordmap = writable({} as WordMap);

export const currentPoint = writable({} as Point);

export const audioPaused = writable(true);

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
    await fs.writeFileSync(wordmapsFolder + `${wordmap.id}.wordmap.json`, JSON.stringify(wordmap));
  })
}
