'use client';
import { useState } from 'react';
export default function Calculator() {
  const [dob, setDob] = useState('');
  const [result, setResult] = useState<string|null>(null);
  function calculate() {
    if(!dob) return;
    const birth=new Date(dob), now=new Date();
    let years=now.getFullYear()-birth.getFullYear();
    let months=now.getMonth()-birth.getMonth();
    let days=now.getDate()-birth.getDate();
    if(days<0){months--;const d=new Date(now.getFullYear(),now.getMonth(),0);days+=d.getDate();}
    if(months<0){years--;months+=12;}
    const totalDays=Math.floor((now.getTime()-birth.getTime())/86400000);
    setResult(`${years} years, ${months} months, ${days} days (${totalDays.toLocaleString()} total days)`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Age Calculator</h2>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
        <input type="date" value={dob} onChange={e=>setDob(e.target.value)} className="border rounded px-3 py-2"/></div>
      <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Calculate Age</button>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-500 mb-1">Your Age</p>
        <p className="text-2xl font-bold text-blue-700">{result}</p>
      </div>}
    </div>
  );
}
