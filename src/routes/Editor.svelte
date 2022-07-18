<script lang="ts">
import { navigate } from "../actions/state";
import { ArrowLeftIcon } from "svelte-feather-icons";

import Sidebar from "../components/Sidebar.svelte";
import BottomBar from "../components/editor/BottomBar.svelte";
</script>

<Sidebar>
    <div on:click="{() => navigate("home")}" class="bg-black-lightest hover:bg-accent-darker transition-colors hover:cursor-pointer mt-2 ml-2 px-2 py-2 border-none fixed rounded-full">
        <ArrowLeftIcon size="14" class="invert" />
    </div> 
</Sidebar>

<Sidebar direction="right" />

<BottomBar>
    <div class="bg-black-lightest fixed h-1 w-full"></div>
</BottomBar>
