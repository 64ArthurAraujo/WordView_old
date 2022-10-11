<script lang="ts">
  import { percentage } from "../../../util/math";
  import { audio } from "../../../util/web";

  let audioTime: number;
  let audioPercentage: number;

  let clazz: string = "";

  function audioCurrentTime() {
    if (audio("editing-audio") == null) return 0;

    return audio("editing-audio").currentTime;
  }

  function audioDuration() {
    if (audio("editing-audio") == null) return 0;

    return audio("editing-audio").duration;
  }

  setInterval(() => {
    audioTime = audioCurrentTime();
    audioPercentage = Number.parseFloat(
      percentage(audioTime, audioDuration()).toFixed(1)
    );
  }, 1);

  export { clazz as class };
</script>

<div
  class={`h-6 w-24 min-w-max px-2 max-w-max bg-black-lighter border rounded-md absolute grid place-items-center ${
    clazz ?? ""
  }`}
>
  <p class="ui-text">{audioTime} | {audioPercentage}%</p>
</div>
