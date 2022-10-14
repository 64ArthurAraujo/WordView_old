import { wordviewFolder } from "../../util/constants";
import { createFileIfDoesntExist } from "../../util/file";
import type { WordMap } from "../wordmap";

export const recentWordmapsFilePath = `${wordviewFolder}/recent-wordmaps.json`;

export function createRecentsFileIfDoesntExist() {
  createFileIfDoesntExist(recentWordmapsFilePath, '{"recent": []}');
}

export function addWordmapToFirstPlace(wordmap: WordMap, array: WordMap[]) {
  const el = array.find(wordmapInArray);

  console.log(el);

  if (el == undefined) {
    array.unshift(wordmap);
    return;
  } else {
    array.splice(array.indexOf(wordmap), 1);
    array.unshift(wordmap);
    return;
  }

  function wordmapInArray(arrayElement: WordMap) {
    return arrayElement.id == wordmap.id;
  }
}


