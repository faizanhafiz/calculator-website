'use client';
import { useState } from 'react';
export default function Calculator() {
  const [solve,setSolve]=useState('speed');
  const [vals,setVals]=useState<Record<string,string>>({});
  const [result,setResult]=useState<string|null>(null);
  function calculate(){
    const v=(k:string)=>parseFloat(vals[k])||0;
    if(solve==='speed') setResult(`Speed = ${(v('distance')/v('time')).toFixed(4)} units/hr`);
    else if(solve==='distance') setResult(`Distance = ${(v('speed')*v('time')).toFixed(4)} units`);
    else setResult(`Time = ${(v('distance')/v('speed')).toFixed(4)} hours`);
  }
  const fields:Record<string,{key:string,label:string}[]>={
    speed:[{key:'distance',label:'Distance'},{key:'time',label:'Time (hours)'}],
    distance:[{key:'speed',label:'Speed'},{key:'time',label:'Time (hours)'}],
    time:[{key:'distance',label:'Distance'},{key:'speed',label:'Speed'}],
  };
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Speed Calculator</h2>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Solve for</label>
        <select value={solve} onChange={e=>{setSolve(e.target.value);setVals({});setResult(null);}} className="border rounded px-3 py-2">
          <option value="speed">Speed</option><option value="distance">Distance</option><option value="time">Time</option>
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
