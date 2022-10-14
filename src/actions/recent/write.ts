import { saveFile } from "../../util/file";
import type { WordMap } from "../wordmap";
import { recentlyPlayedWordmaps } from "./read";
import { addWordmapToFirstPlace, createRecentsFileIfDoesntExist, recentWordmapsFilePath } from "./util";

export function addWordmapToRecents(wordmap: WordMap) {
  createRecentsFileIfDoesntExist();

  let wordmaps = recentlyPlayedWordmaps();

  addWordmapToFirstPlace(wordmap, wordmaps.recent);

  saveFile(recentWordmapsFilePath, JSON.stringify(wordmaps));
}
