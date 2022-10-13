import { wordmaps } from "../../stores/wordmap";
import { wordmapsFolder } from "../../util/constants";
import { createFolderIfDoesntExist, filesOf, isEmpty, noFilesIn, readFile } from "../../util/file";
import type { WordMap } from "../../types/wordmap";

export function fetchWordmaps() {
  createFolderIfDoesntExist(wordmapsFolder);

  if (noFilesIn(wordmapsFolder))
    return [] as WordMap[];

  const files = filesOf(wordmapsFolder);

  const wordMaps = readWordmaps(files);

  wordmaps.set(wordMaps);
}

function readWordmaps(files: string[]) {
  const wordmapsFiles = filterWordmapsFrom(files);

  if (isEmpty(wordmapsFiles))
    return [] as WordMap[];

  return processWordmaps(wordmapsFiles);
}

function processWordmaps(files: string[]) {
  let wordmaps = [];

  for (const file of files) {
    let wordmap = readFile(wordmapsFolder + file);
    wordmaps.push(JSON.parse(wordmap) as WordMap);
  }

  return wordmaps as WordMap[];
}

function filterWordmapsFrom(files: string[]) {
  const wordmaps = [];

  for (const file of files) {
    if (file.endsWith(".wordmap.json")) {
      wordmaps.push(file);
    }
  }

  return wordmaps;
}
