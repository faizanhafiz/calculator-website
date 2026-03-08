'use client';
import { useState } from 'react';
export default function Calculator() {
  const [mode, setMode] = useState('pct_of');
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState<string|null>(null);
  function calculate() {
    const av=parseFloat(a),bv=parseFloat(b);
    if(isNaN(av)||isNaN(bv)) return;
    if(mode==='pct_of') setResult(`${av}% of ${bv} = ${(av/100*bv).toFixed(4)}`);
    else if(mode==='is_what_pct') setResult(`${av} is ${(av/bv*100).toFixed(4)}% of ${bv}`);
    else if(mode==='pct_change') setResult(`Percentage change: ${((bv-av)/av*100).toFixed(4)}%`);
  }
  const labels:Record<string,{a:string,b:string}> = {
    pct_of:{a:'Percentage (%)',b:'Of number'},
    is_what_pct:{a:'Number',b:'Of total'},
    pct_change:{a:'Original value',b:'New value'},
  };
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-green-700">Percentage Calculator</h2>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Calculation Type</label>
        <select value={mode} onChange={e=>{setMode(e.target.value);setResult(null);}} className="border rounded px-3 py-2">
          <option value="pct_of">What is X% of Y?</option>
          <option value="is_what_pct">X is what % of Y?</option>
          <option value="pct_change">Percentage Change from X to Y</option>
        </select></div>
      <div className="grid grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">{labels[mode].a}</label>
          <input type="number" value={a} onChange={e=>setA(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">{labels[mode].b}</label>
          <input type="number" value={b} onChange={e=>setB(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
      </div>
      <button onClick={calculate} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Calculate</button>
      {result && <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-green-700">{result}</p>
      </div>}
    </div>
  );
}
