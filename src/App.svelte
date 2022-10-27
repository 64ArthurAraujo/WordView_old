<script lang="ts">
  import Editor from "./components/editor/Editor.svelte";
  import WordmapCreator from "./components/home/overlays/WordmapCreator.svelte";
  import Topbar from "./components/home/elements/Topbar.svelte";
  import WordmapContainer from "./components/home/WordmapContainer.svelte";
  import { notificationMessage } from "./stores/overlay";
  import PlusButton from "./components/home/elements/PlusButton.svelte";
  import WordmapPlayer from "./components/editor/WordmapPlayer.svelte";
  import { wordmaps } from "./stores/wordmap/wordmap";
  import ShinyPlusButton from "./components/home/elements/ShinyPlusButton.svelte";
  import RecentWordmaps from "./components/home/RecentWordmaps.svelte";
  import NotificationContainer from "./components/global/overlay/NotificationContainer.svelte";
</script>

<main>
  <Topbar>
    <div class="h-full items-center justify-centers pl-4 row">
      <img
        src="../assets/wordview-title.png"
        class="h-2/3 w-auto select-none"
      />
    </div>
  </Topbar>

  <RecentWordmaps />
  <WordmapContainer />

  {#if $wordmaps.length <= 0}
    <ShinyPlusButton />
  {:else}
    <PlusButton />
  {/if}

  <WordmapCreator />
  <WordmapPlayer />
  <Editor />
  <NotificationContainer>
    {$notificationMessage}
  </NotificationContainer>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer components {
    .center {
      @apply flex;
      @apply justify-center;
      @apply content-center;
      @apply items-center;
    }

    .full {
      @apply h-full;
      @apply w-full;
    }

    .screen {
      @apply h-screen;
      @apply w-screen;
    }

    .row {
      @apply flex;
      @apply flex-row;
    }

    .column {
      @apply flex;
      @apply flex-col;
    }

    .ui-text {
      @apply text-white-regular;
      @apply select-none;
    }

    .ui-text-darker {
      @apply text-white-darker;
      @apply select-none;
    }

    .ui-element {
      @apply bg-black-light;
      @apply hover:bg-black-select;
      @apply transition-colors;
    }

    .hover-accent {
      @apply hover:bg-accent-regular;
    }

    .hover-warn {
      @apply hover:bg-red-regular;
    }
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #1b1a1a;
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
