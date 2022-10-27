<script lang="ts">
  let clazz: string = "";

  export { clazz as class };
</script>

<div class={`h-full items-center justify-centers row ${clazz ?? ""}`}>
  <slot />
</div>
