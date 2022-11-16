<script lang="ts">
  import { fly } from "svelte/transition";
  import { currentLyricPoint, setLyricPoint } from "../../../stores/overlay";
  import { currentWordmap, audioPaused } from "../../../stores/wordmap";
  import type { LyricPoint } from "../../../types/wordmap";
  import { isArrayEmpty, isUndefined } from "../../../util/ts";
  import { audio } from "../../../util/web";

  let isShowing = false;
  let fadeOutCounter = 0;

  let lastTime = -1;

  setInterval(() => {
    if (isUndefined($currentWordmap.lyrics)) return;
    if (isArrayEmpty($currentWordmap.lyrics)) return;

    let orderLyrics = $currentWordmap.lyrics.sort((a, b) =>
      a.timelineLocation > b.timelineLocation ? -1 : 1
    );

    orderLyrics.reverse();

    if (orderLyrics[0].timelineLocation > audio("editing-audio").currentTime) {
      setLyricPoint({} as LyricPoint);
      isShowing = false;
    }

    for (const lyric of orderLyrics) {
      if (!audio("editing-audio")) return;
      if (lyric == null) return;

      if (audio("editing-audio").currentTime >= lyric.timelineLocation) {
        setLyricPoint(lyric);
      }
    }
  }, 1);

  setInterval(() => {
    if ($audioPaused) return;

    if ($currentLyricPoint.timelineLocation != lastTime) {
      console.log("Lyric changed!");
      fadeOutCounter = 0;
      isShowing = true;
    } else {
      if (fadeOutCounter >= 500) {
        isShowing = false;
      }
    }

    lastTime = $currentLyricPoint.timelineLocation;
    fadeOutCounter++;
  }, 1);
</script>

{#if $currentLyricPoint.text != undefined}
  {#if isShowing}
    <div
      class="bg-black-focus opacity-75 bottom-0 mb-4 absolute z-20 rounded-md overflow-hidden"
      in:fly={{ y: -10, duration: 250 }}
      out:fly={{ y: 10, duration: 500 }}
    >
      <p class="ui-text p-3">
        {$currentLyricPoint.text}
      </p>
    </div>
  {/if}
{/if}
