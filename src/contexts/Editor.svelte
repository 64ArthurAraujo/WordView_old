<script lang="ts">
    import Sidebar from "../components/Sidebar.svelte";
    import BottomBar from "../components/editor/BottomBar.svelte";
    import OverlayContainer from "../components/OverlayContainer.svelte";
    import { isEditorOpen } from "../stores/overlay";
    import { ArrowLeftIcon } from "svelte-feather-icons";
    import { currentWordmap } from "../stores/overlay";
</script>

<OverlayContainer>
    <div class="h-screen w-screen bg-black-light" />

    <Sidebar>
        <div
            on:click={() => isEditorOpen.set(false)}
            class="bg-black-lightest hover:bg-accent-darker transition-colors hover:cursor-pointer mt-2 ml-2 px-2 py-2 border-none fixed rounded-full"
        >
            <ArrowLeftIcon size="14" class="invert" />
        </div>
    </Sidebar>

    <Sidebar direction="right" />

    <BottomBar>
        <div
            class="bg-black-lightest fixed h-1 w-full hover:h-2 hover:cursor-pointer transition-all"
        />

        <div
            class="bottom-0 h-full w-full flex items-center content-center justify-start flex-row"
        >
            <div class=" h-20 w-20 bg-black-lightest mx-3 rounded" />

            <div
                class="h-20 items-center content-center justify-start flex-col"
            >
                <h3 class="text-white-regular select-none">
                    <b>{$currentWordmap.title}</b>
                </h3>

                <p class="text-white-darker select-none">
                    {$currentWordmap.description}
                </p>
            </div>

            <!-- photo area -->
        </div>
    </BottomBar>
</OverlayContainer>
