<script lang="ts">
import Editor from "./routes/Editor.svelte";
import Home from "./routes/Home.svelte";
import { onMount } from "svelte";
import { fetchWordmaps } from "./actions";
import { specifiedState, State } from "./actions/state";

export let state: State = specifiedState() ?? State.home;

onMount(() => {
    fetchWordmaps();
});
</script>

<body class="bg-black-light">
    <main>

        {#if state == State.home}
            <Home />
        {:else if state == State.editor}
            <Editor />
        {/if}

    </main>
</body>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	html, body { margin: 0; padding: 0 }
</style>
