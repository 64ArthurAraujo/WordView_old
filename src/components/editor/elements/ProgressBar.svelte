<script lang="ts">
  let progressPercentage = 0;

  function calcPercentageFor(
    numberToGetPercentageOf: number,
    wholeNumber: number
  ) {
    return (numberToGetPercentageOf / wholeNumber) * 100;
  }

  setInterval(() => {
    let audio = document.getElementById("editing-audio") as HTMLAudioElement;

    if (!audio || !audio.currentTime) return;

    progressPercentage = calcPercentageFor(audio.currentTime, audio.duration);

    console.log(progressPercentage);
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
