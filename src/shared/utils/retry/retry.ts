/**
 * Function for retrying promise
 * @param fn
 * @param options
 */
export async function retry<T>(
  fn: () => Promise<T>,
  options: { retries: number; delay: number }
): Promise<T> {
  let lastError: Error | undefined;
  for (let i = 0; i < options.retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (error instanceof Error) {
        lastError = error;
      }
      await new Promise((resolve) => setTimeout(resolve, options.delay));
    }
  }
  throw lastError;
}
