'use client';
import { useState } from 'react';
export default function Calculator() {
  const [ip,setIp]=useState('192.168.1.0');const [cidr,setCidr]=useState('24');const [result,setResult]=useState<Record<string,string>|null>(null);
  function calculate(){
    const prefix=parseInt(cidr);if(prefix<0||prefix>32) return;
    const mask=prefix===0?0:(0xFFFFFFFF<<(32-prefix))>>>0;
    function ipToNum(s:string){return s.split('.').reduce((a,b)=>(a<<8)|(parseInt(b)&0xFF),0)>>>0;}
    function numToIp(n:number){return [(n>>>24)&0xFF,(n>>>16)&0xFF,(n>>>8)&0xFF,n&0xFF].join('.');}
    const ipNum=ipToNum(ip);
    const network=ipNum&mask;const broadcast=network|(~mask>>>0);
    const hosts=Math.max(0,broadcast-network-1);
    setResult({
      'Network Address':numToIp(network),'Subnet Mask':numToIp(mask),
      'Broadcast':numToIp(broadcast),'First Host':numToIp(network+1),'Last Host':numToIp(broadcast-1),
      'Total Hosts':hosts.toString()
    });
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">IP Subnet Calculator</h2>
      <div className="grid grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">IP Address</label>
          <input value={ip} onChange={e=>setIp(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 192.168.1.0"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">CIDR Prefix (/)</label>
          <input type="number" value={cidr} onChange={e=>setCidr(e.target.value)} className="w-full border rounded px-3 py-2" min="0" max="32"/></div>
      </div>
      <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Calculate</button>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {Object.entries(result).map(([k,v])=>(
            <div key={k} className="bg-white rounded p-2 text-center"><p className="text-xs text-gray-500">{k}</p><p className="font-bold text-blue-700">{v}</p></div>
          ))}
        </div>
      </div>}
    </div>
  );
}