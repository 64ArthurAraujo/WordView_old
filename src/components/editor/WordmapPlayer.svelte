<script lang="ts">
  import WordmapInformation from "./bottom-bar/WordmapInformation.svelte";
  import MediaControlBar from "./bottom-bar/MediaControlBar.svelte";
  import BottomBar from "./bottom-bar/BottomBar.svelte";
  import { closePlayer, isPlayerOpen, notify } from "../../stores/overlay";
  import { clearStores, currentWordmap } from "../../stores/wordmap/wordmap";
  import ProgressBar from "./bottom-bar/elements/ProgressBar.svelte";
  import LeaveButton from "../global/buttons/LeaveButton.svelte";
  import Playfield from "./elements/Playfield.svelte";
  import ImageShower from "./elements/ImageShower.svelte";
  import FullScreenOverlayContainer from "../global/overlay/FullScreenOverlayContainer.svelte";
  import LyricsShower from "./elements/LyricsShower.svelte";

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
    <div class="screen bg-black-light" />

    <Playfield isPlayer={true}>
      <ImageShower />
      <LyricsShower />
    </Playfield>

    <LeaveButton action={exit} />

    <BottomBar>
      <ProgressBar />
      <div class="bottom-0 full row items-center content-center justify-start">
        <WordmapInformation />
        <MediaControlBar onPlay={checkImagePointsExist} />
      </div>
    </BottomBar>
  </FullScreenOverlayContainer>
{/if}
