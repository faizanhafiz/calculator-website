'use client';
import { useState } from 'react';
export default function Calculator() {
  const [temp,setTemp]=useState('');const [wind,setWind]=useState('');const [unit,setUnit]=useState('F');const [result,setResult]=useState<string|null>(null);
  function calculate(){
    let t=parseFloat(temp),w=parseFloat(wind);if(isNaN(t)||isNaN(w)) return;
    if(unit==='C'){t=t*9/5+32;}
    const wc=35.74+0.6215*t-35.75*Math.pow(w,0.16)+0.4275*t*Math.pow(w,0.16);
    if(unit==='C') setResult(`${((wc-32)*5/9).toFixed(1)} °C`);
    else setResult(`${wc.toFixed(1)} °F`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-sky-700">Wind Chill Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Temperature</label>
          <div className="flex gap-2">
            <input type="number" value={temp} onChange={e=>setTemp(e.target.value)} className="flex-1 border rounded px-3 py-2" placeholder="e.g. 32"/>
            <select value={unit} onChange={e=>setUnit(e.target.value)} className="border rounded px-2 py-2">
              <option>°F</option><option>°C</option>
            </select>
          </div>
        </div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Wind Speed (mph)</label>
          <input type="number" value={wind} onChange={e=>setWind(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 20"/></div>
      </div>
      <button onClick={calculate} className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700">Calculate</button>
      {result && <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-500">Wind Chill</p>
        <p className="text-3xl font-bold text-sky-700">{result}</p>
      </div>}
    </div>
  );
}