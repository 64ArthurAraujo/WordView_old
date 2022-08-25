<script lang="ts">
  import { currentWordmap } from "../../stores/overlay";
  import WordmapImage from "../util/WordmapImage.svelte";
</script>

<div class=" h-20 w-20 border-2 bg-black-light mx-3 rounded overflow-hidden">
  <WordmapImage mapdata={$currentWordmap} />
</div>

<div class="h-20 items-center content-center justify-start flex-col">
  <h3 class="text-white-regular select-none">
    <b>{$currentWordmap.title}</b>
  </h3>

  <p class="text-white-darker select-none">
    {$currentWordmap.description}
  </p>
</div>
