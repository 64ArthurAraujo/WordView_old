import { writable } from "svelte/store";

export const isNotificationShown = writable(false);
export const notificationMessage = writable("null");

export function notify(time: number, message: string) {
  notificationMessage.set(message);
  isNotificationShown.set(true);

  setTimeout(() => {
    isNotificationShown.set(false);
  }, time)
}


export const isWordmapCreatorOpen = writable(false);
export const isPlayerOpen = writable(false);
export const isEditorOpen = writable(false);

export function openWordmapCreator() {
  isWordmapCreatorOpen.set(true);
}

export function closeWordmapCreator() {
  isWordmapCreatorOpen.set(false);
}

export function openPlayer() {
  isPlayerOpen.set(true);
}

export function closePlayer() {
  isPlayerOpen.set(false);
}

export function openEditor() {
  isEditorOpen.set(true);
}

export function closeEditor() {
  isEditorOpen.set(false);
}
