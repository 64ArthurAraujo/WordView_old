<script lang="ts">
  export let width: string;
  export let height: string;
  export let action: Function;

  let clazz: string = "";

  export { clazz as class };
</script>

<div
  on:click={() => action()}
  class={`w-${width} h-${height} border-2 px-2 py-2 bg-black-light hover:cursor-pointer flex transition-colors content-center items-center justify-center rounded-md ${
    clazz ?? ""
  }`}
>
  <slot />
</div>
