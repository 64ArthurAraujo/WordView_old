import { writable } from "svelte/store";

export const isPlayerOpen = writable(false);

export function openPlayer() {
  isPlayerOpen.set(true);
}

export function closePlayer() {
  isPlayerOpen.set(false);
}
