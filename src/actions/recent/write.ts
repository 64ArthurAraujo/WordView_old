import { saveFile } from "../../util/file";
import type { WordMap } from "../wordmap";
import { recentlyPlayedWordmaps } from "./read";
import { addWordmapToFirstPlace, createRecentsFileIfDoesntExist, recentWordmapsFilePath } from "./util";

export function addWordmapToRecents(wordmap: WordMap) {
  createRecentsFileIfDoesntExist();

  let wordmaps = recentlyPlayedWordmaps();

  addWordmapToFirstPlace(wordmap, wordmaps.recent);

  if (wordmaps.recent.length >= 3) {
    wordmaps.recent.splice(2, 5);
  }

  saveFile(recentWordmapsFilePath, JSON.stringify(wordmaps));
}

export function removeWordmapFromRecents(uuid: string) {
  createRecentsFileIfDoesntExist();

  let wordmaps = recentlyPlayedWordmaps();

  if (wordmaps.recent.length <= 0) return;

  for (let i = 0; i < wordmaps.recent.length; i++) {
    let wordmap = wordmaps.recent[i];

    if (wordmap.id == uuid) {
      wordmaps.recent.splice(i, 1);
    }
  }

  saveFile(recentWordmapsFilePath, JSON.stringify(wordmaps));
}
