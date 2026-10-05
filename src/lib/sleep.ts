/**
 * @description Utility function to pause execution for a specified duration (in milliseconds).
 *
 * @example
 * await sleep(1000); // Wait for 1 second
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
