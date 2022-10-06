<script lang="ts">
  import { isWordmapCreatorOpen } from "../../stores/overlay";
  import { scale } from "svelte/transition";
  import OverlayContainer from "../util/OverlayContainer.svelte";
  import Input from "./creator/Input.svelte";
  import ImageButton from "./creator/ImageButton.svelte";
  import AudioButton from "./creator/AudioButton.svelte";
  import LeaveButton from "../util/LeaveButton.svelte";

  function close() {
    isWordmapCreatorOpen.set(false);
  }
</script>

{#if $isWordmapCreatorOpen}
  <OverlayContainer>
    <div
      transition:scale={{ duration: 500 }}
      class="z-30 h-2/4 w-2/4 bg-black-lighter rounded-md relative"
    >
      <div class="flex w-full h-fit top-4 items-center justify-center">
        <LeaveButton action={close} />

        <h2 class="flex text-white-regular mt-4">New Wordmap</h2>
      </div>

      <div
        class="flex flex-row items-center content-center justify-center w-full mt-8"
      >
        <ImageButton />

        <div class="flex flex-col items-center">
          <Input id="wordmap-title" placeholder="Title" />
          <Input
            id="wordmap-description"
            placeholder="Description"
            class="mt-4"
          />
        </div>
      </div>

      <div class="flex mt-8 flex-col items-center">
        <AudioButton />
      </div>
    </div>
  </OverlayContainer>
{/if}
