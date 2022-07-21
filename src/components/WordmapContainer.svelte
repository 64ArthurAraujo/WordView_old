<script lang="ts">
import { onMount } from "svelte";
import { FrownIcon } from "svelte-feather-icons";
import { fetchWordmaps } from "../actions";
import type { WordMap } from "../actions/types/wordmap";

export let wordmaps: WordMap[] = new Array<WordMap>();

onMount(() => {
    wordmaps = fetchWordmaps();
});
</script>

<div class="w-full h-full flex static justify-center content-center pt-12">
    {#if wordmaps.length == 0}
        <div class="justify-center text-center content-center items-center flex flex-col pt-72">
            <FrownIcon size="48" class="invert mb-2" />
            <h4 class="text-white align-middle select-none"><b>You dont have any wordmaps yet...</b></h4>
        </div>
    {:else }
        <h1>1</h1>

        <div class="justify-center items-center flex flex-col">

        </div>
    {/if}
</div>
