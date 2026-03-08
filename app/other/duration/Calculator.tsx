'use client';
import { useState } from 'react';
export default function Calculator() {
  const [t1,setT1]=useState('');const [t2,setT2]=useState('');
  const [result,setResult]=useState<string|null>(null);
  function calculate(){
    if(!t1||!t2) return;
    const [h1,m1]=t1.split(':').map(Number);const [h2,m2]=t2.split(':').map(Number);
    let diff=(h2*60+m2)-(h1*60+m1);
    if(diff<0) diff+=24*60;
    const h=Math.floor(diff/60),m=diff%60;
    setResult(`${h} hours and ${m} minutes`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-green-700">Time Duration Calculator</h2>
      <div className="grid grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
          <input type="time" value={t1} onChange={e=>setT1(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
          <input type="time" value={t2} onChange={e=>setT2(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
      </div>
      <button onClick={calculate} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Calculate</button>
      {result && <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-green-700">{result}</p>
      </div>}
    </div>
  );
}