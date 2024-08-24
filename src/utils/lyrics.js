import * as DOMPurify from 'dompurify';

export const formatLyrics = (lyrics) => {
  return DOMPurify.sanitize(
    encodeURIComponent(lyrics)
    .replace('!', 'i')
    .replace(/\*/g, "%2A")
    .replace(/(?:\r\n|\r|\n)/g, '<br>')
  );
}