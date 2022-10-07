export function image(id: string) {
  return document.getElementById(id) as HTMLImageElement;
}

export function imageHasNoSource(image: HTMLImageElement) {
  return image == undefined || image.src == undefined || image.src == ""
}

