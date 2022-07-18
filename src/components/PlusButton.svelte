<script lang="ts">
    import { PlusIcon } from 'svelte-feather-icons'
    import { navigate } from '../actions/state';
</script>

<div on:click="{() => navigate("editor")}" class="bg-accent-regular hover:bg-accent-darker transition-colors hover:cursor-pointer mb-4 mr-4 px-5 py-5 border-none fixed rounded-full bottom-0 right-0">
    <PlusIcon size="24" class="invert" />
</div> 
