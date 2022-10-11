<script lang="ts">
  import LayoutButton from "../../global/buttons/LayoutButton.svelte";
  import { ChevronDownIcon, ChevronUpIcon } from "svelte-feather-icons";
  import { slide } from "svelte/transition";

  let expanded: boolean = true;

  function expand() {
    if (expanded) {
      expanded = false;
    } else expanded = true;
  }

  export let header: string;

  let clazz: string = "";

  export { clazz as class };
</script>

<div class={`${clazz ?? ""}`}>
  <div class="w-full center">
    <div class={`width-98percent bg-black-lightest rounded-sm flex flex-row`}>
      <p class="text-white-regular text-sm p-1 select-none"><b>{header}</b></p>

      <div class="w-full flex content-center justify-end items-center">
        <LayoutButton
          width="2"
          height="2"
          action={expand}
          class="hover:bg-black-lightest mr-1"
        >
          {#if expanded}
            <ChevronUpIcon size="12" class="invert" />
          {:else}
            <ChevronDownIcon size="12" class="invert" />
          {/if}
        </LayoutButton>
      </div>
    </div>
  </div>

  {#if expanded}
    <div transition:slide={{ duration: 500 }} class="w-full center column">
      <slot />
    </div>
  {/if}
</div>

<style>
  .width-98percent {
    width: 98%;
  }
</style>
