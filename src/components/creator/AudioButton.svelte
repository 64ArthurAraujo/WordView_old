<script lang="ts">
import { openFilePrompt } from "../../actions/open-file-prompt";
</script>

<div on:click="{() => openFilePrompt()}" class="border-none text-center justify-center items-center flex rounded-md outline-none px-4 h-12 w-1/2 select-none bg-black-lightest hover:bg-accent-darker hover:cursor-pointer transition-colors">
    <h4 class="text-white-darker">Open Audio File...</h4>
</div>