<script lang="ts">
  import { PlusIcon } from "svelte-feather-icons";
  import { openWordmapCreator } from "../../stores/overlay";
</script>

<div
  on:click={openWordmapCreator}
  class="bg-accent-regular hover:bg-accent-darker transition-colors hover:cursor-pointer mb-4 mr-4 px-5 py-5 border-none fixed rounded-full bottom-0 right-0"
>
  <PlusIcon size="24" class="invert" />
</div>

<style>
  div {
    border-radius: 100%;
    position: absolute;
    animation: bounce 0.5s ease-in infinite;
    animation-fill-mode: both;
    animation-direction: alternate;
  }

  div:hover {
    animation: none;
    background-color: rgb(109 64 201 / var(--tw-bg-opacity));
  }

  @keyframes bounce {
    from {
      background-color: rgb(109 64 201 / var(--tw-bg-opacity));
    }
    to {
      background-color: rgb(137 81 255 / var(--tw-bg-opacity));
    }
  }

  :root {
    --tw-bg-opacity: 1;
  }
</style>
