<script lang="ts">
  import { PenToolIcon } from "svelte-feather-icons";
  import LayoutButton from "../../../global/buttons/LayoutButton.svelte";

  export let action: Function;
</script>

<LayoutButton {action} width="2.5" height="2.5" class="center">
  <PenToolIcon size="15" class="invert mr-2" />
  <p class="ui-text-darker">Doodle</p>
</LayoutButton>
