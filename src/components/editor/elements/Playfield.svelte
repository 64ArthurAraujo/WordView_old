<script lang="ts">
  let proportions = "w-1/2 h-1/2";

  export let isPlayer = false;

  if (isPlayer) {
    proportions = "w-4/5 h-4/5";
  }
</script>

<div class="absolute w-full h-full center">
  <div
    class={`bg-black-lightest ${proportions} mb-28 rounded-md overflow-hidden shadow-lg center`}
  >
    <slot />
  </div>
</div>
