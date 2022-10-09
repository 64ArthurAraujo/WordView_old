<script lang="ts">
  import OverlayContainer from "../../global/overlay/OverlayContainer.svelte";
  import LeaveButton from "../../global/buttons/LeaveButton.svelte";
  import { scale } from "svelte/transition";
  import Input from "../../home/overlays/elements/Input.svelte";
  import InsertImageImportButton from "./elements/InsertImageImportButton.svelte";
  import ImageButton from "../../home/overlays/elements/ImageButton.svelte";

  export let showingImportImage: boolean;
  export let currentAudioTime: number;

  export let hideImportImage: Function;
</script>

{#if showingImportImage}
  <OverlayContainer class="z-50">
    <div
      transition:scale={{ duration: 500 }}
      class="h-2/5 w-2/5 bg-black-lightest rounded-md absolute"
    >
      <div class="flex w-full h-fit top-4 items-center justify-center">
        <LeaveButton action={hideImportImage} />

        <h2 class="flex text-white-regular mt-4">New Image Point</h2>
      </div>

      <div
        class="flex flex-column items-center content-center justify-center w-full mt-8"
      >
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
      </div>

      <div class="flex w-full h-fit bottom-2 items-center justify-center mt-4">
        <InsertImageImportButton {hideImportImage} />
      </div>
    </div>
  </OverlayContainer>
{/if}
