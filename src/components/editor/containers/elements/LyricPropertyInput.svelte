<script lang="ts">
  import { CornerUpRightIcon } from "svelte-feather-icons";
  import { fetchWordmaps } from "../../../../actions/wordmap";
  import {
    currentLyricPoint,
    currentLyricPosition,
  } from "../../../../stores/overlay";
  import {
    saveCurrentWordmap,
    currentWordmap,
  } from "../../../../stores/wordmap/wordmap";
  import { keyPressedIs } from "../../../../util/event";
  import LayoutButton from "../../../global/buttons/LayoutButton.svelte";
  import {
    changePropertyFromCurrentLyricPoint,
    LyricProperty,
  } from "./util/input";

  export let type: string = "text";
  export let placeholder: string;
  export let value: string = "";
  export let id: string = "";
  export let property: LyricProperty;
  export let disabled: boolean = false;

  let input: HTMLInputElement;

  async function onEnterPressed(event: KeyboardEvent) {
    if (keyPressedIs("Enter", event)) {
      trigger();
    }
  }

  function trigger() {
    console.log("Updating lyric...");

    let indexToChange = currentLyricPosition();

    console.log("Index to Change : " + indexToChange);

    changePropertyFromCurrentLyricPoint(property, input.value);

    $currentWordmap.lyrics[indexToChange] = $currentLyricPoint;

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
