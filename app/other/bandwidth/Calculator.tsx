'use client';
import { useState } from 'react';
export default function Calculator() {
  const [size,setSize]=useState('');const [sizeUnit,setSizeUnit]=useState('MB');const [speed,setSpeed]=useState('');const [speedUnit,setSpeedUnit]=useState('Mbps');
  const [result,setResult]=useState<string|null>(null);
  const sizeToMB:Record<string,number>={KB:0.001,MB:1,GB:1000,TB:1000000};
  const speedToMbps:Record<string,number>={Kbps:0.001,Mbps:1,Gbps:1000};
  function calculate(){
    const s=parseFloat(size),sp=parseFloat(speed);if(!s||!sp) return;
    const bytes=s*sizeToMB[sizeUnit]*8;
    const mbps=sp*speedToMbps[speedUnit];
    const secs=bytes/mbps;
    if(secs<60) setResult(`${secs.toFixed(2)} seconds`);
    else if(secs<3600) setResult(`${(secs/60).toFixed(2)} minutes`);
    else setResult(`${(secs/3600).toFixed(2)} hours`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Bandwidth Calculator</h2>
      <div className="grid grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">File Size</label>
          <div className="flex gap-2">
            <input type="number" value={size} onChange={e=>setSize(e.target.value)} className="flex-1 border rounded px-3 py-2" placeholder="e.g. 500"/>
            <select value={sizeUnit} onChange={e=>setSizeUnit(e.target.value)} className="border rounded px-2 py-2">
              {['KB','MB','GB','TB'].map(u=><option key={u}>{u}</option>)}
            </select>
          </div>
        </div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Connection Speed</label>
          <div className="flex gap-2">
            <input type="number" value={speed} onChange={e=>setSpeed(e.target.value)} className="flex-1 border rounded px-3 py-2" placeholder="e.g. 100"/>
            <select value={speedUnit} onChange={e=>setSpeedUnit(e.target.value)} className="border rounded px-2 py-2">
              {['Kbps','Mbps','Gbps'].map(u=><option key={u}>{u}</option>)}
            </select>
          </div>
        </div>
      </div>
      <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Calculate</button>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-500">Transfer Time</p>
        <p className="text-2xl font-bold text-blue-700">{result}</p>
      </div>}
    </div>
  );
}