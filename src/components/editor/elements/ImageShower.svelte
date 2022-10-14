<script lang="ts">
  import { slide } from "svelte/transition";
  import type { Point } from "../../../actions/wordmap";
  import {
    currentPointImageSource,
    setPointImageSource,
  } from "../../../stores/overlay";
  import {
    currentPoint,
    currentWordmap,
  } from "../../../stores/wordmap/wordmap";
  import { audio } from "../../../util/web";

  let isShowing = false;

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
        isShowing = true;
        setPointImageSource(point.path);
        currentPoint.set(point);
      }
    }
  }, 1);
</script>

{#if isShowing}
  <!-- svelte-ignore a11y-missing-attribute -->
  <img
    id="img"
    class="h-full w-auto select-none transition-all"
    src={$currentPointImageSource}
    transition:slide
  />
{/if}
