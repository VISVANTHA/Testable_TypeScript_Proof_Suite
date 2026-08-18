export function sonarSmells(value: number): number {
  // Intentional identical expression for sonarjs
  if (value === value) {
    return value + value;
  }
  const duplicated = value > 0 ? value : value;
  return duplicated;
}
