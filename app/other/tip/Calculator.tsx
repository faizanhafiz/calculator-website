'use client';
import { useState } from 'react';
export default function Calculator() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('15');
  const [people, setPeople] = useState('1');
  const [result, setResult] = useState<null|{tipAmt:number,total:number,perPerson:number}>(null);
  function calculate() {
    const b=parseFloat(bill),t=parseFloat(tip)/100,p=parseInt(people)||1;
    if(!b) return;
    const tipAmt=b*t, total=b+tipAmt;
    setResult({tipAmt,total,perPerson:total/p});
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-yellow-700">Tip Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Bill Amount ($)</label>
          <input type="number" value={bill} onChange={e=>setBill(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 50"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Tip Percentage (%)</label>
          <select value={tip} onChange={e=>setTip(e.target.value)} className="w-full border rounded px-3 py-2">
            {['10','15','18','20','25'].map(t=><option key={t} value={t}>{t}%</option>)}
          </select></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Number of People</label>
          <input type="number" value={people} onChange={e=>setPeople(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="1"/></div>
      </div>
      <button onClick={calculate} className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700">Calculate</button>
      {result && <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div><p className="text-sm text-gray-500">Tip Amount</p><p className="text-2xl font-bold text-yellow-700">${result.tipAmt.toFixed(2)}</p></div>
        <div><p className="text-sm text-gray-500">Total Bill</p><p className="text-2xl font-bold text-yellow-700">${result.total.toFixed(2)}</p></div>
        <div><p className="text-sm text-gray-500">Per Person</p><p className="text-2xl font-bold text-yellow-700">${result.perPerson.toFixed(2)}</p></div>
      </div>}
    </div>
  );
}
