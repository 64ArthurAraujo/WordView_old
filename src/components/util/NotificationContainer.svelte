<script lang="ts">
    import { slide } from "svelte/transition";
</script>

<div
    transition:slide
    class="z-10 h-screen w-screen fixed top-0 left-0 flex justify-center items-center"
>
    <slot />
</div>
