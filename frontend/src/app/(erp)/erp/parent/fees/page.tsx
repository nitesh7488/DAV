"use client";

import { useState } from "react";
import { CreditCard, CheckCircle, AlertCircle } from "lucide-react";

export default function FeePayment() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const dues = [
    { term: "Term 1 Tuition Fee", amount: 12500, dueDate: "2026-05-25", status: "PENDING" },
    { term: "Transport Fee (May)", amount: 1500, dueDate: "2026-05-10", status: "OVERDUE" },
  ];

  const totalDue = dues.reduce((acc, curr) => acc + curr.amount, 0);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      // 1. Create order on backend
      // const res = await fetch('http://localhost:5000/api/payments/create-order', { ... })
      // const data = await res.json()
      
      // 2. Initialize Razorpay Checkout
      /*
      const options = {
        key: "YOUR_RAZORPAY_KEY_ID",
        amount: data.order.amount,
        currency: "INR",
        name: "D A V Moti Public School Mundro Bagoder",
        description: "Fee Payment",
        order_id: data.order.id,
        handler: async function (response: any) {
          // 3. Verify payment on backend
          // const verifyRes = await fetch('http://localhost:5000/api/payments/verify', { ... })
          setPaymentSuccess(true);
        },
        prefill: {
          name: "Michael Doe",
          email: "michael@example.com",
          contact: "9876543210"
        },
        theme: {
          color: "#4f46e5"
        }
      };
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
      */

      // Simulated flow for demo
      setTimeout(() => {
        setIsProcessing(false);
        setPaymentSuccess(true);
      }, 2000);

    } catch (error) {
      console.error(error);
      setIsProcessing(false);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 text-center max-w-2xl mx-auto mt-10">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Payment Successful!</h2>
        <p className="text-slate-600 text-lg mb-8">
          Thank you. Your fee payment of ₹{totalDue.toLocaleString()} has been received successfully. A receipt has been sent to your registered email.
        </p>
        <button 
          onClick={() => setPaymentSuccess(false)}
          className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
        >
          View Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Fee Details & Payment</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-rose-500 md:col-span-2">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Total Amount Due</h3>
          <p className="text-4xl font-extrabold text-slate-900 mb-2">₹{totalDue.toLocaleString()}</p>
          <p className="text-sm text-slate-500 flex items-center">
            <AlertCircle className="w-4 h-4 text-rose-500 mr-1" />
            Please clear the dues before the deadline to avoid late fees.
          </p>
        </div>
        <div className="bg-indigo-600 p-6 rounded-2xl shadow-sm text-white flex flex-col justify-center">
          <h3 className="text-lg font-bold mb-4">Pay Now</h3>
          <button 
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full bg-white text-indigo-600 font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isProcessing ? "Processing..." : (
              <>
                <CreditCard className="w-5 h-5 mr-2" /> Pay via Razorpay
              </>
            )}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-900">Fee Breakdown</h2>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-sm">
              <th className="px-6 py-4 font-medium">Particulars</th>
              <th className="px-6 py-4 font-medium">Due Date</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-slate-100">
            {dues.map((due, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-900">{due.term}</td>
                <td className="px-6 py-4 text-slate-600">{due.dueDate}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${due.status === 'OVERDUE' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'}`}>
                    {due.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right font-bold text-slate-900">₹{due.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
