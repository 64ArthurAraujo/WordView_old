import { saveFile } from "../../util/file";
import type { WordMap } from "../wordmap";
import { recentlyPlayedWordmaps } from "./read";
import { createRecentsFileIfDoesntExist, recentWordmapsFilePath } from "./util";

export function addWordmapToRecents(wordmap: WordMap) {
  createRecentsFileIfDoesntExist();

  let wordmaps = recentlyPlayedWordmaps();

  wordmaps.recent.unshift(wordmap);

  saveFile(recentWordmapsFilePath, JSON.stringify(wordmaps));
}
