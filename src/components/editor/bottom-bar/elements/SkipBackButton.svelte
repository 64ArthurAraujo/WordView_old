<script lang="ts">
  import { SkipBackIcon } from "svelte-feather-icons";
  import { audio } from "../../../../util/web";
  import CircleButton from "../../../global/buttons/CircleButton.svelte";

  function back() {
    audio("editing-audio").currentTime -= 5;
  }
</script>

<CircleButton action={back} height="9" width="9" class="center">
  <SkipBackIcon size="13" class="invert" />
</CircleButton>
