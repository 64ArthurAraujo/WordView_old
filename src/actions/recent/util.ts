import { path, wordviewFolder } from "../../util/constants";
import { createFileIfDoesntExist } from "../../util/file";
import type { WordMap } from "../wordmap";

export const recentWordmapsFilePath = path(`${wordviewFolder}/recent-wordmaps.json`);

export function createRecentsFileIfDoesntExist() {
  createFileIfDoesntExist(recentWordmapsFilePath, '{"recent": []}');
}

export function addWordmapToFirstPlace(wordmap: WordMap, array: WordMap[]) {
  const el = array.find(wordmapInArray);

  if (el == undefined) {
    array.unshift(wordmap);
    return;
  } else {
    if (array.indexOf(el) == 0) {
      return;
    }

    array.splice(array.indexOf(el), 1);
    array.unshift(wordmap);
    return;
  }

  function wordmapInArray(arrayElement: WordMap) {
    return arrayElement.id == wordmap.id;
  }
}


