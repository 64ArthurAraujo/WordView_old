<script lang="ts">
  import { AlertTriangleIcon } from "svelte-feather-icons";
  import { fade } from "svelte/transition";
  import { isNotificationShown } from "../../stores/overlay";

  function hide() {
    isNotificationShown.set(false);
  }
</script>

{#if $isNotificationShown}
  <div
    transition:fade={{ duration: 250 }}
    class=" z-20 h-full w-full fixed top-0 left-0 justify-center flex select-none"
    on:click={hide}
  >
    <div
      class="h-12 w-max bg-accent-darker rounded-xl flex mt-4 text-center justify-center items-center p-4"
    >
      <AlertTriangleIcon size="20" class="invert mr-4" />
      <p class="text-white-regular">
        <b><slot /></b>
      </p>
    </div>
  </div>
{/if}
