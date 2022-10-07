<script lang="ts">
  import { PenToolIcon } from "svelte-feather-icons";
  import LayoutButton from "../../util/LayoutButton.svelte";

  export let action: Function;
</script>

<LayoutButton
  {action}
  width="2.5"
  height="2.5"
  class="hover:bg-black-select flex items-center justify-center content-center"
>
  <PenToolIcon size="15" class="invert mr-2" />
  <p class="text-white-darker select-none">Doodle</p>
</LayoutButton>
