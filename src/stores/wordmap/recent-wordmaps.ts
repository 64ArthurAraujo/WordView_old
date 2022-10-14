import { writable } from "svelte/store";
import { recentlyPlayedWordmaps } from "../../actions/recent";
import type { WordMap } from "../../types/wordmap";

export const recentWordmaps = writable([] as WordMap[]);

export function updateRecentWordmaps() {
  recentWordmaps.set(recentlyPlayedWordmaps().recent);
}
