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
    window.location.href = window.location.href += `?state=${state}`;

    console.log(window.location.href);
}
