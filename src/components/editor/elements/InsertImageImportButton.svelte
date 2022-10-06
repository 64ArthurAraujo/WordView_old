<script lang="ts">
  import { fetchWordmaps } from "../../../actions";
  import type { Point, WordMap } from "../../../actions/types/wordmap";
  import { notify } from "../../../stores/overlay";
  import { currentWordmap, saveCurrentWordmap } from "../../../stores/wordmap";
  import LayoutButton from "../../util/LayoutButton.svelte";

  let wordmap: WordMap = $currentWordmap;

  export let hideImportImage: Function;

  function insertImage() {
    let imageImport = document.getElementById("preview") as HTMLImageElement;
    let locationInput = document.getElementById("location") as HTMLInputElement;

    if (imageImport.src == "" || locationInput.value == "") {
      notify(1000, "Please fill all the inputs!");
      return;
    }

    let newPoint: Point = {
      timelineLocation: Number.parseFloat(locationInput.value),
      fadeIn: 100,
      fadeOut: 100,
      type: "image",
      path: imageImport.src,
    };

    wordmap.points.push(newPoint);

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
