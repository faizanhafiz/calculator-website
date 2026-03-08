'use client';
import { useState } from 'react';
export default function Calculator() {
  const [temp,setTemp]=useState('');const [humidity,setHumidity]=useState('');const [result,setResult]=useState<string|null>(null);
  function calculate(){
    const t=parseFloat(temp),rh=parseFloat(humidity);if(isNaN(t)||isNaN(rh)) return;
    const a=17.625,b=243.04;
    const gamma=(a*t/(b+t))+Math.log(rh/100);
    const dp=b*gamma/(a-gamma);
    setResult(`${dp.toFixed(1)} °C (${(dp*9/5+32).toFixed(1)} °F)`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-sky-700">Dew Point Calculator</h2>
      <div className="grid grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Temperature (°C)</label>
          <input type="number" value={temp} onChange={e=>setTemp(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 25"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Relative Humidity (%)</label>
          <input type="number" value={humidity} onChange={e=>setHumidity(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 60" min="0" max="100"/></div>
      </div>
      <button onClick={calculate} className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700">Calculate</button>
      {result && <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-500">Dew Point</p>
        <p className="text-3xl font-bold text-sky-700">{result}</p>
      </div>}
    </div>
  );
}