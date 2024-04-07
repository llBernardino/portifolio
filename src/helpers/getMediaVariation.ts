export const getMediaVariation = (
  mediaList,
  width = 0,
  variation = 'optimized',
) =>
  mediaList && (width || mediaList.extension === 'pdf') && mediaList.files
    ? mediaList.files.find((media) => media.variation === variation) ||
      mediaList.files.find((file) => file.variation === 'original')
    : { path: '' }
