<script lang="ts">
  import { CornerUpRightIcon } from "svelte-feather-icons";
  import { fetchWordmaps } from "../../../../actions/wordmap";
  import {
    saveCurrentWordmap,
    currentPoint,
    currentWordmap,
    currentPointPosition,
  } from "../../../../stores/wordmap/wordmap";
  import { keyPressedIs } from "../../../../util/event";
  import LayoutButton from "../../../global/buttons/LayoutButton.svelte";
  import {
    changePropertyFromCurrentPoint,
    WordMapProperty,
  } from "./util/input";

  export let type: string = "text";
  export let placeholder: string;
  export let value: string = "";
  export let id: string = "";
  export let property: WordMapProperty;
  export let disabled: boolean = false;

  let input: HTMLInputElement;

  async function onEnterPressed(event: KeyboardEvent) {
    if (keyPressedIs("Enter", event)) {
      trigger();
    }
  }

  function trigger() {
    console.log("Updating input...");

    let indexToChange = currentPointPosition();

    console.log("Index to Change : " + indexToChange);

    changePropertyFromCurrentPoint(property, input.value);

    $currentWordmap.points[indexToChange] = $currentPoint;

    saveCurrentWordmap();
    fetchWordmaps();
  }

  let clazz = "";
  export { clazz as class };
</script>

<div class="row">
  <input
    required
    {id}
    {type}
    {placeholder}
    {value}
    {disabled}
    bind:this={input}
    on:keydown={onEnterPressed}
    class={`rounded-md ui-text outline-none h-8 w-full text-sm px-4 py-2 border-2 ui-element border-black-divborder  ${
      clazz || ""
    }`}
  />

  <LayoutButton width="4" height="4" action={trigger} class="hover-accent">
    <CornerUpRightIcon size="12" class="invert" />
  </LayoutButton>
</div>
