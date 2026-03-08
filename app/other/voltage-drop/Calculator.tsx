'use client';
import { useState } from 'react';
export default function Calculator() {
  const [current,setCurrent]=useState('');const [length,setLength]=useState('');
  const [gauge,setGauge]=useState('12');const [result,setResult]=useState<{drop:number,pct:number}|null>(null);
  const resistance:Record<string,number>={'10':1.24,'12':1.98,'14':3.14,'16':4.99,'18':7.95,'20':10.15};
  function calculate(){
    const i=parseFloat(current),l=parseFloat(length);if(!i||!l) return;
    const r=(resistance[gauge]||1.98)*l*2/1000;
    const drop=i*r;
    setResult({drop,pct:drop/120*100});
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-red-700">Voltage Drop Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Current (Amps)</label>
          <input type="number" value={current} onChange={e=>setCurrent(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 20"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">One-way Length (ft)</label>
          <input type="number" value={length} onChange={e=>setLength(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 50"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Wire Gauge (AWG)</label>
          <select value={gauge} onChange={e=>setGauge(e.target.value)} className="w-full border rounded px-3 py-2">
            {['10','12','14','16','18','20'].map(g=><option key={g} value={g}>AWG {g}</option>)}
          </select></div>
      </div>
      <button onClick={calculate} className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">Calculate</button>
      {result && <div className="bg-red-50 border border-red-200 rounded-lg p-4 grid grid-cols-2 gap-4 text-center">
        <div><p className="text-sm text-gray-500">Voltage Drop</p><p className="text-2xl font-bold text-red-700">{result.drop.toFixed(2)} V</p></div>
        <div><p className="text-sm text-gray-500">% Drop</p><p className={`text-2xl font-bold ${result.pct>5?'text-red-600':'text-green-700'}`}>{result.pct.toFixed(2)}%</p></div>
      </div>}
    </div>
  );
}