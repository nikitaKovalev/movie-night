export function responseDelay<T>(response: T): Promise<T> {
  return new Promise((resolve) => {
    const handler = setTimeout(() => resolve(response), 400);
    return () => clearTimeout(handler);
  });
}