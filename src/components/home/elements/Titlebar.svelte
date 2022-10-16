<script lang="ts">
  import { scale, slide } from "svelte/transition";

  let expanded = true;

  export let header: string;
  let clazz: string = "";

  export { clazz as class };
</script>

<div class={`${clazz ?? ""}`} transition:scale={{ delay: 250, duration: 250 }}>
  <div class="w-full center">
    <div class={`w-10/12 flex flex-row`}>
      <p class="ui-text text-lg py-1 row w-10/12"><b>{header}</b></p>
    </div>
  </div>

  {#if expanded}
    <div transition:slide={{ duration: 250 }} class="w-full center column">
      <slot />
    </div>
  {/if}
</div>
