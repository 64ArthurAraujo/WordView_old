import { isEditorOpen, setCurrentWordmap } from "../stores/overlay";

export function openToEdit(uuid: string) {
    setCurrentWordmap(uuid);
    isEditorOpen.set(true);
}
