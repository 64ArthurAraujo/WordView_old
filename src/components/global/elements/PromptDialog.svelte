<script lang="ts">
  import LeaveButton from "../buttons/LeaveButton.svelte";
  import GenericDialog from "./GenericDialog.svelte";

  export let leaveAction: Function;
  export let title: string;
</script>

<GenericDialog>
  <div class="flex w-full h-fit top-4 items-center justify-center">
    <LeaveButton action={leaveAction} />

    <h2 class="flex text-white-regular mt-4">{title}</h2>
  </div>

  <div
    class="flex flex-column items-center content-center justify-center w-full mt-8"
  >
    <slot />
  </div>

  <div class="flex w-full h-fit bottom-2 items-center justify-center mt-4">
    <slot name="footer" />
  </div>
</GenericDialog>
