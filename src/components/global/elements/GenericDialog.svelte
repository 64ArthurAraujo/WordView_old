<script lang="ts">
  import { scale } from "svelte/transition";
  import OverlayContainer from "../overlay/OverlayContainer.svelte";

  let clazz: string = "h-2/5 w-2/5";

  export { clazz as class };
</script>

<OverlayContainer class="z-50">
  <div
    transition:scale={{ duration: 500 }}
    class={`bg-black-lightest rounded-md absolute ${clazz ?? ""}`}
  >
    <slot />
  </div>
</OverlayContainer>
