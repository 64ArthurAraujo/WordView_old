<script lang="ts">
  import PropertyInput from "./PropertyInput.svelte";
  import { currentPoint } from "../../../../stores/wordmap/wordmap";
  import type { WordMapProperty } from "./util/input";

  export let title: string;
  export let inputValue: string;
  export let inputPlaceholder: string;
  export let property: WordMapProperty;
</script>

<small class="ui-text-darker px-4 py-2">{title}</small>
<br class="select-none" />

<PropertyInput value={inputValue} placeholder={inputPlaceholder} {property} />
