<script lang="ts">
    import { PlayIcon } from "svelte-feather-icons";
    import { PauseIcon } from "svelte-feather-icons";

    let audio: HTMLAudioElement;

    function play() {
        audio = document.getElementById("editing-audio") as HTMLAudioElement;

        if (!audio.paused) {
            audio.pause();
        } else {
            audio.play();
        }
    }
</script>

<div
    on:click={() => play()}
    class="h-10 w-10 bg-black-lightest rounded-full hover:cursor-pointer hover:bg-accent-regular transition-colors flex items-center content-center justify-center mx-4"
>
    {#if !audio}
        <PlayIcon size="14" class="invert" />
    {:else if audio?.paused}
        <PlayIcon size="14" class="invert" />
    {:else}
        <PauseIcon size="14" class="invert" />
    {/if}
</div>
