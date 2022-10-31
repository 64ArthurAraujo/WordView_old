import { notify } from "../../stores/overlay";
const fs = require("fs");

export function createFolderIfDoesntExist(path: string) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
}

export function createFileIfDoesntExist(path: string, content: string) {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, content);
  }
}

export function saveFile(path: string, content: string | Buffer) {
  fs.writeFileSync(path, content);
}

export async function saveBuffer(path: string, content: Buffer) {
  fs.writeFile(path, content, 'binary', (err) => {
    if (err) {
      console.log("There was an error writing the file")
      console.error(err);
    }
    else {
      console.log(`Saved ${path.split("/")[path.length - 1]} on wordmaps folder!`);
    }
  });
}

export function deleteFile(path: string) {
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    notify(5000, err);
  }
}
