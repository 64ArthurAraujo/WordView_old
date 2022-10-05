import { writable } from "svelte/store";
import type { WordMap } from "../actions/types/wordmap";

export const wordmaps = writable([] as WordMap[]);

export const currentWordmap = writable({} as WordMap);

export function setCurrentWordmap(uuid: string) {
  wordmaps.subscribe(wordmaps => {
    for (const wordmap of wordmaps) {
      if (wordmap.id === uuid) {
        currentWordmap.set(wordmap);
      }
    }
  })
}
