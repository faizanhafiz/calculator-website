'use client';
import { useState } from 'react';
export default function Calculator() {
  const [kg,setKg]=useState('');const [result,setResult]=useState<{lbs:number,oz:number,g:number,stone:number}|null>(null);
  function calculate(){
    const k=parseFloat(kg);if(!k) return;
    setResult({lbs:k*2.20462,oz:k*35.274,g:k*1000,stone:k*0.157473});
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-green-700">Weight Converter</h2>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Weight in Kilograms</label>
        <input type="number" value={kg} onChange={e=>setKg(e.target.value)} className="w-full md:w-64 border rounded px-3 py-2" placeholder="e.g. 70" step="any"/></div>
      <button onClick={calculate} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Convert</button>
      {result && <div className="bg-green-50 border border-green-200 rounded-lg p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div><p className="text-sm text-gray-500">Pounds</p><p className="text-xl font-bold text-green-700">{result.lbs.toFixed(2)}</p></div>
        <div><p className="text-sm text-gray-500">Ounces</p><p className="text-xl font-bold text-green-700">{result.oz.toFixed(2)}</p></div>
        <div><p className="text-sm text-gray-500">Grams</p><p className="text-xl font-bold text-green-700">{result.g.toFixed(0)}</p></div>
        <div><p className="text-sm text-gray-500">Stone</p><p className="text-xl font-bold text-green-700">{result.stone.toFixed(2)}</p></div>
      </div>}
    </div>
  );
}