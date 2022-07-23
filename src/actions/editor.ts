import { isEditorOpen, editingId } from "../stores/overlay";

export function openToEdit(wordmapId: string) {
    editingId.set(wordmapId);
    isEditorOpen.set(true);
}
