'use client';
import { useState } from 'react';
export default function Calculator() {
  const [current, setCurrent] = useState('');
  const [monthly, setMonthly] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState<number|null>(null);
  function calculate() {
    const p=parseFloat(current)||0,m=parseFloat(monthly)||0,r=parseFloat(rate)/100/12,n=parseFloat(years)*12;
    if(!r||!n) return;
    const future=p*Math.pow(1+r,n)+m*((Math.pow(1+r,n)-1)/r);
    setResult(future);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Retirement Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Current Savings ($)</label>
          <input type="number" value={current} onChange={e=>setCurrent(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 10000"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Monthly Contribution ($)</label>
          <input type="number" value={monthly} onChange={e=>setMonthly(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 500"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Annual Return Rate (%)</label>
          <input type="number" value={rate} onChange={e=>setRate(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 7"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Years Until Retirement</label>
          <input type="number" value={years} onChange={e=>setYears(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 30"/></div>
      </div>
      <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Calculate</button>
      {result !== null && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-500">Estimated Retirement Savings</p>
        <p className="text-3xl font-bold text-blue-700">${result.toLocaleString('en-US',{maximumFractionDigits:2})}</p>
      </div>}
    </div>
  );
}
