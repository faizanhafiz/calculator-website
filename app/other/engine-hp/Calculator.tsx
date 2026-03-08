'use client';
import { useState } from 'react';
export default function Calculator() {
  const [weight,setWeight]=useState('');const [et,setEt]=useState('');const [result,setResult]=useState<string|null>(null);
  function calculate(){const w=parseFloat(weight),e=parseFloat(et);if(!w||!e) return;setResult(`~${Math.round(Math.pow(w/e/0.0234,3))} HP (estimated)`);}
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-red-700">Engine Horsepower Calculator</h2>
      <p className="text-gray-600 text-sm">Estimate HP from 1/4 mile elapsed time (ET)</p>
      <div className="grid grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Weight (lbs)</label>
          <input type="number" value={weight} onChange={e=>setWeight(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 3500"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">1/4 Mile ET (seconds)</label>
          <input type="number" value={et} onChange={e=>setEt(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 13.5" step="0.1"/></div>
      </div>
      <button onClick={calculate} className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">Calculate</button>
      {result && <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center"><p className="text-3xl font-bold text-red-700">{result}</p></div>}
    </div>
  );
}