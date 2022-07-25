<script lang="ts">
    import Sidebar from "../components/Sidebar.svelte";
    import BottomBar from "../components/editor/BottomBar.svelte";
    import OverlayContainer from "../components/OverlayContainer.svelte";
    import { isEditorOpen } from "../stores/overlay";
    import { ArrowLeftIcon } from "svelte-feather-icons";
</script>

<OverlayContainer>

    <div class="h-screen w-screen bg-black-light"></div>

    <Sidebar>
        <div on:click="{() => isEditorOpen.set(false)}" class="bg-black-lightest hover:bg-accent-darker transition-colors hover:cursor-pointer mt-2 ml-2 px-2 py-2 border-none fixed rounded-full">
            <ArrowLeftIcon size="14" class="invert" />
        </div> 
    </Sidebar>
    
    <Sidebar direction="right" />
    
    <BottomBar>
        <div class="bg-black-lightest fixed h-1 w-full"></div>
    </BottomBar>    

</OverlayContainer>
