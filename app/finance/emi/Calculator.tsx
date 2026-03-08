'use client';
import { useState } from 'react';
export default function Calculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [months, setMonths] = useState('');
  const [result, setResult] = useState<null|{emi:number,total:number,interest:number}>(null);
  function calculate() {
    const p=parseFloat(principal),r=parseFloat(rate)/100/12,n=parseFloat(months);
    if(!p||!r||!n) return;
    const emi=p*(r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
    setResult({emi,total:emi*n,interest:emi*n-p});
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">EMI Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount ($)</label>
          <input type="number" value={principal} onChange={e=>setPrincipal(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 50000"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Annual Interest Rate (%)</label>
          <input type="number" value={rate} onChange={e=>setRate(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 8"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Tenure (months)</label>
          <input type="number" value={months} onChange={e=>setMonths(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 36"/></div>
      </div>
      <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Calculate EMI</button>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div><p className="text-sm text-gray-500">Monthly EMI</p><p className="text-2xl font-bold text-blue-700">${result.emi.toFixed(2)}</p></div>
        <div><p className="text-sm text-gray-500">Total Payment</p><p className="text-2xl font-bold text-blue-700">${result.total.toFixed(2)}</p></div>
        <div><p className="text-sm text-gray-500">Total Interest</p><p className="text-2xl font-bold text-red-500">${result.interest.toFixed(2)}</p></div>
      </div>}
    </div>
  );
}
