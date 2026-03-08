'use client';
import { useState } from 'react';
export default function Calculator() {
  const [rl,setRl]=useState('');const [rw,setRw]=useState('');
  const [tl,setTl]=useState('12');const [tw,setTw]=useState('12');const [waste,setWaste]=useState('10');
  const [result,setResult]=useState<{tiles:number,sqft:number}|null>(null);
  function calculate(){
    const rlv=parseFloat(rl),rwv=parseFloat(rw),tlv=parseFloat(tl)/12,twv=parseFloat(tw)/12;
    if(!rlv||!rwv||!tlv||!twv) return;
    const sqft=rlv*rwv, tileSqft=tlv*twv;
    const wasteFactor=1+parseFloat(waste)/100;
    setResult({tiles:Math.ceil(sqft/tileSqft*wasteFactor),sqft});
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Tile Calculator</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Room Length (ft)</label>
          <input type="number" value={rl} onChange={e=>setRl(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Room Width (ft)</label>
          <input type="number" value={rw} onChange={e=>setRw(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Tile Length (in)</label>
          <input type="number" value={tl} onChange={e=>setTl(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Tile Width (in)</label>
          <input type="number" value={tw} onChange={e=>setTw(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Waste % (overage)</label>
          <input type="number" value={waste} onChange={e=>setWaste(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
      </div>
      <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Calculate</button>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 grid grid-cols-2 gap-4 text-center">
        <div><p className="text-sm text-gray-500">Tiles Needed</p><p className="text-2xl font-bold text-blue-700">{result.tiles}</p></div>
        <div><p className="text-sm text-gray-500">Area</p><p className="text-2xl font-bold text-blue-700">{result.sqft.toFixed(1)} sqft</p></div>
      </div>}
    </div>
  );
}