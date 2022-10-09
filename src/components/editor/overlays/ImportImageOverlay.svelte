<script lang="ts">
  import Input from "../../home/overlays/elements/Input.svelte";
  import InsertImageImportButton from "./elements/InsertImageImportButton.svelte";
  import ImageButton from "../../home/overlays/elements/ImageButton.svelte";
  import PromptDialog from "../../global/elements/PromptDialog.svelte";

  export let showingImportImage: boolean;
  export let currentAudioTime: number;

  export let hideImportImage: Function;
</script>

{#if showingImportImage}
  <PromptDialog title="New Image Point" leaveAction={hideImportImage}>
    <ImageButton />
    <div>
      <h2 class="text-white-regular mb-2">Location</h2>
      <Input
        type="text"
        placeholder="Location..."
        id="location"
        value={currentAudioTime.toString()}
      />
    </div>

    <svelte:fragment slot="footer">
      <InsertImageImportButton {hideImportImage} />
    </svelte:fragment>
  </PromptDialog>
{/if}
