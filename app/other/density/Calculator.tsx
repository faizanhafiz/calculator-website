'use client';
import { useState } from 'react';
export default function Calculator() {
  const [solve,setSolve]=useState('density');
  const [vals,setVals]=useState<Record<string,string>>({});
  const [result,setResult]=useState<string|null>(null);
  function calculate(){
    const v=(k:string)=>parseFloat(vals[k])||0;
    if(solve==='density') setResult(`Density = ${(v('mass')/v('volume')).toFixed(4)} g/cm³`);
    else if(solve==='mass') setResult(`Mass = ${(v('density')*v('volume')).toFixed(4)} g`);
    else setResult(`Volume = ${(v('mass')/v('density')).toFixed(4)} cm³`);
  }
  const fields:Record<string,{key:string,label:string}[]>={
    density:[{key:'mass',label:'Mass (g)'},{key:'volume',label:'Volume (cm³)'}],
    mass:[{key:'density',label:'Density (g/cm³)'},{key:'volume',label:'Volume (cm³)'}],
    volume:[{key:'mass',label:'Mass (g)'},{key:'density',label:'Density (g/cm³)'}],
  };
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Density Calculator</h2>
      <p className="text-gray-600">D = M / V</p>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Solve for</label>
        <select value={solve} onChange={e=>{setSolve(e.target.value);setVals({});setResult(null);}} className="border rounded px-3 py-2">
          <option value="density">Density</option><option value="mass">Mass</option><option value="volume">Volume</option>
        </select></div>
      <div className="grid grid-cols-2 gap-4">
        {fields[solve].map(({key,label})=>(
          <div key={key}><label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input type="number" value={vals[key]||''} onChange={e=>setVals({...vals,[key]:e.target.value})} className="w-full border rounded px-3 py-2" placeholder="0"/>
          </div>
        ))}
      </div>
      <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Calculate</button>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-blue-700">{result}</p>
      </div>}
    </div>
  );
}