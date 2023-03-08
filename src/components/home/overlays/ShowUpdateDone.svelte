<script lang="ts">
  import { updateSuccessfull } from "../../../stores/overlay";
  import GenericDialog from "../../global/elements/GenericDialog.svelte";
  import { CheckIcon } from "svelte-feather-icons";
  import LayoutButton from "../../global/buttons/LayoutButton.svelte";
</script>

{#if $updateSuccessfull}
  <GenericDialog class="p-4">
    <div class="center full column">
      <CheckIcon size="64" class="invert" />
      <h1 class="ui-text mt-4 text-center">
        Download Completed! <br />
        Your new executable is located at <br />
        <b>{process.cwd()}</b>
      </h1>

      <LayoutButton
        height="12"
        width="12"
        action={() => updateSuccessfull.set(false)}
        class="mt-4"><p class="ui-text">OK</p></LayoutButton
      >
    </div>
  </GenericDialog>
{/if}
