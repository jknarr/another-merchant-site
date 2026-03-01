import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../hooks/useCart';
import { Button } from '../components/ui/Button';
import type { Product } from '../types';

const categoryColors: Record<Product['category'], string> = {
  Camping: 'text-emerald-700',
  Hiking: 'text-amber-700',
  Climbing: 'text-rose-700',
};

function StarRating({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-amber-500 text-lg">
        {'★'.repeat(Math.floor(rating))}
        {'☆'.repeat(5 - Math.floor(rating))}
      </span>
      <span className="text-sm text-stone-500">
        {rating.toFixed(1)} ({reviewCount.toLocaleString()} reviews)
      </span>
    </div>
  );
}

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const { addItem, items } = useCart();

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-stone-900">Product not found</h1>
        <Link to="/" className="mt-4 inline-block text-amber-600 underline">
          Back to gear
        </Link>
      </main>
    );
  }

  const cartItem = items.find((i) => i.product.id === product.id);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-stone-500">
        <Link to="/" className="hover:text-amber-600">
          Gear
        </Link>
        <span className="mx-2">/</span>
        <span className="text-stone-400">{product.category}</span>
        <span className="mx-2">/</span>
        <span className="text-stone-900 font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl border border-stone-100 bg-stone-100">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-5">
          <span className={`text-sm font-semibold uppercase tracking-widest ${categoryColors[product.category]}`}>
            {product.category}
          </span>
          <h1 className="text-3xl font-extrabold text-stone-900">{product.name}</h1>
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />
          <p className="text-3xl font-bold text-stone-900">${product.price.toFixed(2)}</p>
          <p className="text-stone-600 leading-relaxed">{product.description}</p>

          {/* Stock status */}
          <div className="flex items-center gap-2 text-sm">
            {product.inStock ? (
              <>
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-emerald-700 font-medium">In Stock — Ready to Ship</span>
              </>
            ) : (
              <>
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="text-red-600 font-medium">Out of Stock</span>
              </>
            )}
          </div>

          {/* CTA */}
          <div className="flex gap-3 pt-2">
            <Button
              size="lg"
              onClick={() => addItem(product)}
              disabled={!product.inStock}
              className="flex-1"
            >
              {cartItem ? `Add Another (${cartItem.quantity} in cart)` : 'Add to Cart'}
            </Button>
            <Link to="/cart">
              <Button size="lg" variant="secondary">
                View Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
