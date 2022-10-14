import { readFile } from "../../util/file";
import type { WordMap } from "../wordmap";
import { createRecentsFileIfDoesntExist, recentWordmapsFilePath } from "./util";

export interface RecentWordmaps {
  recent: WordMap[];
}

export function recentlyPlayedWordmaps() {
  createRecentsFileIfDoesntExist();

  let recentWordmaps = readFile(recentWordmapsFilePath);
  return JSON.parse(recentWordmaps) as RecentWordmaps;
}
