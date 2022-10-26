<script lang="ts">
  import ImportImageOverlay from "./overlays/ImportImageOverlay.svelte";
  import CreateDoodleOverlay from "./overlays/CreateDoodleOverlay.svelte";
  import InsertImageButton from "./containers/elements/InsertImageButton.svelte";
  import InsertDoodleButton from "./containers/elements/InsertDoodleButton.svelte";
  import WordmapInformation from "./bottom-bar/WordmapInformation.svelte";
  import MediaControlBar from "./bottom-bar/MediaControlBar.svelte";
  import Sidebar from "../global/elements/Sidebar.svelte";
  import BottomBar from "./bottom-bar/BottomBar.svelte";
  import { closeEditor, isEditorOpen } from "../../stores/overlay";
  import {
    audioPaused,
    clearStores,
    currentPoint,
    currentWordmap,
  } from "../../stores/wordmap/wordmap";
  import ProgressBar from "./bottom-bar/elements/ProgressBar.svelte";
  import LeaveButton from "../global/buttons/LeaveButton.svelte";
  import Playfield from "./elements/Playfield.svelte";
  import Container from "./containers/Container.svelte";
  import ContainerRow from "./containers/elements/ContainerRow.svelte";
  import ImageShower from "./elements/ImageShower.svelte";
  import FullScreenOverlayContainer from "../global/overlay/FullScreenOverlayContainer.svelte";
  import PropertyRow from "./containers/elements/PropertyRow.svelte";
  import TimeIndicator from "./elements/TimeIndicator.svelte";
  import { audio } from "../../util/web";
  import PointDeleteButton from "./containers/elements/PointDeleteButton.svelte";

  let showingImportImage: boolean;
  let showingCreateDoodle: boolean;
  let currentAudioTime: number;

  function exit() {
    closeEditor();
    clearStores();
  }

  function showImportImage() {
    showingImportImage = true;

    audio("editing-audio").pause();
    audioPaused.set(true);

    currentAudioTime = audio("editing-audio").currentTime;
  }

  function hideImportImage() {
    showingImportImage = false;
  }

  function showCreateDoodle() {
    showingCreateDoodle = true;

    audio("editing-audio").pause();
    audioPaused.set(true);

    currentAudioTime = audio("editing-audio").currentTime;
  }

  function hideCreateDoodle() {
    showingCreateDoodle = false;
  }
</script>

{#if $isEditorOpen}
  <FullScreenOverlayContainer>
    <!-- svelte-ignore component-name-lowercase -->
    <audio
      id="editing-audio"
      src={`${$currentWordmap.audioPath}`}
      type="audio/mpeg"
    />
    <div class="screen bg-black-light" />
    <Playfield>
      <ImageShower />
    </Playfield>

    <Sidebar>
      <LeaveButton action={exit} />

      <Container header="Elements" class="mt-16">
        <ContainerRow>
          <InsertImageButton action={showImportImage} />
        </ContainerRow>
        <!-- 
        <ContainerRow>
          <InsertDoodleButton action={showCreateDoodle} />
        </ContainerRow> -->
      </Container>
    </Sidebar>

    <Sidebar direction="right">
      <Container header="Properties" class="mt-1">
        <ContainerRow>
          {#if $currentPoint.timelineLocation != undefined}
            <PropertyRow
              title="Timeline Location"
              inputValue={$currentPoint?.timelineLocation.toString()}
              inputPlaceholder="Location..."
              property="timelineLocation"
            />
          {/if}
        </ContainerRow>

        <ContainerRow>
          {#if $currentPoint.type != undefined}
            <PropertyRow
              title="Element Type"
              inputValue={$currentPoint?.type}
              inputPlaceholder="Type..."
              property="type"
            />
          {/if}
        </ContainerRow>

        <ContainerRow>
          <PointDeleteButton />
        </ContainerRow>
      </Container>
    </Sidebar>

    <TimeIndicator class="top-0 mt-4 shadow-lg" />

    <BottomBar>
      <ProgressBar />
      <div class="bottom-0 full row items-center content-center justify-start">
        <WordmapInformation />
        <MediaControlBar onPlay={() => {}} />
      </div>
    </BottomBar>
  </FullScreenOverlayContainer>
{/if}

<ImportImageOverlay {showingImportImage} {currentAudioTime} {hideImportImage} />
<CreateDoodleOverlay
  {showingCreateDoodle}
  {currentAudioTime}
  {hideCreateDoodle}
/>
