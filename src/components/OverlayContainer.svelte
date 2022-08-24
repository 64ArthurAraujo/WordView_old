<script lang="ts">
    import { fade } from "svelte/transition";

    let clazz: string = "";

    export { clazz as class };
</script>

<div
    transition:fade={{ duration: 250 }}
    class={`z-10 h-screen w-screen fixed top-0 left-0 flex justify-center items-center bg-black-lighter bg-opacity-50 ${
        clazz || ""
    }`}
>
    <slot />
</div>
