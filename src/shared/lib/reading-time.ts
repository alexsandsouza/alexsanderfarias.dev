export function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
  if (!text || text.trim().length === 0) return 1;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}
