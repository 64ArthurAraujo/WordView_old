<script lang="ts">
  import { SkipForwardIcon } from "svelte-feather-icons";
  import CircleButton from "../../util/CircleButton.svelte";

  let audio: HTMLAudioElement;

  function forward() {
    audio = document.getElementById("editing-audio") as HTMLAudioElement;

    audio.currentTime += 5;
  }
</script>

<CircleButton
  action={forward}
  height="9"
  width="9"
  class="flex content-center items-center justify-center"
>
  <SkipForwardIcon size="13" class="invert" />
</CircleButton>
