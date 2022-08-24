<script lang="ts">
    import { isWordmapCreatorOpen } from "../../stores/overlay";
    import { ArrowLeftIcon } from "svelte-feather-icons";
    import { scale } from "svelte/transition";
    import OverlayContainer from "../OverlayContainer.svelte";
    import Input from "./Input.svelte";
    import AudioButton from "./AudioButton.svelte";
    import ImageButton from "./ImageButton.svelte";
</script>

<OverlayContainer>
    <div
        transition:scale={{ duration: 500 }}
        class="z-30 h-3/4 w-3/4 bg-black-lighter rounded-md relative"
    >
        <div class="flex w-full h-fit top-4 items-center justify-center">
            <div
                on:click={() => isWordmapCreatorOpen.set(false)}
                class="absolute top-4 left-4 bg-black-lightest hover:bg-accent-regular transition-colors rounded-full px-2 py-2 hover:cursor-pointer"
            >
                <ArrowLeftIcon size="14" class="invert" />
            </div>

            <h2 class="flex text-white-regular mt-4">New Wordmap</h2>
        </div>

        <div
            class="flex flex-row items-center content-center justify-center w-full mt-8"
        >
            <ImageButton />

            <div class="flex flex-col items-center">
                <Input id="wordmap-title" placeholder="Title" />
                <Input
                    id="wordmap-description"
                    placeholder="Description"
                    class="mt-4"
                />
            </div>
        </div>

        <div class="flex mt-8 flex-col items-center">
            <AudioButton />
        </div>
    </div>
</OverlayContainer>
