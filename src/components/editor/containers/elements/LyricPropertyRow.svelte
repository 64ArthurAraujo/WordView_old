<script lang="ts">
  import type { LyricProperty } from "./util/input";
  import LyricPropertyInput from "./LyricPropertyInput.svelte";

  export let title: string;
  export let inputValue: string;
  export let inputPlaceholder: string;
  export let property: LyricProperty;
  export let disabled: boolean = false;
</script>

<small class="ui-text-darker px-4 py-2">{title}</small>
<br class="select-none" />

<LyricPropertyInput
  value={inputValue}
  placeholder={inputPlaceholder}
  {property}
  {disabled}
/>
