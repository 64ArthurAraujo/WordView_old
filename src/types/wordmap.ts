export type PointType = "image" | "doodle"

export interface WordMap {
  id: string;
  title: string;
  description: string;
  durationInMiliseconds: number;
  thumbPath: string;
  audioPath: string;
  points: Point[];
  lyrics: LyricPoint[];
}

export interface Point {
  timelineLocation: number;
  fadeIn: number;
  fadeOut: number;
  type: PointType;
  path: string;
}

export interface LyricPoint {
  timelineLocation: number;
  text: string;
}