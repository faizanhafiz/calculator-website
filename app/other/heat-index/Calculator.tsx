'use client';
import { useState } from 'react';
export default function Calculator() {
  const [temp,setTemp]=useState('');const [humidity,setHumidity]=useState('');const [unit,setUnit]=useState('F');const [result,setResult]=useState<string|null>(null);
  function calculate(){
    let t=parseFloat(temp),rh=parseFloat(humidity);if(isNaN(t)||isNaN(rh)) return;
    if(unit==='C') t=t*9/5+32;
    const hi=-42.379+2.04901523*t+10.14333127*rh-0.22475541*t*rh-0.00683783*t*t-0.05481717*rh*rh+0.00122874*t*t*rh+0.00085282*t*rh*rh-0.00000199*t*t*rh*rh;
    if(unit==='C') setResult(`${((hi-32)*5/9).toFixed(1)} °C`);
    else setResult(`${hi.toFixed(1)} °F`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-orange-700">Heat Index Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Temperature</label>
          <div className="flex gap-2">
            <input type="number" value={temp} onChange={e=>setTemp(e.target.value)} className="flex-1 border rounded px-3 py-2" placeholder="e.g. 95"/>
            <select value={unit} onChange={e=>setUnit(e.target.value)} className="border rounded px-2 py-2">
              <option>°F</option><option>°C</option>
            </select>
          </div></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Relative Humidity (%)</label>
          <input type="number" value={humidity} onChange={e=>setHumidity(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 70" min="0" max="100"/></div>
      </div>
      <button onClick={calculate} className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700">Calculate</button>
      {result && <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-500">Feels Like</p>
        <p className="text-3xl font-bold text-orange-700">{result}</p>
      </div>}
    </div>
  );
}