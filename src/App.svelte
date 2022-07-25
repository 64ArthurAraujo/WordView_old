<script lang="ts">
import Editor from "./contexts/Editor.svelte";
import WordmapCreator from "./components/creator/WordmapCreator.svelte";
import Topbar from "./components/Topbar.svelte";
import WordmapContainer from "./components/WordmapContainer.svelte";
import { isWordmapCreatorOpen, isEditorOpen } from "./stores/overlay";
import PlusButton from "./components/PlusButton.svelte";
</script>

<main>
    <Topbar>
        <div class="h-full flex items-center justify-centers pl-4">
            <h2 class="text-white-regular text-xl select-none"><b>WordView</b></h2>
        </div>
    </Topbar>
    
    <WordmapContainer />

    <PlusButton />

    {#if $isWordmapCreatorOpen }
        <WordmapCreator />
    {/if}
    
    {#if $isEditorOpen }
        <Editor />
    {/if}
    

</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	html, body { margin: 0; padding: 0 }

    body { background-color: #1B1A1A; }

    ::-webkit-scrollbar { display: none; }
</style>
