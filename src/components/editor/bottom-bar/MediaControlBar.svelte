<script lang="ts">
  import { Volume2Icon } from "svelte-feather-icons";
  import PauseButton from "./elements/PauseButton.svelte";
  import SkipBackButton from "./elements/SkipBackButton.svelte";
  import SkipForwardButton from "./elements/SkipForwardButton.svelte";
  import VolumeBar from "./elements/VolumeBar.svelte";

  export let onPlay: Function;
</script>

<div class="w-full fixed center row">
  <SkipBackButton />
  <PauseButton {onPlay} />
  <SkipForwardButton />
</div>

<div class="w-1/6 fixed center right-0 row mr-4">
  <Volume2Icon size="20" class="invert mr-4" />
  <VolumeBar />
</div>
