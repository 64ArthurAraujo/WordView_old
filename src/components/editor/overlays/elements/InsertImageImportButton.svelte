<script lang="ts">
  import type { WordMap } from "../../../../types/wordmap";
  import { fetchWordmaps } from "../../../../actions/wordmap";
  import { notify } from "../../../../stores/overlay";
  import LayoutButton from "../../../global/buttons/LayoutButton.svelte";
  import {
    currentWordmap,
    saveCurrentWordmap,
  } from "../../../../stores/wordmap/wordmap";
  import {
    image,
    imageHasNoSource,
    input,
    inputIsEmpty,
  } from "../../../../util/web";
  import { copyFile, createFolderIfDoesntExist } from "../../../../util/file";
  import { imagesFolder, wordmapsFolder } from "../../../../util/constants";
  import { randomUUID } from "crypto";

  let wordmap: WordMap = $currentWordmap;

  export let hideImportImage: Function;

  function insertImage() {
    let imageImport = image("preview");
    let locationInput = input("location");

    if (imageHasNoSource(imageImport) || inputIsEmpty(locationInput)) {
      notify(1000, "Please fill all the inputs!");
      return;
    }

    let imageUUID = randomUUID();

    createFolderIfDoesntExist(imagesFolder);
    copyFile(imageImport.src, `${imagesFolder}/${imageUUID}`);

    wordmap.points.push({
      timelineLocation: Number.parseFloat(locationInput.value),
      fadeIn: 100,
      fadeOut: 100,
      type: "image",
      uuid: imageUUID,
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
  class="hover-accent w-72"
>
  <p class="ui-text-darker">Insert</p>
</LayoutButton>
