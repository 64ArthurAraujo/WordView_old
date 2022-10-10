import { writable } from "svelte/store";

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
