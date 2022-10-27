import { writable } from "svelte/store";
import { audio } from "../../util/web";
import { audioPaused } from "../wordmap";

export const isEditorOpen = writable(false);

export function openEditor() {
  isEditorOpen.set(true);
}
export function closeEditor() {
  isEditorOpen.set(false);
}

export const currentPointImageSource = writable("");

export function setPointImageSource(source: string) {
  currentPointImageSource.set(source);
}

export function play() {
  audio("editing-audio").play();
  audioPaused.set(false);
}

export function pause() {
  audio("editing-audio").pause();
  audioPaused.set(true);
}
