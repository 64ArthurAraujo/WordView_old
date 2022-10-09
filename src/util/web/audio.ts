import { element } from "./util";

export function audio(id: string) {
  return element(id) as HTMLAudioElement;
}
