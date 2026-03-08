'use client';
import { useState } from 'react';
export default function Calculator() {
  const [length,setLength]=useState(16);
  const [useUpper,setUseUpper]=useState(true);
  const [useLower,setUseLower]=useState(true);
  const [useNum,setUseNum]=useState(true);
  const [useSym,setUseSym]=useState(true);
  const [password,setPassword]=useState('');
  const [copied,setCopied]=useState(false);
  function generate() {
    let chars='';
    if(useLower) chars+='abcdefghijklmnopqrstuvwxyz';
    if(useUpper) chars+='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(useNum) chars+='0123456789';
    if(useSym) chars+='!@#$%^&*()_+-=[]{}|;:,.<>?';
    if(!chars) return;
    let pwd='';
    for(let i=0;i<length;i++) pwd+=chars[Math.floor(Math.random()*chars.length)];
    setPassword(pwd);setCopied(false);
  }
  function copy(){navigator.clipboard.writeText(password).then(()=>setCopied(true));}
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Password Generator</h2>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Length: {length}</label>
        <input type="range" min="8" max="64" value={length} onChange={e=>setLength(parseInt(e.target.value))} className="w-full accent-blue-600"/></div>
      <div className="flex flex-wrap gap-4">
        {[['Uppercase','A-Z',useUpper,setUseUpper],['Lowercase','a-z',useLower,setUseLower],
          ['Numbers','0-9',useNum,setUseNum],['Symbols','!@#',useSym,setUseSym]].map(([label,hint,val,set])=>(
          <label key={label as string} className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={val as boolean} onChange={e=>(set as (v:boolean)=>void)(e.target.checked)} className="accent-blue-600"/>
            <span>{label as string} <span className="text-gray-400 text-xs">({hint as string})</span></span>
          </label>
        ))}
      </div>
      <button onClick={generate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Generate Password</button>
      {password && <div className="bg-gray-100 rounded-lg p-4 flex items-center gap-3">
        <code className="flex-1 text-lg font-mono break-all text-gray-800">{password}</code>
        <button onClick={copy} className="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200 text-sm whitespace-nowrap">
          {copied?'Copied!':'Copy'}
        </button>
      </div>}
    </div>
  );
}
