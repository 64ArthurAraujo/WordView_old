<script lang="ts">
  import { Volume2Icon } from "svelte-feather-icons";
  import PauseButton from "./elements/PauseButton.svelte";
  import SkipBackButton from "./elements/SkipBackButton.svelte";
  import SkipForwardButton from "./elements/SkipForwardButton.svelte";
  import VolumeBar from "./elements/VolumeBar.svelte";

  export let onPlay: Function;
</script>

<div
  class="h-full w-full fixed flex items-center content-center justify-center flex-row"
>
  <SkipBackButton />
  <PauseButton {onPlay} />
  <SkipForwardButton />
</div>

<div
  class="h-full w-1/6 fixed flex items-center content-center right-0 justify-center flex-row mr-4"
>
  <Volume2Icon size="20" class="invert mr-4" />
  <VolumeBar />
</div>
