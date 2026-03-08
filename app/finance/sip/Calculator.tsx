'use client';
import { useState } from 'react';
export default function Calculator() {
  const [monthly, setMonthly] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState<null|{invested:number,returns:number,total:number}>(null);
  function calculate() {
    const m=parseFloat(monthly),r=parseFloat(rate)/100/12,n=parseFloat(years)*12;
    if(!m||!r||!n) return;
    const total=m*((Math.pow(1+r,n)-1)/r)*(1+r);
    const invested=m*n;
    setResult({invested,returns:total-invested,total});
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-green-700">SIP Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Monthly Investment ($)</label>
          <input type="number" value={monthly} onChange={e=>setMonthly(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 500"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Expected Return Rate (%)</label>
          <input type="number" value={rate} onChange={e=>setRate(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 12"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Investment Period (years)</label>
          <input type="number" value={years} onChange={e=>setYears(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 10"/></div>
      </div>
      <button onClick={calculate} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Calculate</button>
      {result && <div className="bg-green-50 border border-green-200 rounded-lg p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div><p className="text-sm text-gray-500">Invested Amount</p><p className="text-2xl font-bold text-gray-700">${result.invested.toFixed(2)}</p></div>
        <div><p className="text-sm text-gray-500">Estimated Returns</p><p className="text-2xl font-bold text-green-700">${result.returns.toFixed(2)}</p></div>
        <div><p className="text-sm text-gray-500">Total Value</p><p className="text-2xl font-bold text-green-800">${result.total.toFixed(2)}</p></div>
      </div>}
    </div>
  );
}
