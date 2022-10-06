<script lang="ts">
  import { createWordmap } from "../../../actions";
  import { openFilePrompt } from "../../../actions/open-file-prompt";
  import { notify } from "../../../stores/overlay";
  import LayoutButton from "../../util/LayoutButton.svelte";

  function checkInfoComplete() {
    const title = document.getElementById("wordmap-title") as HTMLInputElement;

    const description = document.getElementById(
      "wordmap-description"
    ) as HTMLInputElement;

    if (
      title.value == "" ||
      description.value == "" ||
      !title.value ||
      !description.value
    ) {
      notify(1000, "Please fill all the inputs!");

      return false;
    }

    return true;
  }

  function wordmapInfo() {
    const title = document.getElementById("wordmap-title") as HTMLInputElement;

    const description = document.getElementById(
      "wordmap-description"
    ) as HTMLInputElement;

    return { title: title.value, description: description.value };
  }

  async function setAudio() {
    if (!checkInfoComplete()) return;

    const { title, description } = wordmapInfo();

    const audio = await openFilePrompt();

    if (audio.type !== "audio/mpeg") {
      notify(1000, "Invalid audio type!");
      return;
    }

    const thumbInput = document.getElementById("preview") as HTMLImageElement;

    if (thumbInput.src != undefined || thumbInput.src != "") {
      createWordmap(audio.path, title, description, thumbInput.src);
    } else {
      createWordmap(audio.path, title, description);
    }
  }
</script>

<LayoutButton
  height="12"
  width="1/2"
  action={setAudio}
  class="hover:bg-accent-regular"
>
  <h4 class="text-white-darker">Open Audio File...</h4>
</LayoutButton>
