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
  import LayoutButton from "./components/global/buttons/LayoutButton.svelte";
  import { fetchWordmaps } from "./actions/wordmap";
  import VerticalCenter from "./components/global/elements/VerticalCenter.svelte";
  import { checkForUpdate } from "./update";
  import { onMount } from "svelte";
  import WordViewUpdater from "./components/home/overlays/WordViewUpdater.svelte";
  import UpdateProgress from "./components/home/overlays/UpdateProgress.svelte";
  import ShowUpdateDone from "./components/home/overlays/ShowUpdateDone.svelte";
  import { LocaleString } from "./localization";

  onMount(() => {
    checkForUpdate();
  });
</script>

<main>
  <Topbar>
    <VerticalCenter class="pl-4 float-left">
      <img
        src="../assets/wordview-title.png"
        class="h-2/3 w-auto select-none"
      />
    </VerticalCenter>

    <VerticalCenter class="pr-4 float-right">
      <LayoutButton
        class="float-right"
        width="32"
        height="8"
        action={fetchWordmaps}
        ><p class="ui-text">{LocaleString("Refresh songs")}</p></LayoutButton
      >
    </VerticalCenter>
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

  <WordViewUpdater />
  <UpdateProgress />
  <ShowUpdateDone />

  <NotificationContainer>
    {$notificationMessage}
  </NotificationContainer>
</main>

<style lang="postcss" global>
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Text&display=swap");

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

  * {
    font-family: "Red Hat Text", sans-serif;
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
