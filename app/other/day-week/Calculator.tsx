'use client';
import { useState } from 'react';
export default function Calculator() {
  const [date,setDate]=useState('');
  const [result,setResult]=useState<string|null>(null);
  const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  function calculate(){
    if(!date) return;
    const d=new Date(date+'T12:00:00');
    setResult(`${days[d.getDay()]}, ${d.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Day of the Week Calculator</h2>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
        <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="border rounded px-3 py-2"/></div>
      <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Find Day</button>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-blue-700">{result}</p>
      </div>}
    </div>
  );
}