<script lang="ts">
  import Input from "../../home/overlays/elements/Input.svelte";
  import CreateDoodleButton from "./elements/CreateDoodleButton.svelte";
  import DoodleCanvas from "./elements/DoodleCanvas.svelte";
  import PromptDialog from "../../global/elements/PromptDialog.svelte";

  export let showingCreateDoodle: boolean;
  export let currentAudioTime: number;

  export let hideCreateDoodle: Function;
</script>

{#if showingCreateDoodle}
  <PromptDialog title="New Doodle" leaveAction={hideCreateDoodle}>
    <DoodleCanvas />
    <h2 class="text-white-regular mb-2">Location</h2>
    <Input
      type="text"
      placeholder="Location..."
      id="location"
      value={currentAudioTime.toString()}
    />

    <svelte:fragment slot="footer">
      <CreateDoodleButton {hideCreateDoodle} />
    </svelte:fragment>
  </PromptDialog>
{/if}
