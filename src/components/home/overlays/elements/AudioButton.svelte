<script lang="ts">
  import { openFilePrompt } from "../../../../actions/open-file-prompt";
  import LayoutButton from "../../../global/buttons/LayoutButton.svelte";

  let selectedSource: string = undefined;
  let audioType: string;

  async function setAudio() {
    const audio = await openFilePrompt();
    audioType = audio.type;
    selectedSource = audio.path;
  }
</script>

<!-- svelte-ignore component-name-lowercase -->
<input type="hidden" value={selectedSource} id="wordmap-audio-pick" />

<!-- svelte-ignore component-name-lowercase -->
<input type="hidden" value={audioType} id="wordmap-audio-type" />

<LayoutButton
  height="12"
  width="full"
  action={setAudio}
  class="mt-4 overflow-hidden"
>
  <h4 class="text-white-darker">{selectedSource ?? "Open Audio File..."}</h4>
</LayoutButton>
