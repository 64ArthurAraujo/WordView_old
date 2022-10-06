<script lang="ts">
  import WordmapInformation from "./WordmapInformation.svelte";
  import MediaControlBar from "./MediaControlBar.svelte";
  import BottomBar from "./BottomBar.svelte";
  import OverlayContainer from "../util/OverlayContainer.svelte";
  import { isPlayerOpen, notify } from "../../stores/overlay";
  import { currentPoint, currentWordmap } from "../../stores/wordmap";
  import ProgressBar from "./elements/ProgressBar.svelte";
  import LeaveButton from "../util/LeaveButton.svelte";
  import Playfield from "./Playfield.svelte";
  import ImageShower from "./elements/ImageShower.svelte";
  import type { Point, WordMap } from "../../actions/types/wordmap";

  function exit() {
    currentPoint.set({} as Point);
    currentWordmap.set({} as WordMap);
    isPlayerOpen.set(false);
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
  <OverlayContainer>
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
  </OverlayContainer>
{/if}
