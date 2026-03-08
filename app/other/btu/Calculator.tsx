'use client';
import { useState } from 'react';
export default function Calculator() {
  const [length,setLength]=useState('');const [width,setWidth]=useState('');
  const [height,setHeight]=useState('8');const [insulation,setInsulation]=useState('average');
  const [result,setResult]=useState<number|null>(null);
  function calculate(){
    const l=parseFloat(length),w=parseFloat(width),h=parseFloat(height);
    if(!l||!w) return;
    const volume=l*w*h;
    const factor=insulation==='poor'?6:insulation==='average'?4:3;
    setResult(Math.round(volume*factor));
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-orange-700">BTU Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Room Length (ft)</label>
          <input type="number" value={length} onChange={e=>setLength(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 15"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Room Width (ft)</label>
          <input type="number" value={width} onChange={e=>setWidth(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 12"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Ceiling Height (ft)</label>
          <input type="number" value={height} onChange={e=>setHeight(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Insulation Quality</label>
          <select value={insulation} onChange={e=>setInsulation(e.target.value)} className="w-full border rounded px-3 py-2">
            <option value="poor">Poor</option><option value="average">Average</option><option value="good">Good</option>
          </select></div>
      </div>
      <button onClick={calculate} className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700">Calculate</button>
      {result !== null && <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-500">Required BTU</p>
        <p className="text-3xl font-bold text-orange-700">{result.toLocaleString()} BTU/hr</p>
      </div>}
    </div>
  );
}