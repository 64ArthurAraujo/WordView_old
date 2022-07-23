import { writable } from "svelte/store";


export const isWordmapCreatorOpen = writable(false);

export const isEditorOpen         = writable(false);
export const editingId            = writable("null");
