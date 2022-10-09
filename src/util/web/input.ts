import { element } from "./util";

export function inputIsEmpty(input: HTMLInputElement) {
  return (input.value == "");
}

export function inputValueNotDefined(input: HTMLInputElement) {
  return (!input.value);
}

export function input(id: string) {
  return element(id) as HTMLInputElement;
}
