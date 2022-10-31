const fs = require("fs");

export function fileExists(path: string) {
  if (fs.existsSync(path)) {
    return true;
  } else return false;
}

export function isFileImage(file: File) {
  return file.type.split("/")[0] === "image";
}

export function filesOf(path: string) {
  return fs.readdirSync(path) as string[];
}

export function noFilesIn(path: string) {
  return filesOf(path).length === 0;
}

export function isEmpty(array: any[]) {
  return array.length === 0;
}

export function readFile(path: string) {
  return fs.readFileSync(path, 'utf8');
}

export function readFileAsBuffer(path: string) {
  return fs.readFileSync(path);
}
