<script lang="ts">
  import { slide } from "svelte/transition";
  import { currentPoint, currentWordmap } from "../../../stores/wordmap";
  import { audio } from "../../../util/web";

  let currentImageSrc = "";
  let isShowing = false;

  setInterval(async () => {
    if ($currentWordmap.points == undefined) return;

    let orderedPoints = $currentWordmap.points.sort((a, b) =>
      a.timelineLocation > b.timelineLocation ? -1 : 1
    );

    orderedPoints.reverse();

    for (const point of orderedPoints) {
      if (!audio("editing-audio")) return;

      if (audio("editing-audio").currentTime >= point.timelineLocation) {
        isShowing = true;
        currentImageSrc = point.path;
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
    src={currentImageSrc}
    transition:slide
  />
{/if}
