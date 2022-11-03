<script lang="ts">
  import PromptDialog from "../../global/elements/PromptDialog.svelte";
  import {
    closeUpdateOverlay,
    updateOverlayIsOpen,
    updateVersion,
    updateDescription,
  } from "../../../stores/overlay";
  import appinfo from "../../../../package.json";
  import LayoutButton from "../../global/buttons/LayoutButton.svelte";
  import { update } from "../../../update";
</script>

{#if $updateOverlayIsOpen}
  <PromptDialog
    title="A new update is available"
    leaveAction={closeUpdateOverlay}
  >
    <div class="column center p-4 mb-4">
      <h1 class="ui-text text-lg">
        "{appinfo.version}" <b>-></b> "{$updateVersion}"
      </h1>

      <p class="ui-text-darker center mt-4 select-text">{$updateDescription}</p>
    </div>

    <svelte:fragment slot="footer">
      <LayoutButton width="1/2" height="12" action={update} class="hover-accent"
        ><p class="ui-text">Update</p></LayoutButton
      >
    </svelte:fragment>
  </PromptDialog>
{/if}
