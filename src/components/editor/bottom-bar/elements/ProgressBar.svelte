<script lang="ts">
  import { pause } from "../../../../stores/overlay";
  import { numberFromPercentage, percentage } from "../../../../util/math";
  import { audio, windowWidth } from "../../../../util/web";

  let progressPercentage = 0;

  setInterval(() => {
    let _audio = audio("editing-audio");

    if (!_audio || !_audio.currentTime) return;

    progressPercentage = percentage(_audio.currentTime, _audio.duration);

    if (progressPercentage == 100) pause();
  }, 250);

  function handleMouseClick(event: MouseEvent) {
    let clickPosition = event.x;

    let percentageOfTheScreenByLocationClicked = percentage(
      clickPosition,
      windowWidth()
    );

    progressPercentage = percentageOfTheScreenByLocationClicked;

    audio("editing-audio").currentTime = numberFromPercentage(
      percentageOfTheScreenByLocationClicked,
      audio("editing-audio").duration
    );
  }
</script>

<div
  class="bg-black-lightest fixed h-1 w-full hover:bg-black-select hover:h-2.5 hover:cursor-pointer transition-all z-10"
  on:click={handleMouseClick}
>
  <div
    class={`bg-accent-regular h-full w-1/2 transition-all`}
    style={`width: ${progressPercentage}%`}
  />
</div>
