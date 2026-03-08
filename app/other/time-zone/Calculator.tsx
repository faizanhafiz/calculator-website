'use client';
import { useState } from 'react';
const zones = ['UTC','America/New_York','America/Chicago','America/Denver','America/Los_Angeles',
  'America/Sao_Paulo','Europe/London','Europe/Paris','Europe/Moscow','Asia/Dubai',
  'Asia/Kolkata','Asia/Singapore','Asia/Tokyo','Australia/Sydney','Pacific/Auckland'];
export default function Calculator() {
  const [time,setTime]=useState('');
  const [from,setFrom]=useState('UTC');
  const [to,setTo]=useState('America/New_York');
  const [result,setResult]=useState<string|null>(null);
  function calculate(){
    if(!time) return;
    try {
      const [h,m]=time.split(':').map(Number);
      const now=new Date();
      now.setHours(h,m,0,0);
      const fromStr=now.toLocaleString('en-US',{timeZone:from});
      const toStr=new Date(now).toLocaleString('en-US',{timeZone:to,hour:'2-digit',minute:'2-digit',hour12:false});
      setResult(toStr);
    } catch { setResult('Invalid time zone'); }
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Time Zone Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
          <input type="time" value={time} onChange={e=>setTime(e.target.value)} className="w-full border rounded px-3 py-2"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">From Time Zone</label>
          <select value={from} onChange={e=>setFrom(e.target.value)} className="w-full border rounded px-3 py-2">
            {zones.map(z=><option key={z} value={z}>{z}</option>)}
          </select></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">To Time Zone</label>
          <select value={to} onChange={e=>setTo(e.target.value)} className="w-full border rounded px-3 py-2">
            {zones.map(z=><option key={z} value={z}>{z}</option>)}
          </select></div>
      </div>
      <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Convert</button>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-500 mb-1">Time in {to}</p>
        <p className="text-3xl font-bold text-blue-700">{result}</p>
      </div>}
    </div>
  );
}