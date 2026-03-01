import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import { useCart } from '../../hooks/useCart';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
}

const categoryColors: Record<Product['category'], string> = {
  Camping: 'text-emerald-700 bg-emerald-50',
  Hiking: 'text-amber-700 bg-amber-50',
  Climbing: 'text-rose-700 bg-rose-50',
};

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1 text-sm text-amber-500">
      {'★'.repeat(Math.floor(rating))}
      {'☆'.repeat(5 - Math.floor(rating))}
      <span className="ml-1 text-stone-400">{rating.toFixed(1)}</span>
    </span>
  );
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col rounded-2xl border border-stone-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 overflow-hidden">
      <Link to={`/products/${product.id}`} className="overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4 gap-2">
        <span className={`w-fit rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-widest ${categoryColors[product.category]}`}>
          {product.category}
        </span>
        <Link to={`/products/${product.id}`}>
          <h3 className="font-bold text-stone-900 line-clamp-2 hover:text-amber-700 transition-colors">
            {product.name}
          </h3>
        </Link>
        <StarRating rating={product.rating} />
        <p className="text-xs text-stone-400">{product.reviewCount.toLocaleString()} reviews</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-stone-900">
            ${product.price.toFixed(2)}
          </span>
          {product.inStock ? (
            <Button size="sm" onClick={() => addItem(product)}>
              Add to Cart
            </Button>
          ) : (
            <span className="text-sm text-red-500 font-medium">Out of stock</span>
          )}
        </div>
      </div>
    </div>
  );
}
