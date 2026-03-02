export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-900 mt-16">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2 text-center text-sm text-stone-400">
          <p className="font-semibold text-amber-400">Basecamp Supply</p>
          <p>Example merchant site — for demonstration purposes only.</p>
          <p>© {new Date().getFullYear()} Demo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
