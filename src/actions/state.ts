export enum State {
    home,
    editor
}

export function specifiedState() {
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get('state');

    if (!state) return;

    return parseState(state);
} 

function parseState(state: string) {
    // const states = Object.keys(State).filter((v) => isNaN(Number(v)));

    switch (state) {
        case 'home': return State.home;

        case 'editor': return State.editor;

        default:
            return State.home;
    }
}

export function navigate(state: string) {
    // weird but that worked, nice ig
    window.location.replace(window.location.href.split("?")[0] += `?state=${state}`)
}
