import { element } from "./util";

export function image(id: string) {
  return element(id) as HTMLImageElement;
}

export function imageHasNoSource(image: HTMLImageElement) {
  return image == undefined || image.src == undefined || image.src == ""
}

