import type { LyricPoint, Point } from "../../../../types/wordmap";

export function sortBasedOnTimelineLocation(points: Point[]) {
  return points.sort((a, b) =>
      a.timelineLocation > b.timelineLocation ? -1 : 1
    );
}

export function sortLyricBasedOnTimelineLocation(points: LyricPoint[]) {
  return points.sort((a, b) =>
      a.timelineLocation > b.timelineLocation ? -1 : 1
    );
}
