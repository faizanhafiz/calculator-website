'use client';
import { useState } from 'react';
export default function Calculator() {
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [result, setResult] = useState<string|null>(null);
  function calculate() {
    if(!date1||!date2) return;
    const d1=new Date(date1),d2=new Date(date2);
    const diff=Math.abs(d2.getTime()-d1.getTime());
    const days=Math.floor(diff/86400000);
    const weeks=Math.floor(days/7);
    const months=Math.abs((d2.getFullYear()-d1.getFullYear())*12+(d2.getMonth()-d1.getMonth()));
    setResult(`${days} days | ${weeks} weeks | ~${months} months`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Date Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
          <input type="date" value={date1} onChange={e=>setDate1(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
          <input type="date" value={date2} onChange={e=>setDate2(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
      </div>
      <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Calculate</button>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-500 mb-1">Difference</p>
        <p className="text-2xl font-bold text-blue-700">{result}</p>
      </div>}
    </div>
  );
}
