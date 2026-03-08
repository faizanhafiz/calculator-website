'use client';
import { useState } from 'react';
export default function Calculator() {
  const [scores,setScores]=useState([{score:'',rating:'72',slope:'113'}]);
  const [result,setResult]=useState<number|null>(null);
  function addRound(){setScores([...scores,{score:'',rating:'72',slope:'113'}]);}
  function update(i:number,k:string,v:string){const s=[...scores];s[i]={...s[i],[k]:v};setScores(s);}
  function calculate(){
    const diffs=scores.filter(s=>s.score).map(s=>{
      const sc=parseFloat(s.score),cr=parseFloat(s.rating),sl=parseFloat(s.slope);
      return (sc-cr)*113/sl;
    });
    if(!diffs.length) return;
    const sorted=[...diffs].sort((a,b)=>a-b);
    const count=Math.min(Math.floor(sorted.length*0.4)+1,Math.min(sorted.length,10));
    const avg=sorted.slice(0,count).reduce((a,b)=>a+b,0)/count;
    setResult(Math.floor(avg*0.96*10)/10);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-green-700">Golf Handicap Calculator</h2>
      <div className="space-y-2">
        <div className="grid grid-cols-3 gap-2 text-xs font-medium text-gray-500">
          <span>Score</span><span>Course Rating</span><span>Slope</span>
        </div>
        {scores.map((s,i)=>(
          <div key={i} className="grid grid-cols-3 gap-2">
            <input type="number" value={s.score} onChange={e=>update(i,'score',e.target.value)} className="border rounded px-2 py-1" placeholder="Score"/>
            <input type="number" value={s.rating} onChange={e=>update(i,'rating',e.target.value)} className="border rounded px-2 py-1"/>
            <input type="number" value={s.slope} onChange={e=>update(i,'slope',e.target.value)} className="border rounded px-2 py-1"/>
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <button onClick={addRound} className="bg-gray-200 text-gray-700 px-4 py-2 rounded">+ Round</button>
        <button onClick={calculate} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Calculate</button>
      </div>
      {result!==null&&<div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-500">Your Handicap Index</p>
        <p className="text-4xl font-bold text-green-700">{result}</p>
      </div>}
    </div>
  );
}