<script lang="ts">
  export let width: string;
  export let height: string;

  export let action: Function;
  export let onKeyDown: Function = () => {};

  let clazz: string = "";

  export { clazz as class };
</script>

<div
  on:click={() => action()}
  on:keydown={() => onKeyDown()}
  class={`w-${width} h-${height} border-2 px-2 py-2 ui-element hover:cursor-pointer center rounded-md ${
    clazz ?? ""
  }`}
>
  <slot />
</div>
