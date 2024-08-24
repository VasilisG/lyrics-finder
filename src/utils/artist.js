export const purifyArtist = (artist) => {
  return artist
  .replace('!', 'i')
  .replace('/\\', '')
  .replace('(', '')
  .replace(')', '');
}