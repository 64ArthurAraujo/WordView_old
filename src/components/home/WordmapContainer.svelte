<script lang="ts">
  import { onMount } from "svelte";
  import { FrownIcon } from "svelte-feather-icons";
  import { fly } from "svelte/transition";
  import { fetchWordmaps } from "../../actions/wordmap";
  import { wordmaps } from "../../stores/wordmap/wordmap";
  import Titlebar from "./elements/Titlebar.svelte";
  import Wordmap from "./elements/Wordmap.svelte";

  onMount(() => {
    fetchWordmaps();
  });
</script>

<div class="full center static pt-12 pb-12">
  {#if $wordmaps.length == 0}
    <div
      class="center text-center column pt-72"
      in:fly={{ x: 100, delay: 1000 }}
      out:fly={{ x: -100, delay: 0 }}
    >
      <FrownIcon size="48" class="invert mb-2" />
      <h4 class="ui-text align-middle">
        <b>You dont have any songs yet...</b>
      </h4>
    </div>
  {:else}
    <Titlebar header="Your Songs" class="mt-2 w-full">
      <div class="w-full center column">
        {#each $wordmaps as wordmap}
          <Wordmap mapdata={wordmap} />
        {/each}
      </div>
    </Titlebar>
  {/if}
</div>
