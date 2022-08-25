<script lang="ts">
  import { fade } from "svelte/transition";
  import { isNotificationShown } from "../../stores/overlay";
</script>

{#if $isNotificationShown}
  <div
    transition:fade={{ duration: 250 }}
    class=" z-20 h-full w-full fixed top-0 left-0 justify-center flex select-none"
  >
    <div
      class="h-12 w-1/4 bg-accent-darker rounded-xl flex mt-4 text-center justify-center items-center"
    >
      <p class="text-white-regular">
        <b><slot /></b>
      </p>
    </div>
  </div>
{/if}
