import * as DOMPurify from 'dompurify';

export const formatLyrics = (lyrics) => {
  return DOMPurify.sanitize(lyrics.replace(/(?:\r\n|\r|\n)/g, '<br>'));
}