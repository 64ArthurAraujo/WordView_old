<script lang="ts">
  import { ArrowLeftIcon } from "svelte-feather-icons";
  import CircleButton from "./CircleButton.svelte";

  export let action: Function;
</script>

<CircleButton height="10" width="10" {action} class="top-4 left-4 absolute">
  <ArrowLeftIcon size="14" class="invert" />
</CircleButton>
