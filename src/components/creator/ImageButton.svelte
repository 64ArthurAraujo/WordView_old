<script lang="ts">
    import { openFilePrompt } from "../../actions/open-file-prompt";
    import { showNotification } from "../../stores/overlay";

    let isImageSelected = false;
    let displayImage = "none";

    function isFileImage(file: File) {
        return file.type.split("/")[0] === "image";
    }

    async function loadImage() {
        const image = await openFilePrompt();

        if (!isFileImage(image)) {
            showNotification(800, "Invalid image file!");
            return;
        }

        isImageSelected = true;

        const preview = document.getElementById("preview") as HTMLImageElement;
        preview.src = image.path;

        displayImage = "block";
    }
</script>

<div
    on:click={() => loadImage()}
    class=" h-28 w-28 bg-black-lightest mx-3 rounded hover:bg-black-select hover:cursor-pointer content-center items-center justify-center flex overflow-hidden"
>
    {#if !isImageSelected}
        <p class="text-white-darker absolute">Image...</p>
    {/if}

    <!-- svelte-ignore a11y-missing-attribute -->
    <img
        id="preview"
        class="h-full w-full"
        style={`display: ${displayImage};`}
    />
</div>
