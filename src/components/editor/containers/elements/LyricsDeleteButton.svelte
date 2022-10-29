<script lang="ts">
  import { tick } from "svelte";
  import { Trash2Icon } from "svelte-feather-icons";
  import { fetchWordmaps } from "../../../../actions/wordmap";
  import {
    currentLyricPosition,
    currentLyricPoint,
    notify,
  } from "../../../../stores/overlay";
  import {
    currentWordmap,
    saveCurrentWordmap,
    currentPoint,
  } from "../../../../stores/wordmap/wordmap";
  import { audio } from "../../../../util/web";
  import LayoutButton from "../../../global/buttons/LayoutButton.svelte";

  async function action() {
    let currentPointIndexLocation = currentLyricPosition();
    $currentWordmap.lyrics.splice(currentPointIndexLocation, 1);

    saveCurrentWordmap();
    fetchWordmaps();

    await tick();

    audio("editing-audio").currentTime =
      $currentLyricPoint.timelineLocation ?? 0;

    notify(2500, "Lyric deleted!");
  }
</script>

{#if $currentPoint.type != undefined}
  <LayoutButton {action} width="2.5" height="2.5" class="hover-warn center">
    <Trash2Icon size="15" class="invert mr-2" />
    <p class="ui-text-darker">Delete Lyric</p>
  </LayoutButton>
{/if}
