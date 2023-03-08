import axios from "axios";
import { LocaleString } from "../localization";
import { closeUpdateOverlay, closeUpdateProgress, openUpdateProgress, updateProgressCurrentState, updateSuccessfull } from "../stores/overlay";
import type { GithubRelease } from "../types/update";
import { path, system } from "../util/constants";
import { saveBuffer } from "../util/file";
import { latestVersion } from "./checker";

export async function update() {
  closeUpdateOverlay();
  openUpdateProgress();

  message("Fetching the latest version...");

  let latest = await latestVersion();

  message("Looking for a binary matching the operating system...");

  let binaryUrl = matchingBinary(latest);

  message("Downloading the new release...");

  let file = await axios.get(binaryUrl, { responseType: 'blob' });

  message(`Saving the file in '${process.cwd()}'...`)
  await saveBuffer(path(`${process.cwd()}/WordView.${ext()}`), Buffer.from(await file.data.arrayBuffer()));

  closeUpdateProgress();
  updateSuccessfull.set(true);
}

function matchingBinary(latest: GithubRelease) {
  if (system == "win32") {
    for (const asset of latest.assets) {
      if (asset.content_type == "application/x-ms-dos-executable") {
        return asset.browser_download_url;
      }
    }
  } else {
    for (const asset of latest.assets) {
      if (asset.content_type == "application/vnd.appimage") {
        return asset.browser_download_url;
      }
    }
  }
}

function ext() {
  if (system == "win32") {
    return "exe"
  } else {
    return "AppImage"
  }
}

function message(msg: string) {
  console.log(msg);
  updateProgressCurrentState.set(LocaleString(msg));
}
