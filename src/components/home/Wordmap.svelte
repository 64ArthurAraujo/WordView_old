<script lang="ts">
    import { openToEdit } from "../../actions/editor";
    import { Edit2Icon, Trash2Icon } from "svelte-feather-icons";
    import { fileExists } from "../../util/file";
    import type { WordMap } from "../../actions/types/wordmap";
    import OverlayContainer from "../OverlayContainer.svelte";
    import { scale } from "svelte/transition";
    import { deleteWordmap, fetchWordmaps } from "../../actions";

    export let mapdata: WordMap;

    let fileDoExist;

    let askDeleteShown: boolean = false;

    if (mapdata.thumbPath != "") {
        fileDoExist = fileExists(mapdata.thumbPath);
    } else fileDoExist = false;

    function askDelete() {
        askDeleteShown = true;
    }

    function deleteConfirmed() {
        askDeleteShown = false;
        deleteWordmap(mapdata.id);

        fetchWordmaps();
    }
</script>

<div
    class="h-20 rounded-md w-10/12 mt-4 bg-black-lightest hover:bg-black-select hover:cursor-pointer transition-colors justify-self-auto flex flex-row relative"
>
    <div
        class=" h-20 w-20 bg-black-lighter rounded-md overflow-hidden border-black-lightest border-2 absolute"
    >
        {#if fileDoExist}
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src={mapdata.thumbPath} class="h-full w-full select-none" />
        {/if}
    </div>

    <div class="mt-2 ml-24 absolute">
        <h2 class="text-white-regular select-none">
            <b>{mapdata.title}</b>
        </h2>
        <h4 class="text-white-darker select-none">{mapdata.description}</h4>
    </div>

    <div class="w-full h-full">
        <div class="float-right flex flex-row">
            <div
                on:click={() => openToEdit(mapdata.id)}
                class=" h-20 w-10 bg-black-light hover:bg-accent-regular flex transition-colors border-black-lightest border-2 rounded-md overflow-hidden float-right items-center content-center justify-center"
            >
                <Edit2Icon size="14" class="invert" />
            </div>

            <div
                on:click={() => askDelete()}
                class=" h-20 w-10 ml-1 bg-black-light hover:bg-red-regular flex transition-colors border-black-lightest border-2 rounded-md overflow-hidden float-right items-center content-center justify-center"
            >
                <Trash2Icon size="14" class="invert" />
            </div>
        </div>
    </div>
</div>

{#if askDeleteShown}
    <OverlayContainer class="z-20">
        <div
            transition:scale={{ duration: 500 }}
            class="h-44 w-1.5/4 bg-black-lightest rounded-md absolute"
        >
            <div
                class="flex content-center items-center justify-center w-full mt-4 px-4"
            >
                <h1 class="text-white-regular">
                    <b>Do you want to delete "{mapdata.title}"?</b>
                </h1>
            </div>

            <div class=" mt-20 flex content-center items-center justify-around">
                <div
                    on:click={() => (askDeleteShown = false)}
                    class="w-20 h-10 border-2 bg-black-light hover:cursor-pointer hover:bg-black-lightest flex transition-colors content-center items-center justify-center rounded-md"
                >
                    <p class="text-white-darker">No</p>
                </div>

                <div
                    on:click={() => deleteConfirmed()}
                    class="w-20 h-10 border-2 bg-black-light hover:cursor-pointer hover:bg-red-regular flex transition-colors content-center items-center justify-center rounded-md"
                >
                    <p class="text-white-darker">Yes</p>
                </div>
            </div>
        </div>
    </OverlayContainer>
{/if}
