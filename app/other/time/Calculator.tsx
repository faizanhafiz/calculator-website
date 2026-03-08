'use client';
import { useState } from 'react';
export default function Calculator() {
  const [h1,setH1]=useState('');const [m1,setM1]=useState('');const [s1,setS1]=useState('');
  const [h2,setH2]=useState('');const [m2,setM2]=useState('');const [s2,setS2]=useState('');
  const [op,setOp]=useState('+');
  const [result,setResult]=useState<string|null>(null);
  function calculate(){
    const t1=(parseInt(h1)||0)*3600+(parseInt(m1)||0)*60+(parseInt(s1)||0);
    const t2=(parseInt(h2)||0)*3600+(parseInt(m2)||0)*60+(parseInt(s2)||0);
    let total=op==='+'?t1+t2:Math.abs(t1-t2);
    const rh=Math.floor(total/3600);total%=3600;
    const rm=Math.floor(total/60);const rs=total%60;
    setResult(`${rh}h ${rm}m ${rs}s`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-green-700">Time Calculator</h2>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex gap-2">
          <input type="number" value={h1} onChange={e=>setH1(e.target.value)} className="w-16 border rounded px-2 py-2 text-center" placeholder="H"/>
          <input type="number" value={m1} onChange={e=>setM1(e.target.value)} className="w-16 border rounded px-2 py-2 text-center" placeholder="M"/>
          <input type="number" value={s1} onChange={e=>setS1(e.target.value)} className="w-16 border rounded px-2 py-2 text-center" placeholder="S"/>
        </div>
        <select value={op} onChange={e=>setOp(e.target.value)} className="border rounded px-3 py-2 text-xl font-bold">
          <option value="+">+</option><option value="-">-</option>
        </select>
        <div className="flex gap-2">
          <input type="number" value={h2} onChange={e=>setH2(e.target.value)} className="w-16 border rounded px-2 py-2 text-center" placeholder="H"/>
          <input type="number" value={m2} onChange={e=>setM2(e.target.value)} className="w-16 border rounded px-2 py-2 text-center" placeholder="M"/>
          <input type="number" value={s2} onChange={e=>setS2(e.target.value)} className="w-16 border rounded px-2 py-2 text-center" placeholder="S"/>
        </div>
      </div>
      <button onClick={calculate} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Calculate</button>
      {result && <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-green-700">{result}</p>
      </div>}
    </div>
  );
}
