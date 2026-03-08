'use client';
import { useState } from 'react';
type Entry = {start:string,end:string};
export default function Calculator() {
  const [entries,setEntries]=useState<Entry[]>([{start:'',end:''}]);
  const [rate,setRate]=useState('');
  const [result,setResult]=useState<{hours:number,pay:number}|null>(null);
  function addEntry(){setEntries([...entries,{start:'',end:''}]);}
  function update(i:number,k:keyof Entry,v:string){const e=[...entries];e[i]={...e[i],[k]:v};setEntries(e);}
  function calculate(){
    let totalMin=0;
    entries.forEach(e=>{
      if(!e.start||!e.end) return;
      const [sh,sm]=e.start.split(':').map(Number);
      const [eh,em]=e.end.split(':').map(Number);
      let m=(eh*60+em)-(sh*60+sm);
      if(m<0) m+=24*60;
      totalMin+=m;
    });
    const hours=totalMin/60;
    const r=parseFloat(rate)||0;
    setResult({hours,pay:hours*r});
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Time Card Calculator</h2>
      <div className="space-y-2">
        {entries.map((e,i)=>(
          <div key={i} className="grid grid-cols-2 gap-3">
            <div><label className="text-xs text-gray-500">Start</label>
              <input type="time" value={e.start} onChange={ev=>update(i,'start',ev.target.value)} className="w-full border rounded px-2 py-1"/></div>
            <div><label className="text-xs text-gray-500">End</label>
              <input type="time" value={e.end} onChange={ev=>update(i,'end',ev.target.value)} className="w-full border rounded px-2 py-1"/></div>
          </div>
        ))}
      </div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Hourly Rate ($, optional)</label>
        <input type="number" value={rate} onChange={e=>setRate(e.target.value)} className="w-40 border rounded px-3 py-2" placeholder="e.g. 15"/></div>
      <div className="flex gap-3">
        <button onClick={addEntry} className="bg-gray-200 text-gray-700 px-4 py-2 rounded">+ Add Day</button>
        <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Calculate</button>
      </div>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 grid grid-cols-2 gap-4 text-center">
        <div><p className="text-sm text-gray-500">Total Hours</p><p className="text-2xl font-bold text-blue-700">{result.hours.toFixed(2)}</p></div>
        {result.pay>0&&<div><p className="text-sm text-gray-500">Total Pay</p><p className="text-2xl font-bold text-green-700">${result.pay.toFixed(2)}</p></div>}
      </div>}
    </div>
  );
}