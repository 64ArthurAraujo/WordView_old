<script lang="ts">
  import { openToEdit } from "../../actions/overlay/editor";
  import { Edit2Icon, Trash2Icon } from "svelte-feather-icons";
  import type { WordMap } from "../../actions/wordmap/types/wordmap";
  import DeleteDialog from "./overlays/DeleteDialog.svelte";
  import { openToPlay } from "../../actions/overlay/player";
  import { scale } from "svelte/transition";
  import WordmapImage from "../global/elements/WordmapImage.svelte";
  import LayoutButton from "../global/buttons/LayoutButton.svelte";

  export let mapdata: WordMap;

  let deleteDialog: DeleteDialog;
</script>

<div
  on:click={() => openToPlay(mapdata.id)}
  transition:scale={{ duration: 750 }}
  class="h-20 rounded-md w-10/12 mt-4 bg-black-lightest hover:bg-black-select hover:cursor-pointer transition-colors justify-self-auto row relative"
>
  <div
    class="h-20 w-20 bg-black-lighter rounded-md overflow-hidden border-black-lightest border-2 absolute"
  >
    <WordmapImage {mapdata} />
  </div>

  <div class="mt-2 ml-24 absolute">
    <h2 class="text-white-regular select-none">
      <b>{mapdata.title}</b>
    </h2>
    <h4 class="text-white-darker select-none">{mapdata.description}</h4>
  </div>

  <div class="full">
    <div class="float-right row" on:click|stopPropagation>
      <LayoutButton
        action={() => openToEdit(mapdata.id)}
        height="20"
        width="10"
        class="hover:bg-accent-regular"
      >
        <Edit2Icon size="14" class="invert" />
      </LayoutButton>

      <LayoutButton
        action={() => deleteDialog.ask()}
        height="20"
        width="10"
        class="hover:bg-red-regular"
      >
        <Trash2Icon size="14" class="invert" />
      </LayoutButton>
    </div>
  </div>
</div>

<DeleteDialog {mapdata} bind:this={deleteDialog} />
