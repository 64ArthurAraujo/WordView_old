<script lang="ts">
import Sidebar from "./components/Sidebar.svelte";
</script>


<body class="bg-back-black">
    
    <main>
        <Sidebar />
    </main>

</body>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	html, body { margin: 0; padding: 0 }
</style>
