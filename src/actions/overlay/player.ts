import { openPlayer } from "../../stores/overlay";
import { currentPoint, setCurrentWordmap } from "../../stores/wordmap";
import type { Point } from "../../types/wordmap";

export function openToPlay(uuid: string) {
  setCurrentWordmap(uuid);
  currentPoint.set({} as Point);
  openPlayer();
}
