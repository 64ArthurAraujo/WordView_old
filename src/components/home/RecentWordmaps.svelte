<script lang="ts">
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";
  import { recentWordmaps, updateRecentWordmaps } from "../../stores/wordmap";
  import Titlebar from "./elements/Titlebar.svelte";
  import SmallWordmap from "./elements/SmallWordmap.svelte";

  onMount(() => {
    updateRecentWordmaps();
  });
</script>

{#if $recentWordmaps.length > 0}
  <div
    class="w-full max-h-max column center static pt-12"
    transition:scale={{ duration: 250 }}
  >
    <Titlebar header="Recent Wordmaps" class="mt-2 w-full">
      <div class="w-full row center static">
        {#each $recentWordmaps as mapdata}
          <SmallWordmap {mapdata} />
        {/each}
      </div>
    </Titlebar>
  </div>
{/if}
