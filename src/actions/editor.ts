import { isEditorOpen } from "../stores/overlay";
import { currentPoint, setCurrentWordmap } from "../stores/wordmap";
import type { Point } from "./types/wordmap";

let audio: HTMLAudioElement;

export function openToEdit(uuid: string) {
  console.log("opening to edit");

  setCurrentWordmap(uuid);
  currentPoint.set({} as Point);
  isEditorOpen.set(true);
}
