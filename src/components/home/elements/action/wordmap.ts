import JSZip from "jszip";
import { audioOf, thumbOf, wordmapOf } from "../../../../actions/wordmap/util";
import { readFile } from "../../../../util/file";
import { saveAs } from "file-saver";

export async function shareWordmap(mapid: string) {
  let wordmapFile = readFile(wordmapOf(mapid));
  let audio = readFile(audioOf(mapid));
  let thumb = readFile(thumbOf(mapid));

  const zip = new JSZip();

  zip.file(`${mapid}.wordmap.json`, wordmapFile);
  zip.file(`audio/${mapid}`, audio);
  zip.file(`thumb/${mapid}`, thumb);

  saveAs(await zip.generateAsync({ type: "blob", compression: "STORE" }), "export.wz");
}
