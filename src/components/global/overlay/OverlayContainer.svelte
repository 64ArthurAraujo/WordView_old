<script lang="ts">
  import { fade } from "svelte/transition";

  let clazz: string = "";

  export { clazz as class };
</script>

<div
  transition:fade={{ duration: 250 }}
  class={`z-10 backdrop-blur-sm screen fixed top-0 left-0 center bg-black-lighter bg-opacity-50 ${
    clazz || ""
  }`}
>
  <slot />
</div>
