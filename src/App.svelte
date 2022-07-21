<script lang="ts">
import Editor from "./routes/Editor.svelte";
import Home from "./routes/Home.svelte";
import { specifiedState, State } from "./actions/state";

export let state: State = specifiedState() ?? State.home;
</script>

<main>

    {#if state == State.home}
        <Home />
    {:else if state == State.editor}
        <Editor />
    {/if}

</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	html, body { margin: 0; padding: 0 }
    body { 
        background-color: #1B1A1A; 
    }

    ::-webkit-scrollbar {
        display: none;
    }
</style>
