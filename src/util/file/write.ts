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

export function saveFile(path: string, content: string) {
  fs.writeFileSync(path, content);
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
