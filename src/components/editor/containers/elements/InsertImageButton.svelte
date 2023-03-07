<script lang="ts">
  import { ImageIcon } from "svelte-feather-icons";
  import { LocaleString } from "../../../../localization";
  import LayoutButton from "../../../global/buttons/LayoutButton.svelte";

  export let action: Function;
</script>

<LayoutButton {action} width="2.5" height="2.5" class="center">
  <ImageIcon size="15" class="invert mr-2" />
  <p class="ui-text-darker">{LocaleString("Image")}</p>
</LayoutButton>
