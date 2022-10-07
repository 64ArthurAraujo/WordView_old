<script lang="ts">
  import WordmapInformation from "./WordmapInformation.svelte";
  import MediaControlBar from "./MediaControlBar.svelte";
  import BottomBar from "./BottomBar.svelte";
  import { closePlayer, isPlayerOpen, notify } from "../../stores/overlay";
  import { clearStores, currentWordmap } from "../../stores/wordmap";
  import ProgressBar from "./elements/ProgressBar.svelte";
  import LeaveButton from "../util/LeaveButton.svelte";
  import Playfield from "./Playfield.svelte";
  import ImageShower from "./elements/ImageShower.svelte";
  import FullScreenOverlayContainer from "../util/FullScreenOverlayContainer.svelte";

  function exit() {
    closePlayer();
    clearStores();
  }

  function checkImagePointsExist() {
    if ($currentWordmap.points.length <= 0) {
      notify(
        10000,
        "This wordmap does not have any image points, you can add one by clicking in the pen icon on the start menu."
      );
    }
  }
</script>

{#if $isPlayerOpen}
  <FullScreenOverlayContainer>
    <audio
      id="editing-audio"
      src={`${$currentWordmap.audioPath}`}
      type="audio/mpeg"
    />
    <div class="h-screen w-screen bg-black-light" />

    <Playfield>
      <ImageShower />
    </Playfield>

    <LeaveButton action={exit} />

    <BottomBar>
      <ProgressBar />
      <div
        class="bottom-0 h-full w-full flex items-center content-center justify-start flex-row"
      >
        <WordmapInformation />
        <MediaControlBar onPlay={checkImagePointsExist} />
      </div>
    </BottomBar>
  </FullScreenOverlayContainer>
{/if}
