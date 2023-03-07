import { writable } from "svelte/store";
import { LocaleString } from "../../localization";

export const updateVersion = writable("");
export const updateDescription = writable("");

export const updateOverlayIsOpen = writable(false);

export function openUpdateOverlay() {
  updateOverlayIsOpen.set(true);
}

export function closeUpdateOverlay() {
  updateOverlayIsOpen.set(false);
}









export const updateProgressIsOpen = writable(false);

export const updateSuccessfull = writable(false);

export const updateProgressCurrentState = writable(LocaleString("Starting update process..."));

export function openUpdateProgress() {
  updateProgressIsOpen.set(true);
}

export function closeUpdateProgress() {
  updateProgressIsOpen.set(false);
}



export function showNewVersion(version: string, description: string) {
  updateVersion.set(version);
  updateDescription.set(description);

  openUpdateOverlay();
}
