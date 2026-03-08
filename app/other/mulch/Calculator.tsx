'use client';
import { useState } from 'react';
export default function Calculator() {
  const [l,setL]=useState('');const [w,setW]=useState('');const [d,setD]=useState('3');
  const [result,setResult]=useState<{cy:number,bags2:number}|null>(null);
  function calculate(){
    const lv=parseFloat(l),wv=parseFloat(w),dv=parseFloat(d)/12;
    if(!lv||!wv) return;
    const cy=lv*wv*dv/27;
    setResult({cy,bags2:Math.ceil(lv*wv*dv/27*27/2)});
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-green-700">Mulch Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Length (ft)</label>
          <input type="number" value={l} onChange={e=>setL(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 20"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Width (ft)</label>
          <input type="number" value={w} onChange={e=>setW(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 10"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Depth (inches)</label>
          <input type="number" value={d} onChange={e=>setD(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
      </div>
      <button onClick={calculate} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Calculate</button>
      {result && <div className="bg-green-50 border border-green-200 rounded-lg p-4 grid grid-cols-2 gap-4 text-center">
        <div><p className="text-sm text-gray-500">Cubic Yards</p><p className="text-2xl font-bold text-green-700">{result.cy.toFixed(2)}</p></div>
        <div><p className="text-sm text-gray-500">2 cu ft Bags</p><p className="text-2xl font-bold text-green-700">{result.bags2}</p></div>
      </div>}
    </div>
  );
}