<script lang="ts">
  import JSZip from "jszip";
  import { openFilePrompt } from "../../../../actions/open-file-prompt";
  import { fetchWordmaps } from "../../../../actions/wordmap";
  import { LocaleString } from "../../../../localization";
  import { closeWordmapCreator } from "../../../../stores/overlay";
  import {
    audiosFolder,
    imagesFolder,
    path,
    system,
    thumbsFolder,
    wordmapsFolder,
  } from "../../../../util/constants";
  import {
    createFolderIfDoesntExist,
    readFileAsBuffer,
    saveBuffer,
  } from "../../../../util/file";
  import LayoutButton from "../../../global/buttons/LayoutButton.svelte";

  async function importWZFile() {
    const wzFile = await openFilePrompt();
    let zip = await JSZip.loadAsync(readFileAsBuffer(wzFile.path));

    createFolderIfDoesntExist(audiosFolder);
    createFolderIfDoesntExist(imagesFolder);
    createFolderIfDoesntExist(thumbsFolder);

    for (const [key] of Object.entries(zip.files)) {
      if (!key.endsWith("/")) {
        zip
          .file(key)
          .async("nodebuffer")
          .then(async (contentBuffer) => {
            let folder = key;

            if (system == "win32") {
              folder = folder.replace("/", "\\");
            }

            saveBuffer(path(`${wordmapsFolder}/${folder}`), contentBuffer).then(
              fetchWordmaps
            );
          });
      }
    }

    closeWordmapCreator();
  }
</script>

<LayoutButton height="12" width="2/5" action={importWZFile} class="mr-4">
  <h4 class="text-white-darker">{LocaleString("Import...")}</h4>
</LayoutButton>
