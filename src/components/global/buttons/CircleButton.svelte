<script lang="ts">
  import LayoutButton from "./LayoutButton.svelte";

  export let action: Function;
  export let onKeyDown: Function = () => {};

  export let width: string;
  export let height: string;

  let clazz: string = "";

  export { clazz as class };
</script>

<LayoutButton
  {width}
  {height}
  {action}
  {onKeyDown}
  class={`hover-accent rounded-full ${clazz ?? ""}`}
>
  <slot />
</LayoutButton>
