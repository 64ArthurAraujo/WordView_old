<script lang="ts">
  import { PlayIcon } from "svelte-feather-icons";
  import { PauseIcon } from "svelte-feather-icons";
  import CircleButton from "../../../global/buttons/CircleButton.svelte";
  import { audioPaused } from "../../../../stores/wordmap/wordmap";
  import { audio } from "../../../../util/web";

  export let onPlay: Function;

  export function play() {
    let _audio = audio("editing-audio");

    if (!_audio.paused) {
      audioPaused.set(true);
      _audio.pause();
    } else {
      _audio.play();
      audioPaused.set(false);
      onPlay();
    }
  }
</script>

<CircleButton action={play} height="10" width="10" class="mx-4 center">
  {#if !audio}
    <PlayIcon size="14" class="invert" />
  {:else if $audioPaused}
    <PlayIcon size="14" class="invert" />
  {:else}
    <PauseIcon size="14" class="invert" />
  {/if}
</CircleButton>
