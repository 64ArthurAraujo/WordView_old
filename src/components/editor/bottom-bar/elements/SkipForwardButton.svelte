<script lang="ts">
  import { SkipForwardIcon } from "svelte-feather-icons";
  import { audio } from "../../../../util/web";
  import CircleButton from "../../../global/buttons/CircleButton.svelte";

  function forward() {
    audio("editing-audio").currentTime += 5;
  }
</script>

<CircleButton action={forward} height="9" width="9" class="center">
  <SkipForwardIcon size="13" class="invert" />
</CircleButton>
