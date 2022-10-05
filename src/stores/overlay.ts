import { writable } from "svelte/store";

export const isWordmapCreatorOpen = writable(false);
export const isNotificationShown = writable(false);
export const notificationMessage = writable("null");

export function showNotification(time: number, message: string) {
  notificationMessage.set(message);
  isNotificationShown.set(true);

  setTimeout(() => {
    isNotificationShown.set(false);
  }, time)
}


export const isEditorOpen = writable(false);


