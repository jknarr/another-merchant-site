import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { Badge } from '../ui/Badge';

export function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-900 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 text-xl font-bold text-amber-400">
          {/* Mountain peak icon */}
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M13.5 2.5a1.5 1.5 0 00-3 0L2 18h20L13.5 2.5zM12 6l6 10H6l6-10z" />
          </svg>
          Basecamp Supply
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-6 sm:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? 'text-amber-400' : 'text-stone-300 hover:text-amber-400'
              }`
            }
          >
            Gear
          </NavLink>
        </nav>

        {/* Cart icon */}
        <Link to="/cart" className="relative p-1 text-stone-300 hover:text-amber-400 transition-colors">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            viewBox="0 0 24 24"
            aria-label="Shopping cart"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <Badge count={totalItems} />
        </Link>
      </div>
    </header>
  );
}
