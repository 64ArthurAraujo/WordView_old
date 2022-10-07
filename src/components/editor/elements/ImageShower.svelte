<script lang="ts">
  import { fade } from "svelte/transition";
  import { currentPoint, currentWordmap } from "../../../stores/wordmap";
  import { audio } from "../../../util/web";

  let currentImageSrc = "";

  setInterval(() => {
    if ($currentWordmap.points == undefined) return;

    let orderedPoints = $currentWordmap.points.sort((a, b) =>
      a.timelineLocation > b.timelineLocation ? -1 : 1
    );

    orderedPoints.reverse();

    for (const point of orderedPoints) {
      if (!audio("editing-audio")) return;

      if (audio("editing-audio").currentTime >= point.timelineLocation) {
        currentImageSrc = point.path;
        currentPoint.set(point);
      }
    }
  }, 1);
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img class="h-full w-auto select-none" src={currentImageSrc} transition:fade />
