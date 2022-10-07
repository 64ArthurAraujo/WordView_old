<script lang="ts">
  import InsertImageButton from "./elements/InsertImageButton.svelte";
  import WordmapInformation from "./WordmapInformation.svelte";
  import MediaControlBar from "./MediaControlBar.svelte";
  import Sidebar from "../util/Sidebar.svelte";
  import BottomBar from "./BottomBar.svelte";
  import OverlayContainer from "../util/OverlayContainer.svelte";
  import { closeEditor, isEditorOpen } from "../../stores/overlay";
  import {
    audioPaused,
    clearStores,
    currentPoint,
    currentWordmap,
  } from "../../stores/wordmap";
  import ProgressBar from "./elements/ProgressBar.svelte";
  import LeaveButton from "../util/LeaveButton.svelte";
  import Playfield from "./Playfield.svelte";
  import Container from "./Container.svelte";
  import ContainerRow from "./elements/ContainerRow.svelte";
  import { scale } from "svelte/transition";
  import ImageButton from "../home/creator/ImageButton.svelte";
  import Input from "../home/creator/Input.svelte";
  import InsertDoodleButton from "./elements/InsertDoodleButton.svelte";
  import InsertImageImportButton from "./elements/InsertImageImportButton.svelte";
  import ImageShower from "./elements/ImageShower.svelte";
  import FullScreenOverlayContainer from "../util/FullScreenOverlayContainer.svelte";
  import PropertyRow from "./elements/PropertyRow.svelte";
  import TimeIndicator from "./elements/TimeIndicator.svelte";
  import { audio } from "../../util/web";

  let showingImportImage: boolean;

  function exit() {
    closeEditor();
    clearStores();
  }

  let currentAudioTime: number;

  function showImportImage() {
    showingImportImage = true;

    audio("editing-audio").pause();
    audioPaused.set(true);

    currentAudioTime = audio("editing-audio").currentTime;
  }

  function hideImportImage() {
    showingImportImage = false;
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
    <div class="h-screen w-screen bg-black-light" />

    <Playfield>
      <ImageShower />
    </Playfield>

    <Sidebar>
      <LeaveButton action={exit} />

      <Container header="Elements" class="mt-16">
        <ContainerRow>
          <InsertImageButton action={showImportImage} />
        </ContainerRow>

        <ContainerRow>
          <InsertDoodleButton action={() => console.log("doodle")} />
        </ContainerRow>
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
      </Container>
    </Sidebar>

    <TimeIndicator class="top-0 mt-4" />

    <BottomBar>
      <ProgressBar />
      <div
        class="bottom-0 h-full w-full flex items-center content-center justify-start flex-row"
      >
        <WordmapInformation />
        <MediaControlBar onPlay={() => {}} />
      </div>
    </BottomBar>
  </FullScreenOverlayContainer>
{/if}

{#if showingImportImage}
  <OverlayContainer class="z-50">
    <div
      transition:scale={{ duration: 500 }}
      class="h-2/5 w-2/5 bg-black-lightest rounded-md absolute"
    >
      <div class="flex w-full h-fit top-4 items-center justify-center">
        <LeaveButton action={hideImportImage} />

        <h2 class="flex text-white-regular mt-4">New Image Point</h2>
      </div>

      <div
        class="flex flex-column items-center content-center justify-center w-full mt-8"
      >
        <ImageButton />
        <div>
          <h2 class="text-white-regular mb-2">Location</h2>
          <Input
            type="text"
            placeholder="Location..."
            id="location"
            value={currentAudioTime.toString()}
          />
        </div>
      </div>

      <div class="flex w-full h-fit bottom-2 items-center justify-center mt-4">
        <InsertImageImportButton {hideImportImage} />
      </div>
    </div>
  </OverlayContainer>
{/if}
