<script lang="ts">
  import { fly } from "svelte/transition";

  let clazz: string = "";

  export { clazz as class };
</script>

<div
  in:fly={{ duration: 500, x: 1375 }}
  out:fly={{ duration: 500, x: -1375 }}
  class={`z-10 h-screen w-screen fixed top-0 left-0 center bg-black-lighter bg-opacity-50 ${
    clazz || ""
  }`}
>
  <slot />
</div>
