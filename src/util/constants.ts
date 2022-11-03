export const appData = process.env.APPDATA || (
  process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' :
    process.env.HOME + "/.local/share"
)

export const system = process.platform;

const wordview = (system == "win32") ? "WordView" : "wordview";

export const wordmapsFolder = path(`${appData}/${wordview}/wordmaps`);
export const wordviewFolder = path(`${appData}/${wordview}`);

export const audiosFolder = path(`${wordmapsFolder}/audio`);
export const thumbsFolder = path(`${wordmapsFolder}/thumb`);
export const imagesFolder = path(`${wordmapsFolder}/image`);

/**
 * Translates the path to the current operating system.
 */
export function path(path: string) {
  if (system == "win32") {
    return (path.replace("/", "\\"));
  } else {
    return (path.replace("\\", "/"));
  }
}
