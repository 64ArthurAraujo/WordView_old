<script lang="ts">
  import {
    closeWordmapCreator,
    isWordmapCreatorOpen,
  } from "../../../stores/overlay";
  import Input from "./elements/Input.svelte";
  import ImageButton from "./elements/ImageButton.svelte";
  import AudioButton from "./elements/AudioButton.svelte";
  import PromptDialog from "../../global/elements/PromptDialog.svelte";
  import CreateButton from "./elements/CreateButton.svelte";
  import ImportWordmapButton from "./elements/ImportWordmapButton.svelte";
  import { LocaleString } from "../../../localization";
</script>

{#if $isWordmapCreatorOpen}
  <PromptDialog title={LocaleString("New Song")} leaveAction={closeWordmapCreator}>
    <ImageButton />

    <div class="column items-center max-w-min">
      <Input id="wordmap-title" placeholder={LocaleString("Title")} maxlength={30} />
      <Input
        id="wordmap-description"
        placeholder={LocaleString("Description")}
        maxlength={45}
        class="mt-4"
      />
      <AudioButton />
    </div>

    <svelte:fragment slot="footer">
      <ImportWordmapButton />
      <CreateButton />
    </svelte:fragment>
  </PromptDialog>
{/if}
