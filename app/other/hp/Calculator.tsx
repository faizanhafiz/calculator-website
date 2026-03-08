'use client';
import { useState } from 'react';
export default function Calculator() {
  const [torque,setTorque]=useState('');const [rpm,setRpm]=useState('');const [result,setResult]=useState<string|null>(null);
  function calculate(){const t=parseFloat(torque),r=parseFloat(rpm);if(!t||!r) return;setResult(`${(t*r/5252).toFixed(2)} HP`);}
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-red-700">Horsepower Calculator</h2>
      <p className="text-gray-600">HP = (Torque × RPM) / 5252</p>
      <div className="grid grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Torque (lb-ft)</label>
          <input type="number" value={torque} onChange={e=>setTorque(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 300"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">RPM</label>
          <input type="number" value={rpm} onChange={e=>setRpm(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 5000"/></div>
      </div>
      <button onClick={calculate} className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">Calculate</button>
      {result && <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center"><p className="text-3xl font-bold text-red-700">{result}</p></div>}
    </div>
  );
}