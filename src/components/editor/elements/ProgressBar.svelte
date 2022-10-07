<script lang="ts">
  import { percentage } from "../../../util/math";
  import { audio } from "../../../util/web";

  let progressPercentage = 0;

  setInterval(() => {
    let _audio = audio("editing-audio");

    if (!_audio || !_audio.currentTime) return;

    progressPercentage = percentage(_audio.currentTime, _audio.duration);
  }, 250);
</script>

<div
  class="bg-black-lightest fixed h-1 w-full hover:bg-black-select hover:h-2.5 hover:cursor-pointer transition-all z-10"
>
  <div
    class={`bg-accent-regular h-full w-1/2 transition-all`}
    style={`width: ${progressPercentage}%`}
  />
</div>
