'use client';
import { useState } from 'react';
export default function Calculator() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState<number|null>(null);
  function calculate() {
    if(!name1||!name2) return;
    // Deterministic fun calculation based on names
    const combined=(name1+name2).toLowerCase();
    let hash=0;
    for(let i=0;i<combined.length;i++){hash=(hash*31+combined.charCodeAt(i))%100;}
    const pct=Math.max(20,hash);
    setResult(pct);
  }
  const getEmoji=(p:number)=>p>=90?'💞':p>=70?'❤️':p>=50?'💕':p>=30?'💛':'💔';
  const getMsg=(p:number)=>p>=90?'Soulmates!':p>=70?'Great match!':p>=50?'Good potential':p>=30?'It could work...':'Keep looking!';
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-rose-700">Love Calculator</h2>
      <p className="text-gray-500 text-sm">Just for fun! 💕</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
          <input value={name1} onChange={e=>setName1(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="Enter your name"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Partner's Name</label>
          <input value={name2} onChange={e=>setName2(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="Enter their name"/></div>
      </div>
      <button onClick={calculate} className="bg-rose-600 text-white px-6 py-2 rounded hover:bg-rose-700">Calculate Love ❤️</button>
      {result !== null && <div className="bg-rose-50 border border-rose-200 rounded-lg p-6 text-center">
        <p className="text-6xl mb-3">{getEmoji(result)}</p>
        <p className="text-5xl font-bold text-rose-600 mb-2">{result}%</p>
        <p className="text-xl text-rose-700 font-medium">{getMsg(result)}</p>
      </div>}
    </div>
  );
}
