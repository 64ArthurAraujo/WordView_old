export interface WordMap {
    id: string;
    title: string;
    description: string;
    durationInMiliseconds: number;
    thumb: string;
    audio: HTMLAudioElement;
    points: ImagePoint[];
}

export interface ImagePoint {
    timelineLocation: number;
    fadeIn: number;
    fadeOut: number;
}
