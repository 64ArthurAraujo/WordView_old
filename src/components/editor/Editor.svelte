<script lang="ts">
  import WordmapInformation from "./WordmapInformation.svelte";
  import MediaControlBar from "./MediaControlBar.svelte";
  import Sidebar from "../util/Sidebar.svelte";
  import BottomBar from "./BottomBar.svelte";
  import OverlayContainer from "../util/OverlayContainer.svelte";
  import { isEditorOpen } from "../../stores/overlay";
  import { currentWordmap } from "../../stores/overlay";
  import ProgressBar from "./elements/ProgressBar.svelte";
  import LeaveButton from "../util/LeaveButton.svelte";

  function exit() {
    isEditorOpen.set(false);
  }
</script>

{#if $isEditorOpen}
  <OverlayContainer>
    <audio
      id="editing-audio"
      src={`${$currentWordmap.audioPath}`}
      type="audio/mpeg"
    />
    <div class="h-screen w-screen bg-black-light" />

    <Sidebar>
      <LeaveButton action={exit} />
    </Sidebar>

    <Sidebar direction="right" />

    <BottomBar>
      <ProgressBar />
      <div
        class="bottom-0 h-full w-full flex items-center content-center justify-start flex-row"
      >
        <WordmapInformation />
        <MediaControlBar />
      </div>
    </BottomBar>
  </OverlayContainer>
{/if}
