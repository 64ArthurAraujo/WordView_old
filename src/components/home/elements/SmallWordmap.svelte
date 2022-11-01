<script lang="ts">
  import { Edit2Icon, ShareIcon, Trash2Icon } from "svelte-feather-icons";
  import { scale } from "svelte/transition";
  import { openToEdit, openToPlay } from "../../../actions/overlay";
  import type { WordMap } from "../../../types/wordmap";
  import LayoutButton from "../../global/buttons/LayoutButton.svelte";
  import WordmapImage from "../../global/elements/WordmapImage.svelte";
  import { shareWordmap } from "./action/wordmap";

  export let mapdata: WordMap;
</script>

<div
  on:click={() => openToPlay(mapdata.id)}
  transition:scale={{ duration: 750 }}
  class="h-20 rounded-md shadow-lg w-5/12 mt-2 ui-element ml-2 bg-black-lightest hover:cursor-pointer justify-self-auto row relative"
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
        class="hover:bg-blue-regular"
      >
        <ShareIcon size="14" class="invert" />
      </LayoutButton>
    </div>
  </div>
</div>
