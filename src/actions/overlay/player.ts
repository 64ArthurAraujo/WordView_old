import { openPlayer } from "../../stores/overlay";
import { currentPoint, getCurrentWordmap, setCurrentWordmap } from "../../stores/wordmap";
import type { Point } from "../../types/wordmap";
import { addWordmapToRecents } from "../recent";

export function openToPlay(uuid: string) {
  setCurrentWordmap(uuid);
  currentPoint.set({} as Point);

  addWordmapToRecents(getCurrentWordmap());

  openPlayer();
}
