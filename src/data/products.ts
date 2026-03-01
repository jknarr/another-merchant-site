import type { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Alpine 4-Season Tent',
    description:
      'Double-walled geodesic tent engineered for extreme conditions. Withstands 60 mph winds, supports heavy snow loads, and sets up in under 10 minutes. Sleeps 2 comfortably.',
    price: 449.99,
    category: 'Camping',
    imageUrl: 'https://picsum.photos/seed/camp1/600/400',
    rating: 4.8,
    reviewCount: 634,
    inStock: true,
  },
  {
    id: '2',
    name: 'Ultralight Sleeping Bag −20°F',
    description:
      'Premium 850-fill goose down sleeping bag rated to −20°F. Compresses to the size of a Nalgene bottle. Water-resistant DWR shell keeps you dry in damp conditions.',
    price: 299.99,
    category: 'Camping',
    imageUrl: 'https://picsum.photos/seed/camp2/600/400',
    rating: 4.7,
    reviewCount: 412,
    inStock: true,
  },
  {
    id: '3',
    name: 'Backcountry Camp Stove',
    description:
      'Compact canister stove with piezo ignition, boils 1L in 3 minutes, and weighs only 3 oz. Includes integrated windscreen and folding pot supports for maximum stability.',
    price: 79.99,
    category: 'Camping',
    imageUrl: 'https://picsum.photos/seed/camp3/600/400',
    rating: 4.6,
    reviewCount: 889,
    inStock: true,
  },
  {
    id: '4',
    name: 'Gravity Water Filter System',
    description:
      'Hands-free gravity filtration for groups and basecamp. Removes 99.9999% of bacteria and 99.9% of protozoa. 4L capacity, no pumping required.',
    price: 59.99,
    category: 'Camping',
    imageUrl: 'https://picsum.photos/seed/camp4/600/400',
    rating: 4.5,
    reviewCount: 1023,
    inStock: false,
  },
  {
    id: '5',
    name: '65L Expedition Backpack',
    description:
      'Fully adjustable torso-length harness, top-loading main compartment, and integrated rain cover. Hip belt pockets, ice axe loops, and external compression straps for a perfect load carry.',
    price: 279.99,
    category: 'Hiking',
    imageUrl: 'https://picsum.photos/seed/hike1/600/400',
    rating: 4.7,
    reviewCount: 758,
    inStock: true,
  },
  {
    id: '6',
    name: 'Carbon Fiber Trekking Poles',
    description:
      'Ultra-stiff carbon fiber shafts with anti-shock dampening, quick-lock adjustment, and ergonomic cork grips. Fold down to 15" for easy packing.',
    price: 119.99,
    category: 'Hiking',
    imageUrl: 'https://picsum.photos/seed/hike2/600/400',
    rating: 4.6,
    reviewCount: 521,
    inStock: true,
  },
  {
    id: '7',
    name: 'Trail Runner GTX Mid Boot',
    description:
      'Gore-Tex waterproof membrane, Vibram Megagrip outsole, and a wide toe box for all-day comfort. Stiff enough for rough terrain, flexible enough for fast miles.',
    price: 189.99,
    category: 'Hiking',
    imageUrl: 'https://picsum.photos/seed/hike3/600/400',
    rating: 4.8,
    reviewCount: 1342,
    inStock: true,
  },
  {
    id: '8',
    name: 'Merino Trail Hoodie',
    description:
      '200g merino wool midlayer with a full zip, odor resistance, and natural temperature regulation. Flatlock seams prevent chafing under a pack. Machine washable.',
    price: 139.99,
    category: 'Hiking',
    imageUrl: 'https://picsum.photos/seed/hike4/600/400',
    rating: 4.4,
    reviewCount: 367,
    inStock: true,
  },
  {
    id: '9',
    name: 'Dynamic Rope 9.5mm × 60m',
    description:
      'UIAA and CE certified single rope with Dry treatment on sheath and core. Low elongation at working load, smooth handling through belay devices, and a bi-colored pattern for rappel midpoint.',
    price: 219.99,
    category: 'Climbing',
    imageUrl: 'https://picsum.photos/seed/climb1/600/400',
    rating: 4.9,
    reviewCount: 278,
    inStock: true,
  },
  {
    id: '10',
    name: 'All-Around Climbing Harness',
    description:
      'Four pressure-moulded foam waist belt and leg loops for all-day comfort. Gear loops sewn with high-tenacity Dyneema, haul loop rated at 15 kN. Fits waist 28–40".',
    price: 89.99,
    category: 'Climbing',
    imageUrl: 'https://picsum.photos/seed/climb2/600/400',
    rating: 4.7,
    reviewCount: 445,
    inStock: true,
  },
  {
    id: '11',
    name: 'Quickdraw Set — 6 Pack',
    description:
      'Forged aluminum snap-gate carabiners with keylock nose on the bolt end. 12 cm dogbone stitched with stiff keeper for easy clipping. Gate opening 22 mm.',
    price: 84.99,
    category: 'Climbing',
    imageUrl: 'https://picsum.photos/seed/climb3/600/400',
    rating: 4.6,
    reviewCount: 312,
    inStock: true,
  },
  {
    id: '12',
    name: 'Chalk Bag & Block Chalk',
    description:
      'Drawstring chalk bag with a stiff opening, fleece interior, and zippered pocket for keys. Includes two 65g gymnastic chalk blocks — no clumping, superior friction.',
    price: 34.99,
    category: 'Climbing',
    imageUrl: 'https://picsum.photos/seed/climb4/600/400',
    rating: 4.5,
    reviewCount: 923,
    inStock: true,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category);
}
