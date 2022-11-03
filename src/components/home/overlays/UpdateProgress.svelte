<script lang="ts">
  import {
    updateProgressCurrentState,
    updateProgressIsOpen,
  } from "../../../stores/overlay";
  import GenericDialog from "../../global/elements/GenericDialog.svelte";
  import { Circle } from "svelte-loading-spinners";
</script>

{#if $updateProgressIsOpen}
  <GenericDialog class="p-4">
    <div class="center full column">
      <Circle size="60" color="#8951FF" unit="px" duration="1s" />
      <h1 class="ui-text mt-4">{$updateProgressCurrentState}</h1>
    </div>
  </GenericDialog>
{/if}
