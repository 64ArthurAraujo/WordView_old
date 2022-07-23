<script lang="ts">
import { fade } from "svelte/transition";
</script>

<div transition:fade 
class="z-10 h-screen w-screen fixed top-0 left-0 flex justify-center items-center bg-black-lighter bg-opacity-50">

<slot/>
</div>
