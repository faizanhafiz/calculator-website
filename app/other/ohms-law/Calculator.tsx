'use client';
import { useState } from 'react';
export default function Calculator() {
  const [solve,setSolve]=useState('voltage');
  const [vals,setVals]=useState<Record<string,string>>({});
  const [result,setResult]=useState<string|null>(null);
  function calculate(){
    const v=(k:string)=>parseFloat(vals[k])||0;
    if(solve==='voltage') setResult(`Voltage (V) = ${(v('current')*v('resistance')).toFixed(4)} V`);
    else if(solve==='current') setResult(`Current (I) = ${(v('voltage')/v('resistance')).toFixed(4)} A`);
    else setResult(`Resistance (R) = ${(v('voltage')/v('current')).toFixed(4)} Ω`);
  }
  const fields:Record<string,{key:string,label:string,unit:string}[]>={
    voltage:[{key:'current',label:'Current',unit:'A'},{key:'resistance',label:'Resistance',unit:'Ω'}],
    current:[{key:'voltage',label:'Voltage',unit:'V'},{key:'resistance',label:'Resistance',unit:'Ω'}],
    resistance:[{key:'voltage',label:'Voltage',unit:'V'},{key:'current',label:'Current',unit:'A'}],
  };
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-red-700">Ohm's Law Calculator</h2>
      <p className="text-gray-600">V = I × R</p>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Solve for</label>
        <select value={solve} onChange={e=>{setSolve(e.target.value);setVals({});setResult(null);}} className="border rounded px-3 py-2">
          <option value="voltage">Voltage (V)</option><option value="current">Current (I)</option><option value="resistance">Resistance (R)</option>
        </select></div>
      <div className="grid grid-cols-2 gap-4">
        {fields[solve].map(({key,label,unit})=>(
          <div key={key}><label className="block text-sm font-medium text-gray-700 mb-1">{label} ({unit})</label>
            <input type="number" value={vals[key]||''} onChange={e=>setVals({...vals,[key]:e.target.value})} className="w-full border rounded px-3 py-2" placeholder="0"/>
          </div>
        ))}
      </div>
      <button onClick={calculate} className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">Calculate</button>
      {result && <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-red-700">{result}</p>
      </div>}
    </div>
  );
}
