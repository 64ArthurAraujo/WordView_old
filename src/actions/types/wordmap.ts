export interface WordMap {
    id: string;
    title: string;
    description: string;
    durationInMiliseconds: number;
    thumbPath: string;
    audioPath: string;
    points: ImagePoint[];
}

export interface ImagePoint {
    timelineLocation: number;
    fadeIn: number;
    fadeOut: number;
}
