'use client';
import { useState } from 'react';
export default function Calculator() {
  const [width,setWidth]=useState('225');const [aspect,setAspect]=useState('45');const [rim,setRim]=useState('18');const [result,setResult]=useState<Record<string,string>|null>(null);
  function calculate(){
    const w=parseFloat(width),a=parseFloat(aspect),r=parseFloat(rim);if(!w||!a||!r) return;
    const sidewall=w*a/100;const diameter=r*25.4+sidewall*2;
    setResult({
      'Diameter':`${(diameter/25.4).toFixed(2)}" (${diameter.toFixed(1)} mm)`,
      'Sidewall Height':`${(sidewall/25.4).toFixed(2)}" (${sidewall.toFixed(1)} mm)`,
      'Circumference':`${(Math.PI*diameter/25.4).toFixed(2)}"`,
    });
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Tire Size Calculator</h2>
      <p className="text-gray-600 text-sm">Enter tire size (e.g., 225/45R18)</p>
      <div className="grid grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Width (mm)</label>
          <input type="number" value={width} onChange={e=>setWidth(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Aspect Ratio (%)</label>
          <input type="number" value={aspect} onChange={e=>setAspect(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Rim Size (in)</label>
          <input type="number" value={rim} onChange={e=>setRim(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
      </div>
      <button onClick={calculate} className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700">Calculate</button>
      {result && <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        {Object.entries(result).map(([k,v])=>(
          <div key={k} className="flex justify-between py-1 border-b border-gray-200 last:border-0">
            <span className="text-gray-600">{k}</span>
            <span className="font-bold text-gray-800">{v}</span>
          </div>
        ))}
      </div>}
    </div>
  );
}