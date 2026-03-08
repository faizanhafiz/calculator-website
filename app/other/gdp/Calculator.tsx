'use client';
import { useState } from 'react';
export default function Calculator() {
  const [c,setC]=useState('');const [i,setI]=useState('');const [g,setG]=useState('');const [nx,setNx]=useState('');const [result,setResult]=useState<string|null>(null);
  function calculate(){
    const cv=parseFloat(c)||0,iv=parseFloat(i)||0,gv=parseFloat(g)||0,nxv=parseFloat(nx)||0;
    const gdp=cv+iv+gv+nxv;
    setResult(`GDP = $${gdp.toLocaleString('en-US',{maximumFractionDigits:2})} billion`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">GDP Calculator</h2>
      <p className="text-gray-600">GDP = C + I + G + (X - M)</p>
      <div className="grid grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Consumer Spending (C)</label>
          <input type="number" value={c} onChange={e=>setC(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="$ billions"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Investment (I)</label>
          <input type="number" value={i} onChange={e=>setI(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="$ billions"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Government Spending (G)</label>
          <input type="number" value={g} onChange={e=>setG(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="$ billions"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Net Exports (X-M)</label>
          <input type="number" value={nx} onChange={e=>setNx(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="$ billions"/></div>
      </div>
      <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Calculate</button>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-blue-700">{result}</p></div>}
    </div>
  );
}