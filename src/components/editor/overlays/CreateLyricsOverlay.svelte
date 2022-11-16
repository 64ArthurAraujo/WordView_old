<script lang="ts">
  import Input from "../../home/overlays/elements/Input.svelte";
  import PromptDialog from "../../global/elements/PromptDialog.svelte";
  import LayoutButton from "../../global/buttons/LayoutButton.svelte";
  import { input, inputIsEmpty } from "../../../util/web";
  import { notify } from "../../../stores/overlay";
  import { currentWordmap, isThereLyricsAt, saveCurrentWordmap } from "../../../stores/wordmap";
  import type { LyricPoint } from "../../../types/wordmap";

  export let showingCreateLyrics: boolean;
  export let currentAudioTime: number;

  export let hideCreateLyrics: Function;

  function createLyrics() {
    let lyrics = input("lyrics");
    let location = input("location");

    if (inputIsEmpty(lyrics) || inputIsEmpty(location)) {
      notify(1000, "Please fill all the inputs!");
      return;
    }

    if (isThereLyricsAt(Number.parseFloat(location.value))) {
      notify(2500, `There is already a lyric at '${location.value}'`)
      return;
    }

    if ($currentWordmap.lyrics == undefined) {
      $currentWordmap.lyrics = new Array<LyricPoint>();
    }

    $currentWordmap.lyrics.push({
      timelineLocation: Number.parseFloat(location.value),
      text: lyrics.value,
    });

    saveCurrentWordmap();
    hideCreateLyrics();
  }
</script>

{#if showingCreateLyrics}
  <PromptDialog title="New Lyrics Text" leaveAction={hideCreateLyrics}>
    <div class="column">
      <Input type="text" placeholder="Lyrics..." id="lyrics" class="mb-4" />
      <Input
        type="text"
        placeholder="Location..."
        id="location"
        value={currentAudioTime.toString()}
      />
    </div>

    <svelte:fragment slot="footer">
      <LayoutButton
        action={createLyrics}
        width="72"
        height="10"
        class="hover-accent w-72"
      >
        <p class="ui-text-darker">Insert lyrics</p>
      </LayoutButton>
    </svelte:fragment>
  </PromptDialog>
{/if}
