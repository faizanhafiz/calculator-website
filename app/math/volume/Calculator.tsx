'use client';
import { useState } from 'react';
export default function Calculator() {
  const [shape, setShape] = useState('cube');
  const [vals, setVals] = useState<Record<string,string>>({});
  const [result, setResult] = useState<string|null>(null);
  function calculate() {
    const v=(k:string)=>parseFloat(vals[k])||0;
    let vol=0,label='';
    if(shape==='cube'){vol=Math.pow(v('s'),3);label='Cube Volume';}
    else if(shape==='box'){vol=v('l')*v('w')*v('h');label='Box Volume';}
    else if(shape==='sphere'){vol=(4/3)*Math.PI*Math.pow(v('r'),3);label='Sphere Volume';}
    else if(shape==='cylinder'){vol=Math.PI*v('r')*v('r')*v('h');label='Cylinder Volume';}
    else if(shape==='cone'){vol=(1/3)*Math.PI*v('r')*v('r')*v('h');label='Cone Volume';}
    setResult(`${label}: ${vol.toFixed(4)} cubic units`);
  }
  const inputs:Record<string,{key:string,label:string}[]>={
    cube:[{key:'s',label:'Side'}],
    box:[{key:'l',label:'Length'},{key:'w',label:'Width'},{key:'h',label:'Height'}],
    sphere:[{key:'r',label:'Radius'}],
    cylinder:[{key:'r',label:'Radius'},{key:'h',label:'Height'}],
    cone:[{key:'r',label:'Radius'},{key:'h',label:'Height'}],
  };
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-purple-700">Volume Calculator</h2>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Shape</label>
        <select value={shape} onChange={e=>{setShape(e.target.value);setVals({});setResult(null);}} className="border rounded px-3 py-2">
          <option value="cube">Cube</option><option value="box">Rectangular Box</option>
          <option value="sphere">Sphere</option><option value="cylinder">Cylinder</option><option value="cone">Cone</option>
        </select></div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {inputs[shape].map(({key,label})=>(
          <div key={key}><label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input type="number" value={vals[key]||''} onChange={e=>setVals({...vals,[key]:e.target.value})} className="w-full border rounded px-3 py-2" placeholder="0"/>
          </div>
        ))}
      </div>
      <button onClick={calculate} className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Calculate</button>
      {result && <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-purple-700">{result}</p>
      </div>}
    </div>
  );
}
