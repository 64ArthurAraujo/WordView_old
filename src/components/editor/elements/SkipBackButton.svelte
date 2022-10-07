<script lang="ts">
  import { SkipBackIcon } from "svelte-feather-icons";
  import { audio } from "../../../util/web";
  import CircleButton from "../../util/CircleButton.svelte";

  function back() {
    audio("editing-audio").currentTime -= 5;
  }
</script>

<CircleButton
  action={back}
  height="9"
  width="9"
  class="flex content-center items-center justify-center"
>
  <SkipBackIcon size="13" class="invert" />
</CircleButton>
