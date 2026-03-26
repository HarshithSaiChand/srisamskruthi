import React, { useState } from 'react';

const PaymentGateway = ({ total, onPaymentSuccess, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handlePayment = (method) => {
    setSelectedMethod(method);
    setLoading(true);
    // Simulate payment processing delay, then succeed
    setTimeout(() => {
      onPaymentSuccess(method);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden relative animate-fade-in-up">
        
        {/* Header */}
        <div className="bg-white px-6 py-4 flex justify-between items-center border-b border-gray-100">
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
              <span className="text-xl">✕</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="bg-blue-900 text-white rounded p-1 w-8 h-8 flex items-center justify-center font-bold">
                SS
              </div>
              <span className="font-semibold text-gray-800">SriSamskruthi</span>
            </div>
          </div>
          <div className="bg-gray-100 p-1.5 rounded-full">
            <span className="text-sm">👤</span>
          </div>
        </div>

        {/* Total Payable Section */}
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-b border-gray-100">
          <div>
            <p className="text-xs text-gray-500 mb-1">Total Payable</p>
            <p className="font-bold text-lg text-gray-800">Checkout</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-xl text-gray-900 flex items-center gap-1 cursor-pointer">
              ₹{total.toLocaleString('en-IN')} <span className="text-sm">ᐯ</span>
            </p>
            <p className="text-xs text-green-600 font-semibold cursor-pointer whitespace-nowrap">
              % VIEW 5+ OFFERS
            </p>
          </div>
        </div>

        {/* Options Container */}
        <div className="px-6 py-4 max-h-[60vh] overflow-y-auto">
          
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600 font-medium">Processing payment with {selectedMethod}...</p>
              <p className="text-xs text-gray-400 mt-2">Please do not refresh or close this window.</p>
            </div>
          ) : (
            <>
              {/* Preferred Payment Options */}
              <div className="mb-6">
                <p className="text-xs font-bold text-gray-400 mb-3 tracking-wide">PREFERRED PAYMENT OPTIONS</p>
                <div className="border border-gray-200 rounded-lg divide-y divide-gray-100">
                  <button 
                    onClick={() => handlePayment('HDFC Bank')}
                    className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition"
                  >
                    <span className="text-gray-700 font-medium text-sm">HDFC Bank</span>
                    <span className="text-xl">🏦</span>
                  </button>
                  <button 
                    onClick={() => handlePayment('PhonePe Wallet')}
                    className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition"
                  >
                    <span className="text-gray-700 font-medium text-sm">PhonePe Wallet</span>
                    <span className="text-purple-600 text-xl">पे</span>
                  </button>
                </div>
              </div>

              {/* Unlock Saved Options */}
              <button className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium text-green-700 flex items-center justify-center gap-2 mb-6 hover:bg-green-50 transition">
                <span>🔒</span> Unlock your saved payment options
              </button>

              {/* All Payment Options */}
              <div>
                <p className="text-xs font-bold text-gray-400 mb-3 tracking-wide">ALL PAYMENT OPTIONS</p>
                <div className="border border-gray-200 rounded-lg divide-y divide-gray-100">
                  <button 
                    onClick={() => handlePayment('UPI')}
                    className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition"
                  >
                    <span className="text-gray-700 font-medium text-sm">UPI</span>
                    <div className="flex gap-1 text-xs">
                      <span className="bg-blue-100 text-blue-800 px-1 rounded font-bold">GPay</span>
                      <span className="bg-purple-100 text-purple-800 px-1 rounded font-bold">पे</span>
                    </div>
                  </button>
                  
                  <button 
                    onClick={() => handlePayment('Cards')}
                    className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition"
                  >
                    <div className="text-left">
                      <p className="text-gray-700 font-medium text-sm">Cards (Credit/Debit)</p>
                      <p className="text-xs text-green-600 mt-0.5">₹1000 Cashback</p>
                    </div>
                    <span className="text-gray-400 text-xl">💳</span>
                  </button>

                  <button 
                    onClick={() => handlePayment('Net Banking')}
                    className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition"
                  >
                    <span className="text-gray-700 font-medium text-sm">Net Banking</span>
                    <div className="flex gap-1 text-xs">
                      <span className="bg-red-100 text-red-800 px-1 rounded font-bold text-[10px]">HDFC</span>
                      <span className="bg-blue-100 text-blue-800 px-1 rounded font-bold text-[10px]">SBI</span>
                    </div>
                  </button>

                  <button 
                    onClick={() => handlePayment('Wallet')}
                    className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition"
                  >
                    <div className="text-left">
                      <p className="text-gray-700 font-medium text-sm">Wallet</p>
                      <p className="text-xs text-green-600 mt-0.5">₹50 - ₹250 Cashback</p>
                    </div>
                    <div className="flex gap-1 text-xs">
                      <span className="bg-purple-100 text-purple-800 px-1 rounded font-bold">पे</span>
                      <span className="bg-blue-100 text-blue-800 px-1 rounded font-bold">Paytm</span>
                    </div>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex items-start gap-3">
          <input type="checkbox" defaultChecked className="mt-1 flex-shrink-0 cursor-pointer" />
          <p className="text-[10px] text-gray-500 leading-tight">
            I consent to <strong>PayU Group</strong>, their Business Partners and their service providers processing my data to offer relevant products and services. <a href="#" className="underline">Manage your preference here</a>.
          </p>
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default PaymentGateway;
