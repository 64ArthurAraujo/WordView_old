<script lang="ts">
  import { openFilePrompt } from "../../../../actions/open-file-prompt";
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
    const description = input("wordmap-description");

    if (
      inputIsEmpty(title) ||
      inputIsEmpty(description) ||
      inputValueNotDefined(title) ||
      inputValueNotDefined(description)
    ) {
      notify(1000, "Please fill all the inputs!");
      return false;
    }

    return true;
  }

  function wordmapInfo() {
    const title = input("wordmap-title");
    const description = input("wordmap-description");

    return { title: title.value, description: description.value };
  }

  async function setAudio() {
    if (!checkInfoComplete()) return;

    const { title, description } = wordmapInfo();

    const audio = await openFilePrompt();

    if (audio.type !== "audio/mpeg") {
      notify(1000, `Invalid audio type: ${audio.type}`);
      return;
    }

    const thumbInput = image("preview");

    if (imageHasNoSource(thumbInput)) {
      createWordmap(audio.path, title, description, "");
    } else {
      createWordmap(audio.path, title, description, thumbInput.src);
    }
  }
</script>

<LayoutButton height="12" width="1/2" action={setAudio} class="hover-accent">
  <h4 class="text-white-darker">Open Audio File...</h4>
</LayoutButton>
