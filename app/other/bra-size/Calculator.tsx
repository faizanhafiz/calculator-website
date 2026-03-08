'use client';
import { useState } from 'react';
export default function Calculator() {
  const [band,setBand]=useState('');const [bust,setBust]=useState('');const [result,setResult]=useState<string|null>(null);
  const cups=['AA','A','B','C','D','DD','DDD','G','H','I','J'];
  function calculate(){
    const b=parseFloat(band),bu=parseFloat(bust);if(!b||!bu) return;
    const bandSize=b%2===0?b:b+1;
    const cupDiff=Math.max(0,Math.round(bu-bandSize));
    const cup=cups[Math.min(cupDiff,cups.length-1)]||'K+';
    setResult(`${bandSize}${cup}`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-pink-700">Bra Size Calculator</h2>
      <p className="text-gray-600 text-sm">Measure in inches while wearing a non-padded bra</p>
      <div className="grid grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Band Measurement (inches)</label>
          <p className="text-xs text-gray-500 mb-1">Measure under bust</p>
          <input type="number" value={band} onChange={e=>setBand(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 32"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Bust Measurement (inches)</label>
          <p className="text-xs text-gray-500 mb-1">Measure fullest part</p>
          <input type="number" value={bust} onChange={e=>setBust(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 36"/></div>
      </div>
      <button onClick={calculate} className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700">Calculate Size</button>
      {result && <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-500">Your Estimated Size</p>
        <p className="text-4xl font-bold text-pink-700">{result}</p>
        <p className="text-xs text-gray-500 mt-2">Try on different sizes for the best fit</p>
      </div>}
    </div>
  );
}