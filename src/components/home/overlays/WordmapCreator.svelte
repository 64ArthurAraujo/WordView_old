<script lang="ts">
  import {
    closeWordmapCreator,
    isWordmapCreatorOpen,
  } from "../../../stores/overlay";
  import Input from "./elements/Input.svelte";
  import ImageButton from "./elements/ImageButton.svelte";
  import AudioButton from "./elements/AudioButton.svelte";
  import PromptDialog from "../../global/elements/PromptDialog.svelte";
</script>

{#if $isWordmapCreatorOpen}
  <PromptDialog title="New Wordmap" leaveAction={closeWordmapCreator}>
    <ImageButton />

    <div class="column items-center">
      <Input id="wordmap-title" placeholder="Title" />
      <Input id="wordmap-description" placeholder="Description" class="mt-4" />
    </div>

    <svelte:fragment slot="footer">
      <AudioButton />
    </svelte:fragment>
  </PromptDialog>
{/if}
