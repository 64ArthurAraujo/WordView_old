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
