export const appData = process.env.APPDATA || (
  process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' :
    process.env.HOME + "/.local/share"
)

export const system = process.platform;

/** 
 * Directory Separator 
 * 
 * Different depending on the host system.
 * */
export const dir = (system == "win32") ? "\\" : "/";
const wordview = (system == "win32") ? "WordView" : "wordview";

export const wordmapsFolder = appData + `${dir}${wordview}${dir}wordmaps`;
export const wordviewFolder = appData + `${dir}${wordview}`;

export const audiosFolder = wordmapsFolder + `${dir}audio`;
export const thumbsFolder = wordmapsFolder + `${dir}thumb`;
export const imagesFolder = wordmapsFolder + `${dir}image`;
