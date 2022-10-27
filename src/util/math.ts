export function percentage(
  numberToGetPercentageOf: number,
  wholeNumber: number
) {
  return (numberToGetPercentageOf / wholeNumber) * 100;
}

export function numberFromPercentage(percentage: number, wholeNumber: number) {
  return (wholeNumber * percentage) / 100;
}