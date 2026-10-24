const asset = (path) => path.replace(/^\//, '');

export const signCategories = [
  { title: 'Flat Signs', image: asset('/images/signs/flat-signs.webp') },
  { title: '3D Signs', image: asset('/images/signs/3d-signs.webp') },
  { title: 'Neon', image: asset('/images/signs/neon-signs.webp') },
  { title: 'Shop Fitting', image: asset('/images/signs/shop-fitting.webp') },
  { title: 'RGB Signs', image: asset('/images/signs/rgb-signs.webp') }
];

export const realImageNames = Array.from({ length: 10 }, (_, i) => `real-image-${i + 1}.jpg`);
