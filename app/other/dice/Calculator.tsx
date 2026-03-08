'use client';
import { useState } from 'react';
export default function Calculator() {
  const [sides, setSides] = useState('6');
  const [count, setCount] = useState('1');
  const [results, setResults] = useState<number[]|null>(null);
  function roll() {
    const s=parseInt(sides)||6, c=Math.min(parseInt(count)||1,20);
    const rolls=Array.from({length:c},()=>Math.floor(Math.random()*s)+1);
    setResults(rolls);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-rose-700">Dice Roller</h2>
      <div className="grid grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Dice Type</label>
          <select value={sides} onChange={e=>setSides(e.target.value)} className="w-full border rounded px-3 py-2">
            {['4','6','8','10','12','20','100'].map(s=><option key={s} value={s}>d{s}</option>)}
          </select></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Number of Dice</label>
          <input type="number" value={count} onChange={e=>setCount(e.target.value)} min="1" max="20" className="w-full border rounded px-3 py-2"/></div>
      </div>
      <button onClick={roll} className="bg-rose-600 text-white px-6 py-2 rounded hover:bg-rose-700">🎲 Roll!</button>
      {results && <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
        <div className="flex flex-wrap gap-3 justify-center mb-3">
          {results.map((r,i)=>(
            <div key={i} className="w-14 h-14 bg-white border-2 border-rose-400 rounded-lg flex items-center justify-center text-2xl font-bold text-rose-700 shadow">{r}</div>
          ))}
        </div>
        <p className="text-center text-gray-700">Total: <span className="font-bold text-rose-700 text-xl">{results.reduce((a,b)=>a+b,0)}</span></p>
      </div>}
    </div>
  );
}
