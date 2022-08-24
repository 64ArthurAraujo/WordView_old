<script lang="ts">
    import { SkipBackIcon } from "svelte-feather-icons";

    let audio: HTMLAudioElement;

    function back() {
        audio = document.getElementById("editing-audio") as HTMLAudioElement;

        audio.currentTime -= 5;
    }
</script>

<div
    on:click={() => back()}
    class="h-9 w-9 border-2 bg-black-light rounded-full hover:cursor-pointer hover:bg-accent-regular transition-colors flex items-center content-center justify-center"
>
    <SkipBackIcon size="13" class="invert" />
</div>
