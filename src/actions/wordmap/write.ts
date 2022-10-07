import { randomUUID } from "crypto";
import { closeWordmapCreator } from "../../stores/overlay";
import { wordmapsFolder } from "../../util/constants";
import { createFolderIfDoesntExist, deleteFile } from "../../util/file";
import { fetchWordmaps } from "./read";
import { audioOf, moveAudioToWordViewFolder, moveThumbToWordViewFolder, save, thumbOf, thumbWasSet, wordmapOf } from "./util";

export function createWordmap(audio: string, title: string, description: string, thumb?: string) {
  let wordmapId = randomUUID();

  createFolderIfDoesntExist(wordmapsFolder + "/audio");
  moveAudioToWordViewFolder(audio, wordmapId);

  if (thumbWasSet(thumb)) {
    createFolderIfDoesntExist(wordmapsFolder + "/thumb");
    moveThumbToWordViewFolder(thumb, wordmapId);
  }

  save({
    id: wordmapId,
    title: title,
    description: description,
    durationInMiliseconds: 0,
    thumbPath: `${wordmapsFolder}thumb/${wordmapId}` ?? "",
    audioPath: `${wordmapsFolder}audio/${wordmapId}`,
    points: []
  });

  closeWordmapCreator();
  fetchWordmaps();
}


export function deleteWordmap(uuid: string) {
  deleteFile(wordmapOf(uuid));
  deleteFile(audioOf(uuid));
  deleteFile(thumbOf(uuid));

  fetchWordmaps();
}
