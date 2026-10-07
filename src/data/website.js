const IMAGE_BASE = '/';
const asset = (path) => `${IMAGE_BASE}${path.replace(/^\//, '')}`;

export const signCategories = [
  { title: 'Flat Signs', image: asset('/images/signs/flat-signs.png') },
  { title: '3D Signs', image: asset('/images/signs/3d-signs.png') },
  { title: 'Neon', image: asset('/images/signs/neon-signs.png') },
  { title: 'Shop Fitting', image: asset('/images/signs/shop-fitting.png') },
  { title: 'RGB Signs', image: asset('/images/signs/rgb-signs.png') }
];

export const shopProducts = [
  { title: 'Print Service', image: asset('/images/shop/paper-print-service.png') },
  { title: 'Glue & Adhesives', image: asset('/images/shop/glue-adhesives.png') },
  { title: 'RGB Lights', image: asset('/images/shop/rgb-lights.png') },
  { title: 'White Lights', image: asset('/images/shop/white-lights.png') },
  { title: 'Power Supplies', image: asset('/images/shop/power-supplies.png') }
];

export const realImageNames = Array.from({ length: 10 }, (_, i) => `real-image-${i + 1}.jpg`);
