import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, CreditCard, CheckCircle } from 'lucide-react';
import LaserFlow from '../components/LaserFlow';

const classes = [
  { id: 'sculpt-flow', name: 'Sculpt & Flow', price: 45, duration: '60 min' },
  { id: 'breathwork', name: 'Breathwork Ritual', price: 35, duration: '45 min' },
  { id: 'artistic-movement', name: 'Artistic Movement', price: 55, duration: '75 min' },
  { id: 'private-session', name: 'Private Session', price: 120, duration: '90 min' },
  { id: 'sound-bath', name: 'Crystal Sound Bath', price: 40, duration: '60 min' },
  { id: 'morning-ritual', name: 'Morning Ritual', price: 30, duration: '45 min' },
];

const timeSlots = ['07:00', '09:30', '12:00', '14:00', '16:30', '18:00', '19:30'];

const BookPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const preselectedClass = searchParams.get('class') || '';

  const [selectedClass, setSelectedClass] = useState(preselectedClass);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const selectedClassData = classes.find(c => c.id === selectedClass);

  const canProceedStep1 = selectedClass && selectedDate && selectedTime;
  const canProceedStep2 = name && email && phone;

  const handleConfirm = () => {
    // In production, this would process payment via Stripe
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return (
      <div className="pt-28 pb-32 bg-atelier-bg min-h-screen relative overflow-hidden">
        {/* LaserFlow Background */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <LaserFlow color="#C9B99A" fogIntensity={0.6} />
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto px-6 text-center py-20 relative z-10"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h1 className="text-4xl font-serif text-[#3D2B1F] mb-4">Booking Confirmed</h1>
          <p className="text-[#8B7355] mb-2">
            {selectedClassData?.name} — {selectedDate} at {selectedTime}
          </p>
          <p className="text-sm text-[#8B7355]/70 mb-8">
            A confirmation email has been sent to {email}
          </p>
          <div className="bg-white p-6 border border-[#C9B99A]/20 mb-8 text-left">
            <div className="flex justify-between mb-3">
              <span className="text-sm text-[#8B7355]">Class</span>
              <span className="text-sm font-medium text-[#3D2B1F]">{selectedClassData?.name}</span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="text-sm text-[#8B7355]">Date & Time</span>
              <span className="text-sm font-medium text-[#3D2B1F]">{selectedDate} · {selectedTime}</span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="text-sm text-[#8B7355]">Duration</span>
              <span className="text-sm font-medium text-[#3D2B1F]">{selectedClassData?.duration}</span>
            </div>
            <div className="border-t border-[#C9B99A]/20 pt-3 flex justify-between">
              <span className="text-sm font-medium text-[#3D2B1F]">Total Charged</span>
              <span className="text-lg font-serif text-[#5C3D2E]">${selectedClassData?.price}</span>
            </div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="btn"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-28 pb-20 md:pb-32 bg-atelier-bg min-h-screen relative overflow-hidden">
      {/* LaserFlow Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <LaserFlow color="#C9B99A" fogIntensity={0.6} wispDensity={1.2} />
      </div>

      {/* Header */}
      <div className="text-center px-6 mb-16 relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-medium tracking-[0.3em] uppercase text-[#8B7355] mb-4 block"
        >
          Reservation
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-serif text-[#3D2B1F]"
        >
          Book Your Ritual
        </motion.h1>
      </div>

      {/* Progress Steps */}
      <div className="max-w-2xl mx-auto px-6 mb-12 relative z-10">
        <div className="flex items-center justify-center gap-4">
          {[
            { num: 1, label: 'Select', icon: Calendar },
            { num: 2, label: 'Details', icon: CreditCard },
            { num: 3, label: 'Confirm', icon: CheckCircle },
          ].map((s, i) => (
            <React.Fragment key={s.num}>
              {i > 0 && <div className={`w-12 h-px ${step >= s.num ? 'bg-[#5C3D2E]' : 'bg-[#C9B99A]/30'}`} />}
              <div className={`flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium ${step >= s.num ? 'text-[#5C3D2E]' : 'text-[#C9B99A]'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= s.num ? 'bg-[#5C3D2E] text-[#F5F0E8]' : 'bg-[#C9B99A]/20'}`}>
                  <s.icon size={14} />
                </div>
                <span className="hidden md:inline">{s.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 md:p-12 shadow-sm border border-[#C9B99A]/10"
        >
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <label htmlFor="classSelect" className="text-[10px] uppercase tracking-widest text-[#8B7355] mb-3 block">Select Discipline</label>
                <select 
                  id="classSelect"
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full bg-atelier-bg border border-[#C9B99A]/20 p-3 text-sm focus:outline-none focus:border-[#8B7355] appearance-none"
                >
                  <option value="">Choose a class...</option>
                  {classes.map(c => (
                    <option key={c.id} value={c.id}>{c.name} — ${c.price} ({c.duration})</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="bookDate" className="text-[10px] uppercase tracking-widest text-[#8B7355] mb-3 block">Select Date</label>
                <input
                  id="bookDate"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-atelier-bg border border-[#C9B99A]/20 p-3 text-sm focus:outline-none focus:border-[#8B7355]"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-[#8B7355] mb-3 block">Select Time</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 text-xs font-medium border transition-all ${
                        selectedTime === time 
                          ? 'bg-[#5C3D2E] text-[#F5F0E8] border-[#5C3D2E]' 
                          : 'border-[#C9B99A]/20 hover:border-[#5C3D2E] text-[#3D2B1F]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={!canProceedStep1}
                className="btn w-full disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="bookName" className="text-[10px] uppercase tracking-widest text-[#8B7355] mb-2 block">Full Name</label>
                <input
                  id="bookName"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full bg-atelier-bg border border-[#C9B99A]/20 p-3 text-sm focus:outline-none focus:border-[#8B7355]"
                />
              </div>
              <div>
                <label htmlFor="bookEmail" className="text-[10px] uppercase tracking-widest text-[#8B7355] mb-2 block">Email</label>
                <input
                  id="bookEmail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-atelier-bg border border-[#C9B99A]/20 p-3 text-sm focus:outline-none focus:border-[#8B7355]"
                />
              </div>
              <div>
                <label htmlFor="bookPhone" className="text-[10px] uppercase tracking-widest text-[#8B7355] mb-2 block">Phone</label>
                <input
                  id="bookPhone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your phone number"
                  className="w-full bg-atelier-bg border border-[#C9B99A]/20 p-3 text-sm focus:outline-none focus:border-[#8B7355]"
                />
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="btn flex-1"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!canProceedStep2}
                  className="btn flex-1 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Review & Pay
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8">
              <h3 className="text-xl font-serif text-[#3D2B1F]">Booking Summary</h3>
              
              <div className="space-y-4 bg-atelier-bg p-6 border border-[#C9B99A]/10">
                <div className="flex justify-between">
                  <span className="text-sm text-[#8B7355]">Discipline</span>
                  <span className="text-sm font-medium text-[#3D2B1F]">{selectedClassData?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#8B7355]">Date</span>
                  <span className="text-sm font-medium text-[#3D2B1F]">{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#8B7355]">Time</span>
                  <span className="text-sm font-medium text-[#3D2B1F]">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#8B7355]">Duration</span>
                  <span className="text-sm font-medium text-[#3D2B1F]">{selectedClassData?.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#8B7355]">Name</span>
                  <span className="text-sm font-medium text-[#3D2B1F]">{name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#8B7355]">Email</span>
                  <span className="text-sm font-medium text-[#3D2B1F]">{email}</span>
                </div>
                <div className="border-t border-[#C9B99A]/20 pt-4 flex justify-between items-center">
                  <span className="text-sm font-medium text-[#3D2B1F]">Total</span>
                  <span className="text-2xl font-serif text-[#5C3D2E]">${selectedClassData?.price}</span>
                </div>
              </div>

              {/* Stripe Card Input Placeholder */}
              <div>
                <label className="text-[10px] uppercase tracking-widest text-[#8B7355] mb-3 block">Payment Details</label>
                <div className="bg-atelier-bg border border-[#C9B99A]/20 p-4 space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Card Number (4242 4242 4242 4242)"
                      className="w-full bg-white border border-[#C9B99A]/20 p-3 text-sm focus:outline-none focus:border-[#8B7355]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full bg-white border border-[#C9B99A]/20 p-3 text-sm focus:outline-none focus:border-[#8B7355]"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="w-full bg-white border border-[#C9B99A]/20 p-3 text-sm focus:outline-none focus:border-[#8B7355]"
                    />
                  </div>
                  <p className="text-[10px] text-[#8B7355]/60 flex items-center gap-1">
                    <CreditCard size={12} /> Secured by Stripe · Test mode
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="btn flex-1"
                >
                  Back
                </button>
                <button
                  onClick={handleConfirm}
                  className="btn flex-1 gap-2"
                >
                  <CreditCard size={14} /> Pay ${selectedClassData?.price}
                </button>
              </div>

              <p className="text-[10px] text-center text-[#8B7355] uppercase tracking-widest">
                Cancellation required 24 hours in advance.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BookPage;
