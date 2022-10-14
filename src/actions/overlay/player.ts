import { openPlayer } from "../../stores/overlay";
import { updateRecentWordmaps } from "../../stores/wordmap";
import { currentPoint, getCurrentWordmap, setCurrentWordmap } from "../../stores/wordmap/wordmap";
import type { Point } from "../../types/wordmap";
import { addWordmapToRecents } from "../recent";

export function openToPlay(uuid: string) {
  setCurrentWordmap(uuid);
  currentPoint.set({} as Point);

  addWordmapToRecents(getCurrentWordmap());
  updateRecentWordmaps();

  openPlayer();
}
