import { useState, useMemo } from 'react';
import { products } from '../data/products';
import type { Product } from '../types';
import { ProductCard } from '../components/ui/ProductCard';

const CATEGORIES: Array<Product['category'] | 'All'> = ['All', 'Camping', 'Hiking', 'Climbing'];

const categoryIcons: Record<Product['category'] | 'All', string> = {
  All: '🏔️',
  Camping: '⛺',
  Hiking: '🥾',
  Climbing: '🧗',
};

export function HomePage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<Product['category'] | 'All'>('All');

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch =
        search === '' ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="mb-10 overflow-hidden rounded-3xl bg-stone-800 px-8 py-14 text-center shadow-lg">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-400">
          Premium Outdoor Gear
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Built for the Backcountry
        </h1>
        <p className="mt-3 text-lg text-stone-300">
          Tents, packs, ropes, and everything in between — tested at elevation.
        </p>
      </section>

      {/* Search */}
      <div className="mb-6">
        <input
          type="search"
          placeholder="Search gear…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm shadow-sm placeholder-stone-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
      </div>

      {/* Category filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={[
              'flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors',
              activeCategory === cat
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-stone-700 border border-stone-200 hover:border-amber-400 hover:text-amber-700',
            ].join(' ')}
          >
            <span>{categoryIcons[cat]}</span>
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center text-stone-400">
          <p className="text-lg">No gear matches your search.</p>
          <button
            onClick={() => { setSearch(''); setActiveCategory('All'); }}
            className="mt-4 text-amber-600 underline hover:text-amber-800"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
