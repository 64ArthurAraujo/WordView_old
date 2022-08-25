<script lang="ts">
  function parseVolume(volume: string) {
    if (volume == "100") {
      return 1;
    } else {
      return Number(`0.${volume}`);
    }
  }

  function alterVolume() {
    const volumeBar = document.getElementById("volume-bar") as HTMLInputElement;

    const audio = document.getElementById("editing-audio") as HTMLAudioElement;

    audio.volume = parseVolume(volumeBar.value);

    console.log("Volume altered to " + parseVolume(volumeBar.value));
  }
</script>

<input
  on:change={() => alterVolume()}
  type="range"
  min="0"
  max="100"
  value="75"
  id="volume-bar"
  class="rounded-lg h-2 select-none outline-none appearance-none bg-black-light border-2 border-black-divborder accent-black-lightest hover:accent-accent-regular"
/>

<style>
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    input[type="range"] {
      overflow: hidden;
      -webkit-appearance: none;
      background-color: #1b1a1a;
    }

    input[type="range"]::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      color: #8951ff;
      margin-top: -1px;
    }

    input[type="range"]::-webkit-slider-thumb {
      width: 0px;
      -webkit-appearance: none;
      height: 10px;
      cursor: pointer;
      background: #8951ff;
      box-shadow: -80px 0 0 80px #8951ff;
    }
  }
</style>
