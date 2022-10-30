<script lang="ts">
  import { openToEdit } from "../../../actions/overlay/editor";
  import { Edit2Icon, ShareIcon, Trash2Icon } from "svelte-feather-icons";
  import type { WordMap } from "../../../types/wordmap";
  import DeleteDialog from "../overlays/DeleteDialog.svelte";
  import { openToPlay } from "../../../actions/overlay/player";
  import { scale } from "svelte/transition";
  import WordmapImage from "../../global/elements/WordmapImage.svelte";
  import LayoutButton from "../../global/buttons/LayoutButton.svelte";
  import { shareWordmap } from "./action/wordmap";
  import { identity } from "svelte/internal";

  export let mapdata: WordMap;

  let deleteDialog: DeleteDialog;
</script>

<div
  on:click={() => openToPlay(mapdata.id)}
  transition:scale={{ duration: 750 }}
  class="h-20 rounded-md shadow-lg w-10/12 mt-4 ui-element bg-black-lightest hover:cursor-pointer justify-self-auto row relative"
>
  <div
    class="h-20 w-20 bg-black-lighter rounded-md overflow-hidden border-black-lightest border-2 absolute"
  >
    <WordmapImage {mapdata} />
  </div>

  <div class="mt-2 ml-24 absolute">
    <h2 class="ui-text">
      <b>{mapdata.title}</b>
    </h2>
    <h4 class="ui-text-darker">{mapdata.description}</h4>
  </div>

  <div class="full">
    <div class="float-right row" on:click|stopPropagation>
      <LayoutButton
        action={() => openToEdit(mapdata.id)}
        height="20"
        width="10"
        class="hover-accent"
      >
        <Edit2Icon size="14" class="invert" />
      </LayoutButton>

      <LayoutButton
        action={() => shareWordmap(mapdata.id)}
        height="20"
        width="10"
        class="hover-accent"
      >
        <ShareIcon size="14" class="invert" />
      </LayoutButton>

      <LayoutButton
        action={() => deleteDialog.ask()}
        height="20"
        width="10"
        class="hover-warn"
      >
        <Trash2Icon size="14" class="invert" />
      </LayoutButton>
    </div>
  </div>
</div>

<DeleteDialog {mapdata} bind:this={deleteDialog} />
