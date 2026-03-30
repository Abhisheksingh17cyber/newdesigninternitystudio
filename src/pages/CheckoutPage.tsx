import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, CreditCard, CheckCircle, ShoppingBag, ArrowLeft } from 'lucide-react';

const CheckoutPage = () => {
  const { items, totalPrice, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [email, setEmail] = useState('');

  const shipping = totalPrice > 150 ? 0 : 12;
  const tax = Math.round(totalPrice * 0.08 * 100) / 100;
  const grandTotal = totalPrice + shipping + tax;

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate Stripe payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setIsComplete(true);
    clearCart();
  };

  if (isComplete) {
    return (
      <div className="pt-28 pb-32 bg-atelier-bg min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto px-6 text-center py-20"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h1 className="text-4xl font-serif text-[#3D2B1F] mb-4">Order Confirmed</h1>
          <p className="text-[#8B7355] mb-2">Thank you for your purchase!</p>
          <p className="text-sm text-[#8B7355]/70 mb-8">
            A confirmation email has been sent to {email}
          </p>
          <p className="text-2xl font-serif text-[#5C3D2E] mb-8">
            Total: ${grandTotal.toFixed(2)}
          </p>
          <button
            onClick={() => navigate('/')}
            className="btn"
          >
            Continue Shopping
          </button>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-28 pb-32 bg-atelier-bg min-h-screen">
        <div className="max-w-lg mx-auto px-6 text-center py-20">
          <ShoppingBag size={64} className="text-[#C9B99A]/30 mx-auto mb-6" />
          <h1 className="text-3xl font-serif text-[#3D2B1F] mb-4">Your cart is empty</h1>
          <p className="text-[#8B7355] mb-8">Discover our curated collection of wellness essentials.</p>
          <button
            onClick={() => navigate('/shop')}
            className="btn"
          >
            Browse Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-28 pb-20 md:pb-32 bg-atelier-bg min-h-screen">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <button
          onClick={() => navigate('/shop')}
          className="flex items-center gap-2 text-sm text-[#8B7355] hover:text-[#3D2B1F] transition-colors mb-6"
        >
          <ArrowLeft size={16} /> Continue Shopping
        </button>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif text-[#3D2B1F]"
        >
          Checkout
        </motion.h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Cart Items + Payment Form */}
        <div className="lg:col-span-3 space-y-8">
          {/* Cart Items */}
          <div className="bg-white p-6 md:p-8 border border-[#C9B99A]/10 shadow-sm">
            <h2 className="text-lg font-serif text-[#3D2B1F] mb-6">
              Items ({items.reduce((s, i) => s + i.quantity, 0)})
            </h2>
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-[#C9B99A]/10 last:border-0 last:pb-0">
                  <div className="w-24 h-24 bg-[#E8E0D4] overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-serif text-[#3D2B1F]">{item.name}</h3>
                    <p className="text-sm text-[#8B7355] mt-1">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <label htmlFor={`qty-${item.id}`} className="sr-only">Quantity for {item.name}</label>
                      <select
                        id={`qty-${item.id}`}
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="bg-atelier-bg border border-[#C9B99A]/20 px-2 py-1 text-sm focus:outline-none"
                        title={`Quantity for ${item.name}`}
                      >
                        {[1, 2, 3, 4, 5].map(n => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#C9B99A] hover:text-red-500 transition-colors"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-[#3D2B1F]">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white p-6 md:p-8 border border-[#C9B99A]/10 shadow-sm">
            <h2 className="text-lg font-serif text-[#3D2B1F] mb-6">Payment Details</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="checkoutEmail" className="text-[10px] uppercase tracking-widest text-[#8B7355] mb-2 block">Email</label>
                <input
                  id="checkoutEmail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-atelier-bg border border-[#C9B99A]/20 p-3 text-sm focus:outline-none focus:border-[#8B7355]"
                />
              </div>
              <div>
                <label htmlFor="nameOnCard" className="text-[10px] uppercase tracking-widest text-[#8B7355] mb-2 block">Name on Card</label>
                <input
                  id="nameOnCard"
                  type="text"
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                  placeholder="Full name"
                  className="w-full bg-atelier-bg border border-[#C9B99A]/20 p-3 text-sm focus:outline-none focus:border-[#8B7355]"
                />
              </div>
              <div>
                <label htmlFor="cardNum" className="text-[10px] uppercase tracking-widest text-[#8B7355] mb-2 block">Card Number</label>
                <input
                  id="cardNum"
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="4242 4242 4242 4242"
                  maxLength={19}
                  className="w-full bg-atelier-bg border border-[#C9B99A]/20 p-3 text-sm focus:outline-none focus:border-[#8B7355]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cardExpiry" className="text-[10px] uppercase tracking-widest text-[#8B7355] mb-2 block">Expiry</label>
                  <input
                    id="cardExpiry"
                    type="text"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full bg-atelier-bg border border-[#C9B99A]/20 p-3 text-sm focus:outline-none focus:border-[#8B7355]"
                  />
                </div>
                <div>
                  <label htmlFor="cardCvc" className="text-[10px] uppercase tracking-widest text-[#8B7355] mb-2 block">CVC</label>
                  <input
                    id="cardCvc"
                    type="text"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    placeholder="123"
                    maxLength={4}
                    className="w-full bg-atelier-bg border border-[#C9B99A]/20 p-3 text-sm focus:outline-none focus:border-[#8B7355]"
                  />
                </div>
              </div>
              <p className="text-[10px] text-[#8B7355]/60 flex items-center gap-1 mt-2">
                <CreditCard size={12} /> Secured by Stripe · Test mode
              </p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 md:p-8 border border-[#C9B99A]/10 shadow-sm sticky top-28">
            <h2 className="text-lg font-serif text-[#3D2B1F] mb-6">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-[#8B7355]">Subtotal</span>
                <span className="text-[#3D2B1F]">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#8B7355]">Shipping</span>
                <span className="text-[#3D2B1F]">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#8B7355]">Tax (8%)</span>
                <span className="text-[#3D2B1F]">${tax.toFixed(2)}</span>
              </div>
              {totalPrice < 150 && (
                <p className="text-[10px] text-[#8B7355]/60">Free shipping on orders over $150</p>
              )}
              <div className="border-t border-[#C9B99A]/20 pt-4 flex justify-between items-center">
                <span className="text-sm font-medium text-[#3D2B1F]">Total</span>
                <span className="text-2xl font-serif text-[#5C3D2E]">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handlePayment}
              disabled={isProcessing || !email || !cardNumber}
              className="btn w-full disabled:opacity-40 disabled:cursor-not-allowed gap-2"
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard size={14} /> Pay ${grandTotal.toFixed(2)}
                </>
              )}
            </button>

            <p className="text-[10px] text-center text-[#8B7355]/60 mt-4">
              30-day return policy · Free exchanges
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
