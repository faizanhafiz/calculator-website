'use client';
import { useState } from 'react';
export default function Calculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [n, setN] = useState('12');
  const [result, setResult] = useState<null|{amount:number,interest:number}>(null);
  function calculate() {
    const p=parseFloat(principal),r=parseFloat(rate)/100,t=parseFloat(years),ni=parseFloat(n);
    if(!p||!r||!t) return;
    const amount=p*Math.pow(1+r/ni,ni*t);
    setResult({amount,interest:amount-p});
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-green-700">Compound Interest Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Principal ($)</label>
          <input type="number" value={principal} onChange={e=>setPrincipal(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 5000"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Annual Rate (%)</label>
          <input type="number" value={rate} onChange={e=>setRate(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 7"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Time (years)</label>
          <input type="number" value={years} onChange={e=>setYears(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 10"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Compounding Frequency</label>
          <select value={n} onChange={e=>setN(e.target.value)} className="w-full border rounded px-3 py-2">
            <option value="1">Annually</option><option value="4">Quarterly</option>
            <option value="12">Monthly</option><option value="365">Daily</option>
          </select></div>
      </div>
      <button onClick={calculate} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Calculate</button>
      {result && <div className="bg-green-50 border border-green-200 rounded-lg p-4 grid grid-cols-2 gap-4 text-center">
        <div><p className="text-sm text-gray-500">Future Value</p><p className="text-2xl font-bold text-green-700">${result.amount.toFixed(2)}</p></div>
        <div><p className="text-sm text-gray-500">Interest Earned</p><p className="text-2xl font-bold text-green-600">${result.interest.toFixed(2)}</p></div>
      </div>}
    </div>
  );
}
