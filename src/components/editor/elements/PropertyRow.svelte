<script lang="ts">
  import PropertyInput from "./PropertyInput.svelte";

  export let title: string;
  export let inputValue: string;
  export let inputPlaceholder: string;
  export let property:
    | "fadeIn"
    | "fadeOut"
    | "path"
    | "timelineLocation"
    | "type";
</script>

<small class="text-white-darker px-4 py-2">{title}</small>
<br />

<PropertyInput value={inputValue} placeholder={inputPlaceholder} {property} />
