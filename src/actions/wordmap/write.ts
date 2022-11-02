import { randomUUID } from "crypto";
import { closeWordmapCreator } from "../../stores/overlay";
import { updateRecentWordmaps } from "../../stores/wordmap";
import { audiosFolder, thumbsFolder } from "../../util/constants";
import { createFolderIfDoesntExist, deleteFile } from "../../util/file";
import { removeWordmapFromRecents } from "../recent";
import { fetchWordmaps } from "./read";
import { allImagePointsOf, audioOf, imageFor, moveAudioToWordViewFolder, moveThumbToWordViewFolder, save, thumbOf, thumbWasSet, wordmapOf } from "./util";

export function createWordmap(audio: string, title: string, description: string, thumb?: string) {
  let wordmapId = randomUUID();

  createFolderIfDoesntExist(audiosFolder);
  moveAudioToWordViewFolder(audio, wordmapId);

  if (thumbWasSet(thumb)) {
    createFolderIfDoesntExist(thumbsFolder);
    moveThumbToWordViewFolder(thumb, wordmapId);
  }

  save({
    id: wordmapId,
    title: title,
    description: description,
    durationInMiliseconds: 0,
    thumbPath: `${thumbsFolder}/${wordmapId}` ?? "",
    audioPath: `${audiosFolder}/${wordmapId}`,
    points: [],
    lyrics: [],
  });

  closeWordmapCreator();
  fetchWordmaps();
}


export function deleteWordmap(uuid: string) {
  deleteFile(wordmapOf(uuid));
  deleteFile(audioOf(uuid));
  deleteFile(thumbOf(uuid));

  const pointsToDelete = allImagePointsOf(uuid);

  for (const point of pointsToDelete) {
    deleteFile(imageFor(point))
  }

  removeWordmapFromRecents(uuid);

  fetchWordmaps();
  updateRecentWordmaps();
}
