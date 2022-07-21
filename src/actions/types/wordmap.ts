export interface WordMap {
    title: string;
    description: string;
    durationInMiliseconds: number;
    audio: HTMLAudioElement;
    points: ImagePoint[];
}

export interface ImagePoint {
    locationInMiliseconds: number;
    fadeIn: number;
    fadeOut: number;
}
