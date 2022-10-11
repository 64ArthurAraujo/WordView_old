<script lang="ts">
  import { tick } from "svelte";
  import { Trash2Icon } from "svelte-feather-icons";
  import { fetchWordmaps } from "../../../../actions/wordmap";
  import { notify } from "../../../../stores/overlay";
  import {
    currentPointPosition,
    currentWordmap,
    saveCurrentWordmap,
    currentPoint,
  } from "../../../../stores/wordmap";
  import { audio } from "../../../../util/web";
  import LayoutButton from "../../../global/buttons/LayoutButton.svelte";

  async function action() {
    let currentPointIndexLocation = currentPointPosition();
    $currentWordmap.points.splice(currentPointIndexLocation, 1);

    saveCurrentWordmap();
    fetchWordmaps();

    await tick();

    audio("editing-audio").currentTime = $currentPoint.timelineLocation ?? 0;
    notify(2500, "Point deleted!");
  }
</script>

{#if $currentPoint.type != undefined}
  <LayoutButton {action} width="2.5" height="2.5" class="hover-warn center">
    <Trash2Icon size="15" class="invert mr-2" />
    <p class="ui-text-darker">Delete Point</p>
  </LayoutButton>
{/if}
