<script lang="ts">
  import type { WordMap } from "../../../../actions/wordmap/types/wordmap";
  import { fetchWordmaps } from "../../../../actions/wordmap";
  import { notify } from "../../../../stores/overlay";
  import LayoutButton from "../../../global/buttons/LayoutButton.svelte";
  import {
    currentWordmap,
    saveCurrentWordmap,
  } from "../../../../stores/wordmap";
  import {
    image,
    imageHasNoSource,
    input,
    inputIsEmpty,
  } from "../../../../util/web";

  let wordmap: WordMap = $currentWordmap;

  export let hideImportImage: Function;

  function insertImage() {
    let imageImport = image("preview");
    let locationInput = input("location");

    if (imageHasNoSource(imageImport) || inputIsEmpty(locationInput)) {
      notify(1000, "Please fill all the inputs!");
      return;
    }

    wordmap.points.push({
      timelineLocation: Number.parseFloat(locationInput.value),
      fadeIn: 100,
      fadeOut: 100,
      type: "image",
      path: imageImport.src,
    });

    saveCurrentWordmap();
    fetchWordmaps();
    hideImportImage();
  }
</script>

<LayoutButton
  action={insertImage}
  width="72"
  height="10"
  class="hover:bg-accent-regular w-72"
>
  <p class="text-white-darker select-none">Insert</p>
</LayoutButton>
