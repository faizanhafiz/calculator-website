'use client';
import { useState } from 'react';
export default function Calculator() {
  const [shape, setShape] = useState('rectangle');
  const [vals, setVals] = useState<Record<string,string>>({});
  const [result, setResult] = useState<string|null>(null);
  function calculate() {
    const v=(k:string)=>parseFloat(vals[k])||0;
    let p=0,label='';
    if(shape==='rectangle'){p=2*(v('l')+v('w'));label='Rectangle Perimeter';}
    else if(shape==='circle'){p=2*Math.PI*v('r');label='Circle Circumference';}
    else if(shape==='triangle'){p=v('a')+v('b')+v('c');label='Triangle Perimeter';}
    else if(shape==='square'){p=4*v('s');label='Square Perimeter';}
    setResult(`${label}: ${p.toFixed(4)} units`);
  }
  const inputs:Record<string,{key:string,label:string}[]>={
    rectangle:[{key:'l',label:'Length'},{key:'w',label:'Width'}],
    circle:[{key:'r',label:'Radius'}],
    triangle:[{key:'a',label:'Side a'},{key:'b',label:'Side b'},{key:'c',label:'Side c'}],
    square:[{key:'s',label:'Side'}],
  };
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-green-700">Perimeter Calculator</h2>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Shape</label>
        <select value={shape} onChange={e=>{setShape(e.target.value);setVals({});setResult(null);}} className="border rounded px-3 py-2">
          <option value="rectangle">Rectangle</option><option value="circle">Circle</option>
          <option value="triangle">Triangle</option><option value="square">Square</option>
        </select></div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {inputs[shape].map(({key,label})=>(
          <div key={key}><label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input type="number" value={vals[key]||''} onChange={e=>setVals({...vals,[key]:e.target.value})} className="w-full border rounded px-3 py-2" placeholder="0"/>
          </div>
        ))}
      </div>
      <button onClick={calculate} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Calculate</button>
      {result && <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-green-700">{result}</p>
      </div>}
    </div>
  );
}
