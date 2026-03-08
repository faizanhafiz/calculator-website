'use client';
import { useState } from 'react';
export default function Calculator() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [breakMin, setBreakMin] = useState('0');
  const [result, setResult] = useState<string|null>(null);
  function calculate() {
    if(!start||!end) return;
    const [sh,sm]=start.split(':').map(Number);
    const [eh,em]=end.split(':').map(Number);
    let mins=(eh*60+em)-(sh*60+sm)-(parseInt(breakMin)||0);
    if(mins<0) mins+=24*60;
    const h=Math.floor(mins/60),m=mins%60;
    setResult(`${h} hours ${m} minutes (${(mins/60).toFixed(2)} decimal hours)`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Hours Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
          <input type="time" value={start} onChange={e=>setStart(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
          <input type="time" value={end} onChange={e=>setEnd(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Break (minutes)</label>
          <input type="number" value={breakMin} onChange={e=>setBreakMin(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="0"/></div>
      </div>
      <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Calculate</button>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-blue-700">{result}</p>
      </div>}
    </div>
  );
}
