<script lang="ts">
  import Editor from "./components/editor/Editor.svelte";
  import WordmapCreator from "./components/home/WordmapCreator.svelte";
  import Topbar from "./components/home/Topbar.svelte";
  import WordmapContainer from "./components/home/WordmapContainer.svelte";
  import { notificationMessage } from "./stores/overlay";
  import PlusButton from "./components/home/PlusButton.svelte";
  import NotificationContainer from "./components/util/NotificationContainer.svelte";
</script>

<main>
  <Topbar>
    <div class="h-full flex items-center justify-centers pl-4">
      <h2 class="text-white-regular text-xl select-none">
        <b>WordView</b>
      </h2>
    </div>
  </Topbar>

  <WordmapContainer />
  <PlusButton />
  <WordmapCreator />
  <Editor />
  <NotificationContainer>
    {$notificationMessage}
  </NotificationContainer>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

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
