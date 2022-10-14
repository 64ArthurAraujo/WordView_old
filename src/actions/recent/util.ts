import { wordviewFolder } from "../../util/constants";
import { createFileIfDoesntExist } from "../../util/file";

export const recentWordmapsFilePath = `${wordviewFolder}/recent-wordmaps.json`;

export function createRecentsFileIfDoesntExist() {
  createFileIfDoesntExist(recentWordmapsFilePath, '{"recent": []}');
}
