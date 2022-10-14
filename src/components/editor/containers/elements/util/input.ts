import { currentPoint } from "../../../../../stores/wordmap/wordmap";

export type WordMapProperty =
  | "fadeIn"
  | "fadeOut"
  | "path"
  | "timelineLocation"
  | "type";


export function changePropertyFromCurrentPoint(property: WordMapProperty, newProperty: string) {
  if (!newProperty) return;

  currentPoint.subscribe(point => {
    switch (property) {
      case "fadeIn":
        point.fadeIn = Number.parseFloat(newProperty);
        break;

      case "fadeOut":
        point.fadeOut = Number.parseFloat(newProperty);
        break;

      case "path":
        point.path = newProperty;
        break;

      case "timelineLocation":
        point.timelineLocation = Number.parseFloat(newProperty);
        break;

      case "type":
        point.type = "image";
        break;
    }
  })
}
