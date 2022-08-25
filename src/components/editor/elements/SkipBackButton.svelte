<script lang="ts">
  import { SkipBackIcon } from "svelte-feather-icons";
  import CircleButton from "../../util/CircleButton.svelte";

  let audio: HTMLAudioElement;

  function back() {
    audio = document.getElementById("editing-audio") as HTMLAudioElement;

    audio.currentTime -= 5;
  }
</script>

<CircleButton
  action={back}
  height="9"
  width="9"
  class="flex content-center items-center justify-center"
>
  <SkipBackIcon size="13" class="invert" />
</CircleButton>
