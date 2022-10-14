<script lang="ts">
  import { fetchWordmaps } from "../../../../actions/wordmap";
  import {
    saveCurrentWordmap,
    currentPoint,
    currentWordmap,
    currentPointPosition,
  } from "../../../../stores/wordmap/wordmap";
  import { keyPressedIs } from "../../../../util/event";
  import {
    changePropertyFromCurrentPoint,
    WordMapProperty,
  } from "./util/input";

  export let type: string = "text";
  export let placeholder: string;
  export let value: string = "";
  export let id: string = "";
  export let property: WordMapProperty;

  let input: HTMLInputElement;

  function onEnterPressed(event: KeyboardEvent) {
    if (keyPressedIs("Enter", event)) {
      let indexToChange = currentPointPosition();

      changePropertyFromCurrentPoint(property, input.value);

      $currentWordmap.points[indexToChange] = $currentPoint;

      saveCurrentWordmap();
      fetchWordmaps();
    }
  }

  let clazz = "";
  export { clazz as class };
</script>

<input
  required
  {id}
  {type}
  {placeholder}
  {value}
  bind:this={input}
  on:keydown={onEnterPressed}
  class={`rounded-md ui-text outline-none h-8 w-full text-sm px-4 py-2 border-2 ui-element border-black-divborder  ${
    clazz || ""
  }`}
/>
