<script lang="ts">
    import { createWordmap } from "../../actions";
    import { openFilePrompt } from "../../actions/open-file-prompt";
    import { showNotification } from "../../stores/overlay";

    function checkInfoComplete() {
        const title = document.getElementById(
            "wordmap-title"
        ) as HTMLInputElement;

        const description = document.getElementById(
            "wordmap-description"
        ) as HTMLInputElement;

        if (
            title.value == "" ||
            description.value == "" ||
            !title.value ||
            !description.value
        ) {
            showNotification(1250, "Please fill all the inputs!");

            return false;
        }

        return true;
    }

    function wordmapInfo() {
        const title = document.getElementById(
            "wordmap-title"
        ) as HTMLInputElement;

        const description = document.getElementById(
            "wordmap-description"
        ) as HTMLInputElement;

        return { title: title.value, description: description.value };
    }

    async function setAudio() {
        if (!checkInfoComplete()) return;

        const { title, description } = wordmapInfo();

        const audio = await openFilePrompt();

        if (audio.type !== "audio/mpeg") {
            showNotification(1000, "Invalid audio type!");
            return;
        }

        createWordmap(audio.path, title, description);
    }
</script>

<div
    on:click={() => setAudio()}
    class="border-none text-center justify-center items-center flex rounded-md outline-none px-4 h-12 w-1/2 select-none bg-black-lightest hover:bg-accent-darker hover:cursor-pointer transition-colors"
>
    <h4 class="text-white-darker">Open Audio File...</h4>
</div>
