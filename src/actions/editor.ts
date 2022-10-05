import { isEditorOpen } from "../stores/overlay";
import { setCurrentWordmap } from "../stores/wordmap";

export function openToEdit(uuid: string) {
  setCurrentWordmap(uuid);
  isEditorOpen.set(true);
}
