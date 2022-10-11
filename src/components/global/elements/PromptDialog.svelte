<script lang="ts">
  import LeaveButton from "../buttons/LeaveButton.svelte";
  import GenericDialog from "./GenericDialog.svelte";

  export let leaveAction: Function;
  export let title: string;
</script>

<GenericDialog>
  <div class="center w-full h-fit top-4">
    <LeaveButton action={leaveAction} />

    <h2 class="flex text-white-regular mt-4">{title}</h2>
  </div>

  <div class="center row w-full mt-8">
    <slot />
  </div>

  <div class="center w-full h-fit bottom-2 mt-4">
    <slot name="footer" />
  </div>
</GenericDialog>
