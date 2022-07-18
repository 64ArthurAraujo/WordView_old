<script lang="ts">
    export let direction: string = "left";
</script>

<div class={`bg-black-focus h-full w-1/5 fixed ${direction}-0`}>
    <slot/>
</div>
