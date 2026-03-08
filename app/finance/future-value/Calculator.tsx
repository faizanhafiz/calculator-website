'use client';
import { useState } from 'react';
export default function Calculator() {
  const [pv, setPv] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState<number|null>(null);
  function calculate() {
    const p=parseFloat(pv),r=parseFloat(rate)/100,t=parseFloat(years);
    if(!p||!r||!t) return;
    setResult(p*Math.pow(1+r,t));
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-purple-700">Future Value Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Present Value ($)</label>
          <input type="number" value={pv} onChange={e=>setPv(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 1000"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Annual Rate (%)</label>
          <input type="number" value={rate} onChange={e=>setRate(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 8"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Years</label>
          <input type="number" value={years} onChange={e=>setYears(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 5"/></div>
      </div>
      <button onClick={calculate} className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Calculate</button>
      {result !== null && <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-500">Future Value</p>
        <p className="text-3xl font-bold text-purple-700">${result.toFixed(2)}</p>
      </div>}
    </div>
  );
}
