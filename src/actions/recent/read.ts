import { readFile } from "../../util/file";
import type { RecentWordmaps } from "./types";
import { createRecentsFileIfDoesntExist, recentWordmapsFilePath } from "./util";

export function recentlyPlayedWordmaps() {
  createRecentsFileIfDoesntExist();

  let recentWordmaps = readFile(recentWordmapsFilePath);
  return JSON.parse(recentWordmaps) as RecentWordmaps;
}
