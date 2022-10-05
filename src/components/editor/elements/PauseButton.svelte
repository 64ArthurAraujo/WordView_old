<script lang="ts">
  import { PlayIcon } from "svelte-feather-icons";
  import { PauseIcon } from "svelte-feather-icons";
  import CircleButton from "../../util/CircleButton.svelte";

  let audio: HTMLAudioElement;

  export function play() {
    audio = document.getElementById("editing-audio") as HTMLAudioElement;

    if (!audio.paused) {
      audio.pause();
    } else {
      audio.play();
    }
  }
</script>

<CircleButton
  action={play}
  height="10"
  width="10"
  class="mx-4 flex content-center items-center justify-center"
>
  {#if !audio}
    <PlayIcon size="14" class="invert" />
  {:else if audio.paused}
    <PlayIcon size="14" class="invert" />
  {:else}
    <PauseIcon size="14" class="invert" />
  {/if}
</CircleButton>
