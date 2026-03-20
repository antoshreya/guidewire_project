import React, { useState } from 'react';
import WorkerLayout from '../../components/WorkerLayout';
import { CreditCard, Smartphone, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const [method, setMethod] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/worker/dashboard');
      }, 2000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <WorkerLayout>
         <div className="flex flex-col items-center justify-center h-full max-w-md mx-auto text-center" style={{ paddingTop: '10vh' }}>
           <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
             <CheckCircle2 size={48} className="text-success" />
           </div>
           <h2 className="text-3xl font-bold text-white mb-4">Payment Successful!</h2>
           <p className="text-muted mb-8 text-lg">Your Standard Plan is now active. You are protected for the next 7 days.</p>
           <div className="card w-full flex items-center gap-4 justify-center">
             <ShieldCheck size={24} className="text-primary" />
             <span className="font-semibold text-white">Coverage up to ₹1,500/day</span>
           </div>
         </div>
      </WorkerLayout>
    );
  }

  return (
    <WorkerLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-2">Complete Your Payment</h1>
        <p className="text-muted mb-8">Securely process your weekly premium to activate coverage.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div>
            <div className="card mb-6">
              <h3 className="font-semibold text-white mb-4 border-b pb-2" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>Order Summary</h3>
              
              <div className="flex justify-between items-center mb-3 text-sm border-b pb-2" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                <span className="text-muted">Standard Plan (Weekly)</span>
                <span className="font-medium text-white">₹50.00</span>
              </div>
              <div className="flex justify-between items-center mb-4 text-sm mt-2">
                <span className="text-muted">Taxes & Fees</span>
                <span className="font-medium text-white">₹0.00</span>
              </div>
              
              <div className="flex justify-between items-center pt-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                <span className="font-bold text-white">Total Amount</span>
                <span className="text-2xl font-bold text-primary">₹50.00</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
              <ShieldCheck className="text-primary shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-blue-200">Your connection is securely encrypted. We do not store your payment credentials on our servers.</p>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white">Select Payment Method</h3>
            
            <div 
              className={`p-4 rounded-lg border-2 cursor-pointer flex items-center gap-4 transition-all ${method === 'upi' ? 'border-primary' : 'border-transparent'}`}
              style={{ backgroundColor: method === 'upi' ? 'rgba(59, 130, 246, 0.05)' : 'var(--color-bg-card)' }}
              onClick={() => setMethod('upi')}
            >
              <Smartphone size={24} className={method === 'upi' ? 'text-primary' : 'text-muted'} />
              <div>
                <h4 className="font-medium text-white">UPI Payment</h4>
                <p className="text-sm text-muted">Google Pay, PhonePe, Paytm</p>
              </div>
            </div>
            
            <div 
              className={`p-4 rounded-lg border-2 cursor-pointer flex items-center gap-4 transition-all ${method === 'card' ? 'border-primary' : 'border-transparent'}`}
              style={{ backgroundColor: method === 'card' ? 'rgba(59, 130, 246, 0.05)' : 'var(--color-bg-card)' }}
              onClick={() => setMethod('card')}
            >
              <CreditCard size={24} className={method === 'card' ? 'text-primary' : 'text-muted'} />
              <div>
                <h4 className="font-medium text-white">Credit / Debit Card</h4>
                <p className="text-sm text-muted">Visa, Mastercard, RuPay</p>
              </div>
            </div>

            <div className="card mt-2">
               {method === 'upi' ? (
                 <div>
                   <label className="text-sm text-muted mb-2 block">Enter UPI ID</label>
                   <input type="text" className="input mb-4" placeholder="username@upi" />
                 </div>
               ) : (
                 <div className="flex flex-col gap-3">
                   <input type="text" className="input" placeholder="Card Number" />
                   <div className="grid grid-cols-2 gap-3">
                     <input type="text" className="input" placeholder="MM/YY" />
                     <input type="text" className="input" placeholder="CVV" />
                   </div>
                 </div>
               )}
               
               <button 
                className="btn btn-primary w-full mt-4" 
                onClick={handlePayment} 
                disabled={isProcessing}
               >
                 {isProcessing ? 'Processing securely...' : 'Pay ₹50.00 Now'}
                 {!isProcessing && <ArrowRight size={18} />}
               </button>
            </div>
          </div>
        </div>
      </div>
    </WorkerLayout>
  );
}
