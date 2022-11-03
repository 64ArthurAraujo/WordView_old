import { currentLyricPoint } from "../../../../../stores/overlay";
import { currentPoint } from "../../../../../stores/wordmap/wordmap";

export type WordMapProperty =
  | "fadeIn"
  | "fadeOut"
  | "path"
  | "timelineLocation"
  | "type";

export type LyricProperty =
  "text" | "timelineLocation";

export function changePropertyFromCurrentPoint(property: WordMapProperty, newProperty: string) {
  if (!newProperty) return;

  const unsub = currentPoint.subscribe(point => {
    switch (property) {
      case "fadeIn":
        point.fadeIn = Number.parseFloat(newProperty);
        break;

      case "fadeOut":
        point.fadeOut = Number.parseFloat(newProperty);
        break;

      case "timelineLocation":
        point.timelineLocation = Number.parseFloat(newProperty);
        break;

      case "type":
        point.type = "image";
        break;
    }
  })

  unsub();

  return;
}

export function changePropertyFromCurrentLyricPoint(property: LyricProperty, newProperty: string) {
  if (!newProperty) return;

  const unsub = currentLyricPoint.subscribe(lyric => {
    switch (property) {
      case 'text':
        lyric.text = newProperty;
        break;

      case 'timelineLocation':
        lyric.timelineLocation = Number.parseFloat(newProperty);
        break;
    }
  })

  unsub();

  return;
}
