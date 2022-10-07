<script lang="ts">
  import { scale } from "svelte/transition";
  import type { WordMap } from "../../actions/types/wordmap";
  import { deleteWordmap } from "../../actions/wordmap";
  import LayoutButton from "../util/LayoutButton.svelte";
  import OverlayContainer from "../util/OverlayContainer.svelte";

  export let mapdata: WordMap;

  let askDeleteShown: boolean = false;

  export function ask() {
    askDeleteShown = true;
  }

  function close() {
    askDeleteShown = false;
  }

  function deleteConfirmed() {
    askDeleteShown = false;
    deleteWordmap(mapdata.id);
  }
</script>

{#if askDeleteShown}
  <OverlayContainer class="z-20">
    <div
      transition:scale={{ duration: 500 }}
      class="h-44 w-1.5/4 bg-black-lightest rounded-md absolute"
    >
      <div
        class="flex content-center items-center justify-center w-full mt-4 px-4"
      >
        <h1 class="text-white-regular select-none">
          <b>Do you want to delete "{mapdata.title}"?</b>
        </h1>
      </div>

      <div class=" mt-20 flex content-center items-center justify-around">
        <LayoutButton
          action={() => close()}
          width="20"
          height="10"
          class="hover:bg-black-lightest"
        >
          <p class="text-white-darker select-none">No</p>
        </LayoutButton>

        <LayoutButton
          action={deleteConfirmed}
          width="20"
          height="10"
          class="hover:bg-red-regular"
        >
          <p class="text-white-darker select-none">Yes</p>
        </LayoutButton>
      </div>
    </div>
  </OverlayContainer>
{/if}
