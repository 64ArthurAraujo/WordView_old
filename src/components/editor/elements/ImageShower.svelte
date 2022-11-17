<script lang="ts">
  import { fly } from "svelte/transition";
  import { audio } from "../../../util/web";
  import {
    currentPointImageSource,
  } from "../../../stores/overlay";
  import {
    audioPaused,
    currentWordmap,
  } from "../../../stores/wordmap/wordmap";
  import { clearImage, setPoint, sortBasedOnTimelineLocation } from "./function";

  let isShowing = false;
  let lastSrc = "";
  let fadeOutCounter = 0;

  setInterval(() => {
    if ($currentWordmap.points == undefined) return;

    let orderedPoints = sortBasedOnTimelineLocation($currentWordmap.points).reverse();

    if (orderedPoints.length <= 0) {
      clearImage();
      isShowing = false;
      return;
    }

    if (
      orderedPoints[0].timelineLocation > audio("editing-audio").currentTime
    ) {
      clearImage();
      isShowing = false;
    }

    for (const point of orderedPoints) {
      if (!audio("editing-audio")) return;
      if (point == null) return;

      if (audio("editing-audio").currentTime >= point.timelineLocation) {
        setPoint(point);
      }
    }
  }, 1);

  setInterval(() => {
    if ($audioPaused) return;

    if ($currentPointImageSource != lastSrc) {
      console.log("Source changed!");
      fadeOutCounter = 0;
      isShowing = true;
    } else {
      if (fadeOutCounter >= 500) {
        isShowing = false;
      }
    }

    lastSrc = $currentPointImageSource;
    fadeOutCounter++;
  }, 1);
</script>

{#if isShowing}
  <!-- svelte-ignore a11y-missing-attribute -->
  <img
    id="img"
    class="h-full w-auto select-none transition-all absolute"
    src={$currentPointImageSource}
    in:fly={{ x: 500, duration: 250 }}
    out:fly={{ x: -500, duration: 500 }}
  />
{/if}
