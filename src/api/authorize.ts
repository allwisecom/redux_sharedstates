export function authorize(id: number): Promise<string[]> {
  return new Promise((resolve) => setTimeout(() => resolve(['admin']), 4000));
}
