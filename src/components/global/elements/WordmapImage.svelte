<script lang="ts">
  import type { WordMap } from "../../../actions/wordmap/types/wordmap";
  import { fileExists } from "../../../util/file";

  export let mapdata: WordMap;

  let fileDoExist;

  if (mapdata.thumbPath != "") {
    fileDoExist = fileExists(mapdata.thumbPath);
  } else fileDoExist = false;
</script>

{#if fileDoExist}
  <!-- svelte-ignore a11y-missing-attribute -->
  <img src={mapdata.thumbPath} class="h-full w-full select-none" />
{/if}
