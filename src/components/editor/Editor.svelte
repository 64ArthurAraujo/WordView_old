<script lang="ts">
  import ImportImageOverlay from "./overlays/ImportImageOverlay.svelte";
  import CreateDoodleOverlay from "./overlays/CreateDoodleOverlay.svelte";
  import InsertImageButton from "./containers/elements/InsertImageButton.svelte";
  import InsertDoodleButton from "./containers/elements/InsertDoodleButton.svelte";
  import WordmapInformation from "./bottom-bar/WordmapInformation.svelte";
  import MediaControlBar from "./bottom-bar/MediaControlBar.svelte";
  import Sidebar from "../global/elements/Sidebar.svelte";
  import BottomBar from "./bottom-bar/BottomBar.svelte";
  import { closeEditor, isEditorOpen, pause } from "../../stores/overlay";
  import {
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
  import InsertLyricsButton from "./containers/elements/InsertLyricsButton.svelte";
  import CreateLyricsOverlay from "./overlays/CreateLyricsOverlay.svelte";
  import LyricsShower from "./elements/LyricsShower.svelte";
  import { currentLyricPoint } from "../../stores/overlay";
  import LyricsDeleteButton from "./containers/elements/LyricsDeleteButton.svelte";
  import LyricPropertyRow from "./containers/elements/LyricPropertyRow.svelte";
  import { audiosFolder, path } from "../../util/constants";
  import { LocaleString } from "../../localization";

  let showingImportImage: boolean;
  let showingCreateDoodle: boolean;
  let showingCreateLyrics: boolean;
  let currentAudioTime: number;

  function exit() {
    closeEditor();
    clearStores();
  }

  function showImportImage() {
    showingImportImage = true;
    pause();
    currentAudioTime = audio("editing-audio").currentTime;
  }

  function hideImportImage() {
    showingImportImage = false;
  }

  function showCreateLyrics() {
    showingCreateLyrics = true;
    pause();
    currentAudioTime = audio("editing-audio").currentTime;
  }

  function hideCreateLyrics() {
    showingCreateLyrics = false;
  }

  // function showCreateDoodle() {
  //   showingCreateDoodle = true;

  //   audio("editing-audio").pause();
  //   audioPaused.set(true);

  //   currentAudioTime = audio("editing-audio").currentTime;
  // }

  function hideCreateDoodle() {
    showingCreateDoodle = false;
  }
</script>

{#if $isEditorOpen}
  <FullScreenOverlayContainer>
    <!-- svelte-ignore component-name-lowercase -->
    <audio
      id="editing-audio"
      src={path(`${audiosFolder}/${$currentWordmap.id}`)}
    />
    <div class="screen bg-black-light" />
    <Playfield>
      <ImageShower />
      <LyricsShower />
    </Playfield>

    <Sidebar>
      <LeaveButton action={exit} />

      <Container header={LocaleString("Elements")} class="mt-16">
        <ContainerRow>
          <InsertImageButton action={showImportImage} />
        </ContainerRow>

        <ContainerRow>
          <InsertLyricsButton action={showCreateLyrics} />
        </ContainerRow>

        <!-- 
        <ContainerRow>
          <InsertDoodleButton action={showCreateDoodle} />
        </ContainerRow> -->
      </Container>
    </Sidebar>

    <Sidebar direction="right">
      <Container header={LocaleString("Image Properties")} class="mt-1">
        <ContainerRow>
          {#if $currentPoint.timelineLocation != undefined}
            <PropertyRow
              title={LocaleString("Timeline Location")}
              inputValue={$currentPoint?.timelineLocation.toString()}
              inputPlaceholder={LocaleString("Location...")}
              property="timelineLocation"
            />
          {/if}
        </ContainerRow>

        <ContainerRow>
          {#if $currentPoint.type != undefined}
            <PropertyRow
              title={LocaleString("Element Type")}
              inputValue={$currentPoint?.type}
              inputPlaceholder={LocaleString("Type...")}
              property="type"
              disabled={true}
            />
          {/if}
        </ContainerRow>

        <ContainerRow>
          <PointDeleteButton />
        </ContainerRow>
      </Container>

      <Container header={LocaleString("Caption Properties")} class="mt-1">
        <ContainerRow>
          {#if $currentLyricPoint.text != undefined}
            <LyricPropertyRow
              title={LocaleString("Text")}
              inputValue={$currentLyricPoint?.text}
              inputPlaceholder={LocaleString("Text...")}
              property="text"
            />
          {/if}
        </ContainerRow>

        <ContainerRow>
          {#if $currentLyricPoint.timelineLocation != undefined}
            <LyricPropertyRow
              title={LocaleString("Timeline Location")}
              inputValue={$currentLyricPoint?.timelineLocation.toString()}
              inputPlaceholder={LocaleString("Location...")}
              property="timelineLocation"
            />
          {/if}
        </ContainerRow>

        <ContainerRow>
          {#if $currentLyricPoint.timelineLocation != undefined}
            <LyricsDeleteButton />
          {/if}
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
<CreateLyricsOverlay
  {showingCreateLyrics}
  {currentAudioTime}
  {hideCreateLyrics}
/>
