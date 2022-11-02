import JSZip from "jszip";
import { allImagePointsOf, audioOf, imageFor, thumbOf, wordmapOf } from "../../../../actions/wordmap/util";
import { fileExists, readFile, readFileAsBuffer } from "../../../../util/file";
import { saveAs } from "file-saver";

export async function shareWordmap(mapid: string) {
  const zip = new JSZip();

  let wordmapFile = readFile(wordmapOf(mapid));
  let audio = readFileAsBuffer(audioOf(mapid));

  zip.file(`${mapid}.wordmap.json`, wordmapFile);
  zip.file(`audio/${mapid}`, audio);

  if (fileExists(thumbOf(mapid))) {
    let thumb = readFileAsBuffer(thumbOf(mapid));
    zip.file(`thumb/${mapid}`, thumb);
  }

  const wordmapPoints = allImagePointsOf(mapid);

  for (const pointUUID of wordmapPoints) {
    let pointImage = readFileAsBuffer(imageFor(pointUUID));

    zip.file(`image/${pointUUID}`, pointImage);
  }

  saveAs(await zip.generateAsync({ type: "blob", compression: "STORE" }), "export.wz");
}
