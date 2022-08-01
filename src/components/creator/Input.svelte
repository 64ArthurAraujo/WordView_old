<script lang="ts">
    export let type: string = "text";
    export let placeholder: string;

    let clazz = "";
    export { clazz as class };
</script>

<input type="{type}" placeholder="{placeholder}" class={`border-none rounded-md text-white-regular outline-none px-4 h-12 w-1/3 select-none bg-black-lightest hover:bg-black-select transition-colors ${clazz || ''}`}/>
