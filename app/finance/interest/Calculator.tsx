'use client';
import { useState } from 'react';
export default function Calculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState<null|{interest:number,total:number}>(null);
  function calculate() {
    const p=parseFloat(principal),r=parseFloat(rate)/100,t=parseFloat(time);
    if(!p||!r||!t) return;
    const interest=p*r*t;
    setResult({interest,total:p+interest});
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-green-700">Simple Interest Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Principal ($)</label>
          <input type="number" value={principal} onChange={e=>setPrincipal(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 1000"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Annual Rate (%)</label>
          <input type="number" value={rate} onChange={e=>setRate(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 5"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Time (years)</label>
          <input type="number" value={time} onChange={e=>setTime(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 3"/></div>
      </div>
      <button onClick={calculate} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Calculate</button>
      {result && <div className="bg-green-50 border border-green-200 rounded-lg p-4 grid grid-cols-2 gap-4 text-center">
        <div><p className="text-sm text-gray-500">Interest Earned</p><p className="text-2xl font-bold text-green-700">${result.interest.toFixed(2)}</p></div>
        <div><p className="text-sm text-gray-500">Total Amount</p><p className="text-2xl font-bold text-green-700">${result.total.toFixed(2)}</p></div>
      </div>}
    </div>
  );
}
