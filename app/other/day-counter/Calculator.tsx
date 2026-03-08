'use client';
import { useState } from 'react';
export default function Calculator() {
  const [date,setDate]=useState('');
  const [result,setResult]=useState<string|null>(null);
  function calculate(){
    if(!date) return;
    const target=new Date(date),now=new Date();
    now.setHours(0,0,0,0);target.setHours(0,0,0,0);
    const diff=Math.round((target.getTime()-now.getTime())/86400000);
    if(diff>0) setResult(`${diff} days from now`);
    else if(diff<0) setResult(`${Math.abs(diff)} days ago`);
    else setResult('Today!');
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Day Counter</h2>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Target Date</label>
        <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="border rounded px-3 py-2"/></div>
      <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Count Days</button>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-3xl font-bold text-blue-700">{result}</p>
      </div>}
    </div>
  );
}