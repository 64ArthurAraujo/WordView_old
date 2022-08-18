export const appData: string = process.env.APPDATA || (
    process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' :
        process.env.HOME + "/.local/share"
)

export const wordmapsFolder: string = appData + "/wordview/wordmaps/";
