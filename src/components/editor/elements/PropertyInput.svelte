<script lang="ts">
  import { fetchWordmaps } from "../../../actions/wordmap";
  import {
    saveCurrentWordmap,
    currentPoint,
    currentWordmap,
  } from "../../../stores/wordmap";

  export let type: string = "text";
  export let placeholder: string;
  export let value: string = "";
  export let id: string = "";
  export let property:
    | "fadeIn"
    | "fadeOut"
    | "path"
    | "timelineLocation"
    | "type";

  let input: HTMLInputElement;

  function onEnterPressed(event: KeyboardEvent) {
    if (event.code == "Enter") {
      let indexToChange;

      for (let i = 0; i < $currentWordmap.points.length; i++) {
        let point = $currentWordmap.points[i];

        if (point.timelineLocation == $currentPoint.timelineLocation) {
          indexToChange = i;
        }
      }

      switch (property) {
        case "fadeIn":
          $currentPoint.fadeIn = Number.parseFloat(input.value);
          break;

        case "fadeOut":
          $currentPoint.fadeOut = Number.parseFloat(input.value);
          break;

        case "path":
          $currentPoint.path = input.value;
          break;

        case "timelineLocation":
          $currentPoint.timelineLocation = Number.parseFloat(input.value);
          break;

        case "type":
          $currentPoint.type = "image";
          break;
      }

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
  class={`rounded-md text-white-regular outline-none h-8 w-full text-sm px-4 py-2 select-none border-2 bg-black-light border-black-divborder hover:bg-black-select transition-colors ${
    clazz || ""
  }`}
/>
