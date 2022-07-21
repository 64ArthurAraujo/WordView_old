<script lang="ts">
import PlusButton from "../components/PlusButton.svelte";
import Topbar from "../components/Topbar.svelte";
import WordmapContainer from "../components/WordmapContainer.svelte";
</script>

<Topbar>
    <div class="h-full flex items-center justify-centers pl-4">
        <h2 class="text-white text-xl select-none"><b>WordView</b></h2>
    </div>
</Topbar>

<WordmapContainer />

<PlusButton />
