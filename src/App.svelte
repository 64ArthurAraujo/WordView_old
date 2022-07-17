<script lang="ts">
import PlusButton from "./components/PlusButton.svelte";
import Sidebar from "./components/Sidebar.svelte";
import { onMount } from "svelte";
import { fetchWordmaps } from "./actions";

onMount(() => {
    fetchWordmaps();
});
</script>

<body class="bg-black-light">
    
    <main>
        <Sidebar />
        <PlusButton />
    </main>

</body>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	html, body { margin: 0; padding: 0 }
</style>
