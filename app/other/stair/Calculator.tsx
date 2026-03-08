'use client';
import { useState } from 'react';
export default function Calculator() {
  const [totalRise,setTotalRise]=useState('');const [riser,setRiser]=useState('7.5');
  const [result,setResult]=useState<{steps:number,run:number}|null>(null);
  function calculate(){
    const tr=parseFloat(totalRise),r=parseFloat(riser);
    if(!tr||!r) return;
    const steps=Math.round(tr/r);
    const run=(tr/steps)*1.6;
    setResult({steps,run});
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-green-700">Stair Calculator</h2>
      <div className="grid grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Total Rise (inches)</label>
          <input type="number" value={totalRise} onChange={e=>setTotalRise(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 108"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Riser Height (inches)</label>
          <input type="number" value={riser} onChange={e=>setRiser(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
      </div>
      <button onClick={calculate} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Calculate</button>
      {result && <div className="bg-green-50 border border-green-200 rounded-lg p-4 grid grid-cols-2 gap-4 text-center">
        <div><p className="text-sm text-gray-500">Number of Steps</p><p className="text-2xl font-bold text-green-700">{result.steps}</p></div>
        <div><p className="text-sm text-gray-500">Recommended Run</p><p className="text-2xl font-bold text-green-700">{result.run.toFixed(1)}"</p></div>
      </div>}
    </div>
  );
}