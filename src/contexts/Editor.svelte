<script lang="ts">
  import Sidebar from "../components/Sidebar.svelte";
  import BottomBar from "../components/editor/BottomBar.svelte";
  import OverlayContainer from "../components/OverlayContainer.svelte";
  import { isEditorOpen } from "../stores/overlay";
  import { ArrowLeftIcon, Volume2Icon } from "svelte-feather-icons";
  import { currentWordmap } from "../stores/overlay";
  import PauseButton from "../components/editor/PauseButton.svelte";
  import ProgressBar from "../components/editor/ProgressBar.svelte";
  import SkipBackButton from "../components/editor/SkipBackButton.svelte";
  import SkipForwardButton from "../components/editor/SkipForwardButton.svelte";
  import { fileExists } from "../util/file";
  import VolumeBar from "../components/editor/VolumeBar.svelte";

  let fileDoExist;

  if ($currentWordmap.thumbPath != "") {
    fileDoExist = fileExists($currentWordmap.thumbPath);
  } else fileDoExist = false;
</script>

<OverlayContainer>
  <audio
    id="editing-audio"
    src={`${$currentWordmap.audioPath}`}
    type="audio/mpeg"
  />
  <div class="h-screen w-screen bg-black-light" />

  <Sidebar>
    <div
      on:click={() => isEditorOpen.set(false)}
      class="absolute top-4 left-4 border-2 bg-black-light hover:bg-accent-regular transition-colors rounded-full px-2 py-2 hover:cursor-pointer"
    >
      <ArrowLeftIcon size="14" class="invert" />
    </div>
  </Sidebar>

  <Sidebar direction="right" />

  <BottomBar>
    <ProgressBar />

    <div
      class="bottom-0 h-full w-full flex items-center content-center justify-start flex-row"
    >
      <div
        class=" h-20 w-20 border-2 bg-black-light mx-3 rounded overflow-hidden"
      >
        {#if fileDoExist}
          <!-- svelte-ignore a11y-missing-attribute -->
          <img
            src={$currentWordmap.thumbPath}
            class="h-full w-full select-none"
          />
        {/if}
      </div>

      <div class="h-20 items-center content-center justify-start flex-col">
        <h3 class="text-white-regular select-none">
          <b>{$currentWordmap.title}</b>
        </h3>

        <p class="text-white-darker select-none">
          {$currentWordmap.description}
        </p>
      </div>

      <div
        class="h-full w-full fixed flex items-center content-center justify-center flex-row"
      >
        <SkipBackButton />
        <PauseButton />
        <SkipForwardButton />
      </div>

      <div
        class="h-full w-1/6 fixed flex items-center content-center right-0 justify-center flex-row mr-4"
      >
        <Volume2Icon size="20" class="invert mr-4" />
        <VolumeBar />
      </div>
    </div>
  </BottomBar>
</OverlayContainer>
