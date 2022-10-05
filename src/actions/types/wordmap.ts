export type PointType = "image" | "draw"

export interface WordMap {
  id: string;
  title: string;
  description: string;
  durationInMiliseconds: number;
  thumbPath: string;
  audioPath: string;
  points: Point[];
}

export interface Point {
  timelineLocation: number;
  fadeIn: number;
  fadeOut: number;
  type: PointType;
  path: string;
}
