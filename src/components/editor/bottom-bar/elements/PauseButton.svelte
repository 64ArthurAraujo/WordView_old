<script lang="ts">
  import { PlayIcon } from "svelte-feather-icons";
  import { PauseIcon } from "svelte-feather-icons";
  import CircleButton from "../../../global/buttons/CircleButton.svelte";
  import { audioPaused } from "../../../../stores/wordmap/wordmap";
  import { audio } from "../../../../util/web";
  import { pause, play } from "../../../../stores/overlay";

  export let onPlay: Function;

  export function hitplay() {
    let _audio = audio("editing-audio");

    if (!_audio.paused) {
      pause();
    } else {
      play();
      onPlay();
    }
  }
</script>

<CircleButton action={hitplay} height="10" width="10" class="mx-4 center">
  {#if !audio}
    <PlayIcon size="14" class="invert" />
  {:else if $audioPaused}
    <PlayIcon size="14" class="invert" />
  {:else}
    <PauseIcon size="14" class="invert" />
  {/if}
</CircleButton>
