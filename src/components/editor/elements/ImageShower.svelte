<script lang="ts">
  import { currentPoint, currentWordmap } from "../../../stores/wordmap";

  let currentImageSrc = "";

  setInterval(() => {
    let audio = document.getElementById("editing-audio") as HTMLAudioElement;

    let orderedPoints = $currentWordmap.points.sort((a, b) =>
      a.timelineLocation > b.timelineLocation ? -1 : 1
    );

    orderedPoints.reverse();

    for (const point of orderedPoints) {
      if (audio.currentTime >= point.timelineLocation) {
        currentImageSrc = point.path;
        currentPoint.set(point);
      }
    }
  }, 1);
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img class="h-full w-auto" src={currentImageSrc} />
