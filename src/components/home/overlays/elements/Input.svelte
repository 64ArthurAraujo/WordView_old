<script lang="ts">
  export let type: string = "text";
  export let placeholder: string;
  export let value: string = "";
  export let id: string = "";
  export let maxlength: number = 255;

  let clazz = "";
  export { clazz as class };
</script>

<input
  required
  {id}
  {type}
  {placeholder}
  {value}
  {maxlength}
  class={`rounded-md ui-text outline-none px-4 h-12 w-56 border-2 ui-element border-black-divborder ${
    clazz || ""
  }`}
/>
