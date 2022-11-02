export const appData = process.env.APPDATA || (
  process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' :
    process.env.HOME + "/.local/share"
)

export const wordmapsFolder = appData + "/wordview/wordmaps/";
export const wordviewFolder = appData + "/wordview";

export const audiosFolder = wordmapsFolder + "/audio";
export const thumbsFolder = wordmapsFolder + "/thumb";
export const imagesFolder = wordmapsFolder + "image";
