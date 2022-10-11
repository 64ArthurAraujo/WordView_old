<script lang="ts">
  import { onMount } from "svelte";
  import { FrownIcon } from "svelte-feather-icons";
  import { fetchWordmaps } from "../../actions/wordmap";
  import { wordmaps } from "../../stores/wordmap";
  import Wordmap from "./Wordmap.svelte";

  onMount(() => {
    fetchWordmaps();
  });
</script>

<div class="full center static pt-12 pb-12">
  {#if $wordmaps.length == 0}
    <div class="center text-center column pt-72">
      <FrownIcon size="48" class="invert mb-2" />
      <h4 class="ui-text align-middle">
        <b>You dont have any wordmaps yet...</b>
      </h4>
    </div>
  {:else}
    <div class="w-full center column">
      {#each $wordmaps as wordmap}
        <Wordmap mapdata={wordmap} />
      {/each}
    </div>
  {/if}
</div>
