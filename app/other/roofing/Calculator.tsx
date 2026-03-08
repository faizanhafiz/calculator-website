'use client';
import { useState } from 'react';
export default function Calculator() {
  const [length,setLength]=useState('');const [width,setWidth]=useState('');const [pitch,setPitch]=useState('4');
  const [result,setResult]=useState<{sqft:number,squares:number,bundles:number}|null>(null);
  function calculate(){
    const l=parseFloat(length),w=parseFloat(width),p=parseFloat(pitch);
    if(!l||!w) return;
    const pitchFactor=Math.sqrt(1+(p/12)**2);
    const sqft=l*w*pitchFactor;
    const squares=sqft/100;
    setResult({sqft,squares,bundles:Math.ceil(squares*3)});
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Roofing Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Length (ft)</label>
          <input type="number" value={length} onChange={e=>setLength(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 40"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Width (ft)</label>
          <input type="number" value={width} onChange={e=>setWidth(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 30"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Pitch (rise per 12")</label>
          <input type="number" value={pitch} onChange={e=>setPitch(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
      </div>
      <button onClick={calculate} className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700">Calculate</button>
      {result && <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 grid grid-cols-3 gap-4 text-center">
        <div><p className="text-sm text-gray-500">Sq Footage</p><p className="text-2xl font-bold text-gray-700">{result.sqft.toFixed(0)}</p></div>
        <div><p className="text-sm text-gray-500">Squares</p><p className="text-2xl font-bold text-gray-700">{result.squares.toFixed(2)}</p></div>
        <div><p className="text-sm text-gray-500">Shingle Bundles</p><p className="text-2xl font-bold text-gray-700">{result.bundles}</p></div>
      </div>}
    </div>
  );
}