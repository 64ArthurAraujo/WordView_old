<script lang="ts">
  import InsertImageButton from "./elements/InsertImageButton.svelte";
  import WordmapInformation from "./WordmapInformation.svelte";
  import MediaControlBar from "./MediaControlBar.svelte";
  import Sidebar from "../util/Sidebar.svelte";
  import BottomBar from "./BottomBar.svelte";
  import OverlayContainer from "../util/OverlayContainer.svelte";
  import { isEditorOpen } from "../../stores/overlay";
  import { currentWordmap } from "../../stores/wordmap";
  import ProgressBar from "./elements/ProgressBar.svelte";
  import LeaveButton from "../util/LeaveButton.svelte";
  import Playfield from "./Playfield.svelte";
  import Container from "./Container.svelte";
  import ContainerRow from "./elements/ContainerRow.svelte";
  import { scale } from "svelte/transition";
  import ImageButton from "../home/creator/ImageButton.svelte";
  import Input from "../home/creator/Input.svelte";
  import InsertDoodleButton from "./elements/InsertDoodleButton.svelte";

  let showingImportImage: boolean;

  function exit() {
    isEditorOpen.set(false);
  }

  let currentAudioTime: number;

  function showImportImage() {
    showingImportImage = true;

    let audio = document.getElementById("editing-audio") as HTMLAudioElement;
    audio.pause();

    currentAudioTime = audio.currentTime;
  }

  function hideImportImage() {
    showingImportImage = false;
  }
</script>

{#if $isEditorOpen}
  <OverlayContainer>
    <audio
      id="editing-audio"
      src={`${$currentWordmap.audioPath}`}
      type="audio/mpeg"
    />
    <div class="h-screen w-screen bg-black-light" />

    <Playfield>
      <p class="text-white-regular select-none">Hello World!</p>
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
        <ContainerRow />
      </Container>
    </Sidebar>

    <BottomBar>
      <ProgressBar />
      <div
        class="bottom-0 h-full w-full flex items-center content-center justify-start flex-row"
      >
        <WordmapInformation />
        <MediaControlBar />
      </div>
    </BottomBar>
  </OverlayContainer>
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
        <Input
          type="text"
          placeholder="Location"
          value={currentAudioTime.toString()}
        />
      </div>
    </div>
  </OverlayContainer>
{/if}
