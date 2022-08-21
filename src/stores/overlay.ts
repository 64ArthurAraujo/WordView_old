import { writable } from "svelte/store";
import type { WordMap } from "../actions/types/wordmap";


export const wordmaps = writable([] as WordMap[]);

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
export const editingId = writable("null");

