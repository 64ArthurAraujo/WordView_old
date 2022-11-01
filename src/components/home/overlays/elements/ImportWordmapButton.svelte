<script lang="ts">
  import JSZip from "jszip";
  import { tick } from "svelte";
  import { openFilePrompt } from "../../../../actions/open-file-prompt";
  import { fetchWordmaps } from "../../../../actions/wordmap";
  import { closeWordmapCreator } from "../../../../stores/overlay";
  import { wordmapsFolder } from "../../../../util/constants";
  import { readFileAsBuffer, saveBuffer } from "../../../../util/file";
  import LayoutButton from "../../../global/buttons/LayoutButton.svelte";

  async function importWZFile() {
    const wzFile = await openFilePrompt();
    let zip = await JSZip.loadAsync(readFileAsBuffer(wzFile.path));

    for (const [key] of Object.entries(zip.files)) {
      if (!key.endsWith("/")) {
        zip
          .file(key)
          .async("nodebuffer")
          .then(async (contentBuffer) => {
            saveBuffer(wordmapsFolder + key, contentBuffer).then(fetchWordmaps);
          });
      }
    }

    closeWordmapCreator();
  }
</script>

<LayoutButton height="12" width="2/5" action={importWZFile} class="mr-4">
  <h4 class="text-white-darker">Import...</h4>
</LayoutButton>
