'use client';
import { useState } from 'react';
export default function Calculator() {
  const [distance,setDistance]=useState('');
  const [mpg,setMpg]=useState('');
  const [price,setPrice]=useState('');
  const [result,setResult]=useState<null|{gallons:number,cost:number}>(null);
  function calculate(){
    const d=parseFloat(distance),m=parseFloat(mpg),p=parseFloat(price);
    if(!d||!m||!p) return;
    const gallons=d/m;
    setResult({gallons,cost:gallons*p});
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-indigo-700">Fuel Cost Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Distance (miles)</label>
          <input type="number" value={distance} onChange={e=>setDistance(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 300"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Fuel Efficiency (MPG)</label>
          <input type="number" value={mpg} onChange={e=>setMpg(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 30"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Gas Price ($/gallon)</label>
          <input type="number" value={price} onChange={e=>setPrice(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 3.50"/></div>
      </div>
      <button onClick={calculate} className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">Calculate</button>
      {result && <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 grid grid-cols-2 gap-4 text-center">
        <div><p className="text-sm text-gray-500">Gallons Used</p><p className="text-2xl font-bold text-indigo-700">{result.gallons.toFixed(2)}</p></div>
        <div><p className="text-sm text-gray-500">Total Fuel Cost</p><p className="text-2xl font-bold text-indigo-700">${result.cost.toFixed(2)}</p></div>
      </div>}
    </div>
  );
}
