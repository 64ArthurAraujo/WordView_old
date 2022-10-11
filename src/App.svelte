<script lang="ts">
  import Editor from "./components/editor/Editor.svelte";
  import WordmapCreator from "./components/home/overlays/WordmapCreator.svelte";
  import Topbar from "./components/home/elements/Topbar.svelte";
  import WordmapContainer from "./components/home/WordmapContainer.svelte";
  import { notificationMessage } from "./stores/overlay";
  import PlusButton from "./components/home/elements/PlusButton.svelte";
  import WordmapPlayer from "./components/editor/WordmapPlayer.svelte";
  import { wordmaps } from "./stores/wordmap";
  import ShinyPlusButton from "./components/home/elements/ShinyPlusButton.svelte";
  import RecentOpenedWordmaps from "./components/home/elements/RecentOpenedWordmaps.svelte";
  import NotificationContainer from "./components/global/overlay/NotificationContainer.svelte";
</script>

<main>
  <Topbar>
    <div class="h-full flex items-center justify-centers pl-4 flex-row">
      <h2 class="text-white-regular text-xl select-none">
        <b>WordView</b>
      </h2>
    </div>
  </Topbar>

  <RecentOpenedWordmaps />
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
