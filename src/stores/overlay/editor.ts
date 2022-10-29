import { writable } from "svelte/store";
import type { LyricPoint } from "../../types/wordmap";
import { isArrayEmpty, isUndefined } from "../../util/ts";
import { audio } from "../../util/web";
import { audioPaused, currentWordmap } from "../wordmap";

export const isEditorOpen = writable(false);

export function openEditor() {
  isEditorOpen.set(true);
}
export function closeEditor() {
  isEditorOpen.set(false);
}

export function clearEditorStores() {
  setPointImageSource("");
  setLyricPoint({} as LyricPoint);
}

export const currentPointImageSource = writable("");

export function setPointImageSource(source: string) {
  currentPointImageSource.set(source);
}

export const currentLyricPoint = writable({} as LyricPoint);

export function setLyricPoint(point: LyricPoint) {
  currentLyricPoint.set(point);
}

export function currentLyricPosition() {
  let result;

  let unsubPoint = currentLyricPoint.subscribe(lyricPoint => {
    let unsubWordmap = currentWordmap.subscribe(wordmap => {
      if (isUndefined(wordmap.lyrics) || isArrayEmpty(wordmap.lyrics)) return;

      for (let i = 0; i < wordmap.lyrics.length; i++) {
        let point = wordmap.lyrics[i];

        if (point.timelineLocation == lyricPoint.timelineLocation) {
          result = i;
        }
      }
    })

    unsubWordmap();
  })

  unsubPoint();

  return result;
}

export function play() {
  audio("editing-audio").play();
  audioPaused.set(false);
}

export function pause() {
  audio("editing-audio").pause();
  audioPaused.set(true);
}
