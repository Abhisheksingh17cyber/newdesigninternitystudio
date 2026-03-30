import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import GradualBlur from '../components/GradualBlur';

const ShopPage = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 'matcha-kit',
      name: "Ceremonial Matcha Kit",
      description: "Premium grade Uji matcha with handcrafted bamboo whisk and ceramic chawan. A daily ritual of calm.",
      price: 120,
      image: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'alabaster-candle',
      name: "Hand-Poured Alabaster Candle",
      description: "250g soy wax candle infused with cedarwood, bergamot, and white sage. Burns for 60+ hours.",
      price: 85,
      image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'silk-eye-mask',
      name: "Weighted Silk Eye Mask",
      description: "Mulberry silk with lavender-infused flaxseed filling. Blocks light completely for deeper rest.",
      price: 45,
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'meditation-cushion',
      name: "Linen Meditation Cushion",
      description: "Organic buckwheat hull zafu in natural linen. Designed for proper spinal alignment during practice.",
      price: 95,
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'essential-oil-set',
      name: "Essential Oil Ritual Set",
      description: "Curated collection of 5 pure oils: lavender, eucalyptus, frankincense, ylang ylang, and peppermint.",
      price: 68,
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'crystal-set',
      name: "Crystal Healing Collection",
      description: "Rose quartz, amethyst, clear quartz, and black tourmaline. Ethically sourced and energetically cleansed.",
      price: 78,
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const [addedId, setAddedId] = React.useState<string | null>(null);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <div className="pt-24 md:pt-28 pb-20 md:pb-32 bg-atelier-bg relative">
      {/* Header */}
      <div className="px-6 max-w-7xl mx-auto mb-20">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-medium tracking-[0.3em] uppercase text-[#8B7355] mb-4 block"
        >
          The Avéa Edit
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-serif text-[#3D2B1F]"
        >
          Curated Essentials
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-[#C9B99A] mt-6"
        />
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="relative aspect-square overflow-hidden mb-6 bg-[#E8E0D4]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <GradualBlur preset="bottom" opacity={0.6} />
            </div>
            <h3 className="text-xl font-serif mb-1 text-[#3D2B1F] relative z-20">{product.name}</h3>
            <p className="text-sm text-[#8B7355] leading-relaxed mb-3 relative z-20">{product.description}</p>
            <div className="flex items-center justify-between mt-4 relative z-20">
              <span className="text-lg font-serif text-[#5C3D2E]">${product.price}</span>
              <button
                onClick={() => handleAddToCart(product)}
                className={`btn gap-2 ${
                  addedId === product.id ? '!bg-green-700 !text-white' : ''
                }`}
              >
                {addedId === product.id ? (
                  <><Check size={14} /> Added</>
                ) : (
                  <><ShoppingBag size={14} /> Add to Cart</>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Page bottom blur for effect */}
      <GradualBlur preset="page-footer" />
    </div>
  );
};

export default ShopPage;
