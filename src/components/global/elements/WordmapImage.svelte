<script lang="ts">
  import type { WordMap } from "../../../types/wordmap";
  import { fileExists } from "../../../util/file";

  export let mapdata: WordMap;

  let fileDoExist: boolean;

  if (mapdata.thumbPath != "") {
    fileDoExist = fileExists(mapdata.thumbPath);
  } else fileDoExist = false;
</script>

{#if fileDoExist}
  <!-- svelte-ignore a11y-missing-attribute -->
  <img src={mapdata.thumbPath} class="full select-none" />
{/if}
