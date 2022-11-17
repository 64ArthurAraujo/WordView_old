import { setLyricPoint, setPointImageSource } from "../../../../stores/overlay";
import { currentPoint } from "../../../../stores/wordmap";
import type { LyricPoint, Point } from "../../../../types/wordmap";

export function clearImage() {
  currentPoint.set({} as Point);
  setPointImageSource("");
}

export function clearLyric() {
  setLyricPoint({} as LyricPoint);
}
