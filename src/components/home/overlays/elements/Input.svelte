<script lang="ts">
  export let type: string = "text";
  export let placeholder: string;
  export let value: string = "";
  export let id: string = "";

  let clazz = "";
  export { clazz as class };
</script>

<input
  required
  {id}
  {type}
  {placeholder}
  {value}
  class={`rounded-md ui-text outline-none px-4 h-12 w-56 border-2 bg-black-light border-black-divborder hover:bg-black-select transition-colors ${
    clazz || ""
  }`}
/>
