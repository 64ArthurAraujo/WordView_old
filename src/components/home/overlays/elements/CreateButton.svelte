<script lang="ts">
  import { createWordmap } from "../../../../actions/wordmap";
  import { notify } from "../../../../stores/overlay";
  import {
    image,
    imageHasNoSource,
    input,
    inputIsEmpty,
    inputValueNotDefined,
  } from "../../../../util/web";
  import LayoutButton from "../../../global/buttons/LayoutButton.svelte";

  function checkInfoComplete() {
    const title = input("wordmap-title");
    const audio = input("wordmap-audio-pick");
    const audioType = input("wordmap-audio-type");

    if (
      inputIsEmpty(title) ||
      inputValueNotDefined(title) ||
      inputIsEmpty(audio) ||
      inputValueNotDefined(audio) ||
      audioType.value === "undefined"
    ) {
      notify(1500, "Please fill all the inputs!");
      return false;
    }

    return true;
  }

  function wordmapInfo() {
    const title = input("wordmap-title");
    const description = input("wordmap-description");
    const audio = input("wordmap-audio-pick");
    const audioType = input("wordmap-audio-type");

    return {
      title: title.value,
      description: description.value,
      audio: audio.value,
      audioType: audioType.value,
    };
  }

  function makeWordmap() {
    if (!checkInfoComplete()) return;

    const { title, description, audio, audioType } = wordmapInfo();

    if (audioType !== "audio/mpeg") {
      notify(1000, `Invalid audio type: ${audioType}`);
      return;
    }

    const thumbInput = image("preview");

    if (imageHasNoSource(thumbInput)) {
      createWordmap(audio, title, description ?? "", "");
    } else {
      createWordmap(audio, title, description ?? "", thumbInput.src);
    }
  }
</script>

<LayoutButton height="12" width="2/5" action={makeWordmap} class="hover-accent">
  <h4 class="text-white-darker">Create</h4>
</LayoutButton>
