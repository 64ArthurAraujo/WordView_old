import { setPointImageSource } from "../../../../stores/overlay";
import { currentPoint } from "../../../../stores/wordmap";
import type { Point } from "../../../../types/wordmap";
import { imagesFolder } from "../../../../util/constants";

export function setPoint(point: Point) {
  setPointImageSource(`${imagesFolder}/${point.uuid}`);
  currentPoint.set(point);
}
