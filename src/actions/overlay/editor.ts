import { openEditor } from "../../stores/overlay";
import { currentPoint, setCurrentWordmap } from "../../stores/wordmap";
import type { Point } from "../../types/wordmap";

export function openToEdit(uuid: string) {
  setCurrentWordmap(uuid);
  currentPoint.set({} as Point);
  openEditor();
}
