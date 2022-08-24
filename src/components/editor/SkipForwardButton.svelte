<script lang="ts">
    import { SkipForwardIcon } from "svelte-feather-icons";

    let audio: HTMLAudioElement;

    function forward() {
        audio = document.getElementById("editing-audio") as HTMLAudioElement;

        audio.currentTime += 5;
    }
</script>

<div
    on:click={() => forward()}
    class="h-9 w-9 border-2 bg-black-light rounded-full hover:cursor-pointer hover:bg-accent-regular transition-colors flex items-center content-center justify-center"
>
    <SkipForwardIcon size="13" class="invert" />
</div>
