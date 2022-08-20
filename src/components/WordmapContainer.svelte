<script lang="ts">
    import { onMount } from "svelte";
    import { FrownIcon } from "svelte-feather-icons";
    import { fetchWordmaps } from "../actions";
    import { wordmaps } from "../stores/overlay";
    import Wordmap from "./home/Wordmap.svelte";

    onMount(() => {
        fetchWordmaps();
    });
</script>

<div
    class="w-full h-full flex static justify-center content-center pt-12 pb-12"
>
    {#if $wordmaps.length == 0}
        <div
            class="justify-center text-center content-center items-center flex flex-col pt-72"
        >
            <FrownIcon size="48" class="invert mb-2" />
            <h4 class="text-white-regular align-middle select-none">
                <b>You dont have any wordmaps yet...</b>
            </h4>
        </div>
    {:else}
        <div class="w-full justify-center items-center flex flex-col">
            {#each $wordmaps as wordmap}
                <Wordmap mapdata={wordmap} />
            {/each}
        </div>
    {/if}
</div>
