import axios from "axios";
import type { GithubRelease } from "../types/update";
import appinfo from "../../package.json";
import { showNewVersion } from "../stores/overlay";

const client = axios.create({ baseURL: "https://api.github.com/repos/64ArthurAraujo/" })

export async function checkForUpdate() {
  let latest = await latestVersion();

  if (latest.tag_name != appinfo.version) {
    showNewVersion(latest.tag_name, latest.body);
  }
}

export async function latestVersion() {
  let { data } = await client.get("/WordView/releases/latest");

  return data as GithubRelease;
}
