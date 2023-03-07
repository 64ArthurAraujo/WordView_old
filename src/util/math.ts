/**
 * Returns the percentage value that **numberToGetPercentageOf** represents on **wholeNumber**.
 * @param numberToGetPercentageOf 
 * @param wholeNumber 
 */
export function percentage(
  numberToGetPercentageOf: number,
  wholeNumber: number
) {
  return (numberToGetPercentageOf / wholeNumber) * 100;
}

/**
 * Get the numeric value for the **percentage** from the **whole number**. 
 * @param percentage 
 * @param wholeNumber
 */
export function numberFromPercentage(percentage: number, wholeNumber: number) {
  return (wholeNumber * percentage) / 100;
}
