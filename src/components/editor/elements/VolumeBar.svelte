<script lang="ts">
  import { audio, input } from "../../../util/web";

  function parseVolume(volume: string) {
    if (volume == "100") {
      return 1;
    } else {
      return Number.parseFloat(`0.${volume}`);
    }
  }

  function alterVolume() {
    const volumeBar = input("volume-bar");

    audio("editing-audio").volume = parseVolume(volumeBar.value);

    console.log("Volume altered to " + parseVolume(volumeBar.value));
  }
</script>

<!-- svelte-ignore component-name-lowercase -->
<input
  on:change={() => alterVolume()}
  type="range"
  min="0"
  max="100"
  value="50"
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
