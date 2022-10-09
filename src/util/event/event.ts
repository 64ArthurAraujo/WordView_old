export function keyPressedIs(key: string, event: KeyboardEvent) {
  if (event.code == key) {
    return true;
  }

  return false;
}
