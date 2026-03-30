import React from 'react';
import { Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import StaggeredMenu from './components/StaggeredMenu';
import CartDrawer from './components/CartDrawer';
import ClickSpark from './components/ClickSpark';
import SplashCursor from './components/SplashCursor';
import { useCart } from './context/CartContext';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ClassesPage from './pages/ClassesPage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import BookPage from './pages/BookPage';
import CheckoutPage from './pages/CheckoutPage';

// --- Footer Component ---
const Footer = () => {
  return (
    <footer className="bg-atelier-bg py-24 px-6 border-t border-atelier-accent/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-serif tracking-tight font-semibold mb-6">Avéa</div>
          <p className="text-sm text-atelier-text/50 leading-relaxed">
            A sanctuary for the modern soul. Beauty in balance, wellness in spirit.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.3em] text-atelier-accent mb-6">Navigation</h4>
          <ul className="space-y-4">
            {[
              { label: 'Home', to: '/' },
              { label: 'About', to: '/about' },
              { label: 'Classes', to: '/classes' },
              { label: 'Shop', to: '/shop' },
              { label: 'Book', to: '/book' },
              { label: 'Contact', to: '/contact' },
            ].map(item => (
              <li key={item.label}>
                <Link to={item.to} className="text-sm hover:text-atelier-accent transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.3em] text-atelier-accent mb-6">Connect</h4>
          <ul className="space-y-4">
            {['Instagram', 'WhatsApp', 'LinkedIn', 'Spotify'].map(item => (
              <li key={item}><a href="#" className="text-sm hover:text-atelier-accent transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.3em] text-atelier-accent mb-6">Newsletter</h4>
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              aria-label="Newsletter email"
              className="w-full bg-transparent border-b border-atelier-accent/30 py-2 text-sm focus:outline-none focus:border-atelier-text transition-colors"
            />
            <button className="absolute right-0 bottom-2 text-atelier-accent hover:text-atelier-text transition-colors" aria-label="Subscribe to newsletter">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-atelier-accent/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest text-atelier-accent">© 2026 Avéa Wellness Studio. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="text-[10px] uppercase tracking-widest text-atelier-accent hover:text-atelier-text">Privacy Policy</a>
          <a href="#" className="text-[10px] uppercase tracking-widest text-atelier-accent hover:text-atelier-text">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// --- Scroll to top on route change ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Main App ---
export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems, setIsCartOpen } = useCart();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Classes', href: '/classes' },
    { label: 'Shop', href: '/shop' },
    { label: 'Contact', href: '/contact' },
    { label: 'Book', href: '/book' },
  ];

  return (
    <ClickSpark sparkColor="#5C3D2E" sparkSize={10} sparkRadius={20} sparkCount={10} duration={500}>
      <SplashCursor />
      <div className="min-h-screen selection:bg-atelier-accent selection:text-white">
      <ScrollToTop />

      {/* Staggered Navigation Menu */}
      <StaggeredMenu
        position="right"
        isFixed={true}
        menuButtonColor="#5C3D2E"
        openMenuButtonColor="#3D2B1F"
        accentColor="#7A5C4F"
        logoUrl="/logo.png"
        colors={['#F5F0E8', '#EAE0CD']}
        items={[
          { label: 'Home', ariaLabel: 'Home', link: '/' },
          { label: 'About', ariaLabel: 'About Us', link: '/about' },
          { label: 'Classes', ariaLabel: 'Classes', link: '/classes' },
          { label: 'Shop', ariaLabel: 'Shop', link: '/shop' },
          { label: 'Book', ariaLabel: 'Book Now', link: '/book' },
          { label: 'Contact', ariaLabel: 'Contact', link: '/contact' }
        ]}
        socialItems={[
          { label: 'Instagram', link: '#' },
          { label: 'Twitter', link: '#' },
          { label: 'LinkedIn', link: '#' }
        ]}
      />

      {/* Floating Cart Button (Bottom Right) */}
      <div className="fixed bottom-6 md:bottom-10 right-6 md:right-10 z-[101] pointer-events-auto">
        <button
          onClick={() => setIsCartOpen(true)}
          className="bg-[#5C3D2E] text-[#F5F0E8] w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#7A5C4F] transition-all duration-300 group relative hover:scale-105"
          aria-label="Open cart"
        >
          <ShoppingBag size={22} className="group-hover:scale-110 transition-transform" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-white text-[12px] font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-md">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Page Content */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>

      <Footer />
      <CartDrawer />
      </div>
    </ClickSpark>
  );
}
