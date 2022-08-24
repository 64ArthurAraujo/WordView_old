const fs = require("fs");

export function fileExists(path: string) {
    if (fs.existsSync(path)) {
        return true;
    } else return false;
}
