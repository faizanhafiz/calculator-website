'use client';
import { useState } from 'react';
export default function Calculator() {
  const [solve,setSolve]=useState('power');const [vals,setVals]=useState<Record<string,string>>({});const [result,setResult]=useState<string|null>(null);
  function calculate(){
    const v=(k:string)=>parseFloat(vals[k])||0;
    if(solve==='power') setResult(`Power (P) = ${(v('voltage')*v('current')).toFixed(4)} W`);
    else if(solve==='voltage') setResult(`Voltage (V) = ${(v('power')/v('current')).toFixed(4)} V`);
    else if(solve==='current') setResult(`Current (I) = ${(v('power')/v('voltage')).toFixed(4)} A`);
    else setResult(`Energy = ${(v('power')*v('time')/1000).toFixed(4)} kWh`);
  }
  const fields:Record<string,{key:string,label:string}[]>={
    power:[{key:'voltage',label:'Voltage (V)'},{key:'current',label:'Current (A)'}],
    voltage:[{key:'power',label:'Power (W)'},{key:'current',label:'Current (A)'}],
    current:[{key:'power',label:'Power (W)'},{key:'voltage',label:'Voltage (V)'}],
    energy:[{key:'power',label:'Power (W)'},{key:'time',label:'Time (hours)'}],
  };
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-yellow-700">Electricity Calculator</h2>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Solve for</label>
        <select value={solve} onChange={e=>{setSolve(e.target.value);setVals({});setResult(null);}} className="border rounded px-3 py-2">
          <option value="power">Power (P = V × I)</option><option value="voltage">Voltage (V = P / I)</option>
          <option value="current">Current (I = P / V)</option><option value="energy">Energy (kWh)</option>
        </select></div>
      <div className="grid grid-cols-2 gap-4">
        {fields[solve].map(({key,label})=>(
          <div key={key}><label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input type="number" value={vals[key]||''} onChange={e=>setVals({...vals,[key]:e.target.value})} className="w-full border rounded px-3 py-2" placeholder="0"/></div>
        ))}
      </div>
      <button onClick={calculate} className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700">Calculate</button>
      {result && <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-700">{result}</p></div>}
    </div>
  );
}