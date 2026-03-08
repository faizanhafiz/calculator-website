'use client';
import { useState } from 'react';
export default function Calculator() {
  const [ft,setFt]=useState('');const [inch,setInch]=useState('');const [cm,setCm]=useState('');
  const [result,setResult]=useState<string|null>(null);
  function fromFtIn(){
    const f=parseFloat(ft)||0,i=parseFloat(inch)||0;
    const totalIn=f*12+i;
    setResult(`${totalIn.toFixed(1)} inches = ${(totalIn*2.54).toFixed(1)} cm`);
  }
  function fromCm(){
    const c=parseFloat(cm);if(!c) return;
    const totalIn=c/2.54,f=Math.floor(totalIn/12),i=(totalIn%12).toFixed(1);
    setResult(`${c} cm = ${f}ft ${i}in (${totalIn.toFixed(1)} inches)`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-xl font-semibold text-blue-700">Height Converter</h2>
      <div className="space-y-3">
        <p className="font-medium text-gray-700">Feet & Inches → Centimeters</p>
        <div className="flex gap-3 flex-wrap">
          <input type="number" value={ft} onChange={e=>setFt(e.target.value)} className="w-24 border rounded px-2 py-2" placeholder="ft"/>
          <input type="number" value={inch} onChange={e=>setInch(e.target.value)} className="w-24 border rounded px-2 py-2" placeholder="in"/>
          <button onClick={fromFtIn} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Convert</button>
        </div>
      </div>
      <div className="space-y-3">
        <p className="font-medium text-gray-700">Centimeters → Feet & Inches</p>
        <div className="flex gap-3 flex-wrap">
          <input type="number" value={cm} onChange={e=>setCm(e.target.value)} className="w-32 border rounded px-2 py-2" placeholder="cm"/>
          <button onClick={fromCm} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Convert</button>
        </div>
      </div>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-blue-700">{result}</p>
      </div>}
    </div>
  );
}