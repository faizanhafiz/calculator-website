'use client';
import { useState } from 'react';
export default function Calculator() {
  const [miles,setMiles]=useState('');const [gallons,setGallons]=useState('');const [result,setResult]=useState<string|null>(null);
  function calculate(){const m=parseFloat(miles),g=parseFloat(gallons);if(!m||!g) return;setResult(`${(m/g).toFixed(2)} MPG`);}
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-green-700">Gas Mileage Calculator</h2>
      <div className="grid grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Miles Driven</label>
          <input type="number" value={miles} onChange={e=>setMiles(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 300"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Gallons Used</label>
          <input type="number" value={gallons} onChange={e=>setGallons(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 10"/></div>
      </div>
      <button onClick={calculate} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Calculate</button>
      {result && <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center"><p className="text-3xl font-bold text-green-700">{result}</p></div>}
    </div>
  );
}