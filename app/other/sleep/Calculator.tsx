'use client';
import { useState } from 'react';
export default function Calculator() {
  const [mode, setMode] = useState('wakeup');
  const [time, setTime] = useState('');
  const [result, setResult] = useState<string[]|null>(null);
  function calculate() {
    if(!time) return;
    const [h,m]=time.split(':').map(Number);
    const totalMin=h*60+m;
    const cycleMins=90;
    const times:string[]=[];
    if(mode==='wakeup'){
      // bedtimes to wake up at given time
      for(let cycles=6;cycles>=3;cycles--){
        const bedMin=totalMin-cycles*cycleMins-15;
        const bh=((Math.floor(bedMin/60)%24)+24)%24;
        const bm=((bedMin%60)+60)%60;
        times.push(`${bh.toString().padStart(2,'0')}:${bm.toString().padStart(2,'0')} (${cycles} cycles, ${cycles*1.5}h sleep)`);
      }
    } else {
      // wake times if going to bed now
      for(let cycles=3;cycles<=6;cycles++){
        const wMin=totalMin+cycles*cycleMins+15;
        const wh=Math.floor(wMin/60)%24;
        const wm=wMin%60;
        times.push(`${wh.toString().padStart(2,'0')}:${wm.toString().padStart(2,'0')} (${cycles} cycles, ${cycles*1.5}h sleep)`);
      }
    }
    setResult(times);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Sleep Calculator</h2>
      <div className="flex gap-4">
        <label className="flex items-center gap-2 cursor-pointer"><input type="radio" checked={mode==='wakeup'} onChange={()=>setMode('wakeup')} className="accent-blue-600"/>I want to wake up at...</label>
        <label className="flex items-center gap-2 cursor-pointer"><input type="radio" checked={mode==='sleep'} onChange={()=>setMode('sleep')} className="accent-blue-600"/>I&apos;m going to sleep at...</label>
      </div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
        <input type="time" value={time} onChange={e=>setTime(e.target.value)} className="border rounded px-3 py-2"/></div>
      <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Calculate Sleep Times</button>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="font-medium text-gray-700 mb-2">{mode==='wakeup'?'Best bedtimes:':'Best wake-up times:'}</p>
        <ul className="space-y-1">
          {result.map((r,i)=><li key={i} className="text-blue-700 font-semibold">{r}</li>)}
        </ul>
        <p className="text-xs text-gray-500 mt-3">Based on 90-minute sleep cycles + 15 min to fall asleep</p>
      </div>}
    </div>
  );
}
