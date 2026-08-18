// Duplicate A for jscpd
export function processUserPayload(input: string): string {
  const trimmed = (input || "").trim();
  if (!trimmed) { return "empty"; }
  const parts = trimmed.split(",").map((p) => p.trim());
  const filtered = parts.filter((p) => p.length > 0);
  const joined = filtered.join("|");
  const upper = joined.toUpperCase();
  return "processed:" + upper;
}
