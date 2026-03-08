'use client';
import { useState } from 'react';
export default function Calculator() {
  const [length,setLength]=useState('');
  const [width,setWidth]=useState('');
  const [depth,setDepth]=useState('');
  const [result,setResult]=useState<null|{cy:number,cf:number,bags60:number,bags80:number}>(null);
  function calculate(){
    const l=parseFloat(length),w=parseFloat(width),d=parseFloat(depth)/12;
    if(!l||!w||!d) return;
    const cf=l*w*d;
    const cy=cf/27;
    setResult({cy,cf,bags60:Math.ceil(cf*0.053*1000/60*2.2),bags80:Math.ceil(cf*0.053*1000/80*2.2)});
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-green-700">Concrete Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Length (feet)</label>
          <input type="number" value={length} onChange={e=>setLength(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 10"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Width (feet)</label>
          <input type="number" value={width} onChange={e=>setWidth(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 10"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Depth (inches)</label>
          <input type="number" value={depth} onChange={e=>setDepth(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 4"/></div>
      </div>
      <button onClick={calculate} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Calculate</button>
      {result && <div className="bg-green-50 border border-green-200 rounded-lg p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div><p className="text-sm text-gray-500">Cubic Yards</p><p className="text-xl font-bold text-green-700">{result.cy.toFixed(2)}</p></div>
        <div><p className="text-sm text-gray-500">Cubic Feet</p><p className="text-xl font-bold text-green-700">{result.cf.toFixed(2)}</p></div>
        <div><p className="text-sm text-gray-500">60lb Bags</p><p className="text-xl font-bold text-green-700">{result.bags60}</p></div>
        <div><p className="text-sm text-gray-500">80lb Bags</p><p className="text-xl font-bold text-green-700">{result.bags80}</p></div>
      </div>}
    </div>
  );
}
