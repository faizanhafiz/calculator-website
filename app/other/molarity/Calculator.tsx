'use client';
import { useState } from 'react';
export default function Calculator() {
  const [solve,setSolve]=useState('molarity');const [vals,setVals]=useState<Record<string,string>>({});const [result,setResult]=useState<string|null>(null);
  function calculate(){
    const v=(k:string)=>parseFloat(vals[k])||0;
    if(solve==='molarity') setResult(`Molarity = ${(v('moles')/v('volume')).toFixed(4)} M`);
    else if(solve==='moles') setResult(`Moles = ${(v('molarity')*v('volume')).toFixed(4)} mol`);
    else setResult(`Volume = ${(v('moles')/v('molarity')).toFixed(4)} L`);
  }
  const fields:Record<string,{key:string,label:string}[]>={
    molarity:[{key:'moles',label:'Moles (mol)'},{key:'volume',label:'Volume (L)'}],
    moles:[{key:'molarity',label:'Molarity (M)'},{key:'volume',label:'Volume (L)'}],
    volume:[{key:'moles',label:'Moles (mol)'},{key:'molarity',label:'Molarity (M)'}],
  };
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-purple-700">Molarity Calculator</h2>
      <p className="text-gray-600">M = n / V (Molarity = moles / volume)</p>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Solve for</label>
        <select value={solve} onChange={e=>{setSolve(e.target.value);setVals({});setResult(null);}} className="border rounded px-3 py-2">
          <option value="molarity">Molarity (M)</option><option value="moles">Moles (n)</option><option value="volume">Volume (V)</option>
        </select></div>
      <div className="grid grid-cols-2 gap-4">
        {fields[solve].map(({key,label})=>(
          <div key={key}><label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input type="number" value={vals[key]||''} onChange={e=>setVals({...vals,[key]:e.target.value})} className="w-full border rounded px-3 py-2" placeholder="0"/></div>
        ))}
      </div>
      <button onClick={calculate} className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Calculate</button>
      {result && <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-purple-700">{result}</p></div>}
    </div>
  );
}