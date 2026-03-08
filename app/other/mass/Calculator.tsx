'use client';
import { useState } from 'react';
const units=['kg','g','mg','lb','oz','ton'];
const toKg:Record<string,number>={kg:1,g:0.001,mg:0.000001,lb:0.453592,oz:0.0283495,ton:1000};
export default function Calculator() {
  const [val,setVal]=useState('');const [from,setFrom]=useState('kg');const [to,setTo]=useState('lb');
  const [result,setResult]=useState<string|null>(null);
  function calculate(){const v=parseFloat(val);if(isNaN(v)) return;setResult(`${(v*toKg[from]/toKg[to]).toFixed(6)} ${to}`);}
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Mass Converter</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Value</label>
          <input type="number" value={val} onChange={e=>setVal(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="Enter value"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">From</label>
          <select value={from} onChange={e=>setFrom(e.target.value)} className="w-full border rounded px-3 py-2">
            {units.map(u=><option key={u} value={u}>{u}</option>)}
          </select></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">To</label>
          <select value={to} onChange={e=>setTo(e.target.value)} className="w-full border rounded px-3 py-2">
            {units.map(u=><option key={u} value={u}>{u}</option>)}
          </select></div>
      </div>
      <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Convert</button>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-blue-700">{result}</p>
      </div>}
    </div>
  );
}