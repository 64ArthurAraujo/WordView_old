import { writable } from "svelte/store";
import { LocaleString } from "../../localization";

export const isNotificationShown = writable(false);
export const notificationMessage = writable("null");

export function notify(time: number, message: string, placeholder?: string) {
  notificationMessage.set(LocaleString(message, placeholder));
  isNotificationShown.set(true);

  setTimeout(() => {
    isNotificationShown.set(false);
  }, time)
}
