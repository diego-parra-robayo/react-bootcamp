export function range(from = 0, to = 0) {
  if (from > to) return [];
  if (from === to) return [from];
  return [...Array(to - from + 1).keys()].map((i) => i + from);
}
