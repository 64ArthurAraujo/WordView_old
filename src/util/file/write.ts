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
  await fs.writeFileSync(path, content, 'binary');
}

export function copyFile(src: string, dest: string) {
  fs.copyFileSync(src.replace("file://", ""), dest);
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
