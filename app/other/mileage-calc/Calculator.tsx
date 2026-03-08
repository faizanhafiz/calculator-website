'use client';
import { useState } from 'react';
export default function Calculator() {
  const [distance,setDistance]=useState('');const [mpg,setMpg]=useState('');const [fuelPrice,setFuelPrice]=useState('');const [result,setResult]=useState<{gallons:number,cost:number}|null>(null);
  function calculate(){const d=parseFloat(distance),m=parseFloat(mpg),p=parseFloat(fuelPrice)||0;if(!d||!m) return;const g=d/m;setResult({gallons:g,cost:g*p});}
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-green-700">Mileage Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Distance (miles)</label>
          <input type="number" value={distance} onChange={e=>setDistance(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 200"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Fuel Economy (MPG)</label>
          <input type="number" value={mpg} onChange={e=>setMpg(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 30"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Fuel Price ($/gal, optional)</label>
          <input type="number" value={fuelPrice} onChange={e=>setFuelPrice(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 3.50"/></div>
      </div>
      <button onClick={calculate} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Calculate</button>
      {result && <div className="bg-green-50 border border-green-200 rounded-lg p-4 grid grid-cols-2 gap-4 text-center">
        <div><p className="text-sm text-gray-500">Fuel Needed</p><p className="text-2xl font-bold text-green-700">{result.gallons.toFixed(2)} gal</p></div>
        {result.cost>0&&<div><p className="text-sm text-gray-500">Fuel Cost</p><p className="text-2xl font-bold text-green-700">${result.cost.toFixed(2)}</p></div>}
      </div>}
    </div>
  );
}