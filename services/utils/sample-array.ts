export const SampleArray = <T>(arr: T[]): T | null => {
  if (arr.length === 0) return null
  return arr[Math.floor(Math.random() * arr.length)]
}
