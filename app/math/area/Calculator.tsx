'use client';
import { useState } from 'react';
export default function Calculator() {
  const [shape, setShape] = useState('rectangle');
  const [vals, setVals] = useState<Record<string,string>>({});
  const [result, setResult] = useState<string|null>(null);
  function calculate() {
    const v=(k:string)=>parseFloat(vals[k])||0;
    let area=0,label='';
    if(shape==='rectangle'){area=v('l')*v('w');label='Rectangle Area';}
    else if(shape==='circle'){area=Math.PI*v('r')*v('r');label='Circle Area';}
    else if(shape==='triangle'){area=0.5*v('b')*v('h');label='Triangle Area';}
    else if(shape==='square'){area=v('s')*v('s');label='Square Area';}
    else if(shape==='trapezoid'){area=0.5*(v('a')+v('b'))*v('h');label='Trapezoid Area';}
    setResult(`${label}: ${area.toFixed(4)} sq units`);
  }
  const inputs:Record<string,{key:string,label:string}[]>={
    rectangle:[{key:'l',label:'Length'},{key:'w',label:'Width'}],
    circle:[{key:'r',label:'Radius'}],
    triangle:[{key:'b',label:'Base'},{key:'h',label:'Height'}],
    square:[{key:'s',label:'Side'}],
    trapezoid:[{key:'a',label:'Side a'},{key:'b',label:'Side b'},{key:'h',label:'Height'}],
  };
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Area Calculator</h2>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Shape</label>
        <select value={shape} onChange={e=>{setShape(e.target.value);setVals({});setResult(null);}} className="border rounded px-3 py-2">
          <option value="rectangle">Rectangle</option><option value="circle">Circle</option>
          <option value="triangle">Triangle</option><option value="square">Square</option>
          <option value="trapezoid">Trapezoid</option>
        </select></div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {inputs[shape].map(({key,label})=>(
          <div key={key}><label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input type="number" value={vals[key]||''} onChange={e=>setVals({...vals,[key]:e.target.value})} className="w-full border rounded px-3 py-2" placeholder="0"/>
          </div>
        ))}
      </div>
      <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Calculate</button>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-blue-700">{result}</p>
      </div>}
    </div>
  );
}
