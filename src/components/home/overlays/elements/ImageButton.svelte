<script lang="ts">
  import { openFilePrompt } from "../../../../actions/open-file-prompt";
  import { notify } from "../../../../stores/overlay";
  import { isFileImage } from "../../../../util/file";
  import { image } from "../../../../util/web";

  let isImageSelected = false;
  let displayImage = "none";

  async function loadImage() {
    const img = await openFilePrompt();

    if (!isFileImage(img)) {
      notify(1000, "Invalid image file!");
      return;
    }

    isImageSelected = true;

    const preview = image("preview");
    preview.src = img.path;

    displayImage = "block";
  }
</script>

<div
  on:click={() => loadImage()}
  class="h-28 w-28 border-2 bg-black-light mx-3 rounded hover:bg-black-select hover:cursor-pointer transition-colors center overflow-hidden"
>
  {#if !isImageSelected}
    <p class="text-white-darker absolute">Image...</p>
  {/if}

  <!-- svelte-ignore a11y-missing-attribute -->
  <img id="preview" class="full" style={`display: ${displayImage};`} />
</div>
