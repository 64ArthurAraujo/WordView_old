<script lang="ts">
import { openToEdit } from "../../actions/editor";
import type { WordMap } from "../../actions/types/wordmap";

export let mapdata: WordMap;
</script>

<div on:click="{() => openToEdit(mapdata.id)}" class="h-20 rounded-md w-10/12 mt-4 bg-black-lightest hover:bg-black-select hover:cursor-pointer transition-colors">
    <div class="mt-2 ml-4">
        <h2 class="text-white-regular select-none"><b>{mapdata.title}</b></h2>
        <h4 class="text-white-darker select-none">{mapdata.description}</h4>
    </div>
</div>
