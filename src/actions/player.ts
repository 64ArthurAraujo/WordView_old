import { isPlayerOpen } from "../stores/overlay";
import { currentPoint, setCurrentWordmap } from "../stores/wordmap";
import type { Point } from "./types/wordmap";

let audio: HTMLAudioElement;

export function openToPlay(uuid: string) {
  setCurrentWordmap(uuid);
  currentPoint.set({} as Point);
  isPlayerOpen.set(true);
}
