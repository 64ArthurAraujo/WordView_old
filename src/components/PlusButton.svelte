<script lang="ts">
  import { PlusIcon } from "svelte-feather-icons";
  import { isWordmapCreatorOpen } from "../stores/overlay";
</script>

<div
  on:click={() => isWordmapCreatorOpen.set(true)}
  class="bg-accent-regular hover:bg-accent-darker transition-colors hover:cursor-pointer mb-4 mr-4 px-5 py-5 border-none fixed rounded-full bottom-0 right-0"
>
  <PlusIcon size="24" class="invert" />
</div>
