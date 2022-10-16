<script lang="ts">
  import { fly } from "svelte/transition";
  import type { Point } from "../../../actions/wordmap";
  import { audio } from "../../../util/web";
  import {
    currentPointImageSource,
    setPointImageSource,
  } from "../../../stores/overlay";
  import {
    currentPoint,
    currentWordmap,
  } from "../../../stores/wordmap/wordmap";

  let isShowing = false;
  let lastSrc = "";
  let fadeOutCounter = 0;

  setInterval(async () => {
    if ($currentWordmap.points == undefined) return;

    let orderedPoints = $currentWordmap.points.sort((a, b) =>
      a.timelineLocation > b.timelineLocation ? -1 : 1
    );

    orderedPoints.reverse();

    if (orderedPoints.length <= 0) {
      currentPoint.set({} as Point);
      setPointImageSource("");
      isShowing = false;
    }

    for (const point of orderedPoints) {
      if (!audio("editing-audio")) return;
      if (point == null) return;

      if (audio("editing-audio").currentTime >= point.timelineLocation) {
        setPointImageSource(point.path);
        currentPoint.set(point);
      }
    }
  }, 1);

  setInterval(() => {
    if ($currentPointImageSource != lastSrc) {
      console.log("Source changed!");
      fadeOutCounter = 0;
      isShowing = true;
    } else {
      if (fadeOutCounter == 500) {
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
    class="h-full w-auto select-none transition-all"
    src={$currentPointImageSource}
    in:fly={{ x: 1000, duration: 250 }}
    out:fly={{ x: -1000, duration: 250 }}
  />
{/if}
