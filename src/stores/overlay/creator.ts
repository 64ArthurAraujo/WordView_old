import { writable } from "svelte/store";

export const isWordmapCreatorOpen = writable(false);

export function openWordmapCreator() {
  isWordmapCreatorOpen.set(true);
}

export function closeWordmapCreator() {
  isWordmapCreatorOpen.set(false);
}
