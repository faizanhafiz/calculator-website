'use client';
import { useState } from 'react';
const colors=['Black','Brown','Red','Orange','Yellow','Green','Blue','Violet','Gray','White'];
const values=[0,1,2,3,4,5,6,7,8,9];
const colorHex=['#000','#8B4513','#FF0000','#FF8C00','#FFFF00','#008000','#0000FF','#EE82EE','#808080','#FFF'];
export default function Calculator() {
  const [b1,setB1]=useState(0);const [b2,setB2]=useState(0);const [b3,setB3]=useState(0);
  const [result,setResult]=useState<string|null>(null);
  function calculate(){
    const r=(b1*10+b2)*Math.pow(10,b3);
    if(r>=1000000) setResult(`${(r/1000000).toFixed(2)} MΩ`);
    else if(r>=1000) setResult(`${(r/1000).toFixed(2)} kΩ`);
    else setResult(`${r} Ω`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-red-700">Resistor Color Code Calculator</h2>
      <div className="grid grid-cols-3 gap-4">
        {[['Band 1 (10s)',b1,setB1],['Band 2 (1s)',b2,setB2],['Band 3 (Multiplier)',b3,setB3]].map(([label,val,set])=>(
          <div key={label as string}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{label as string}</label>
            <select value={val as number} onChange={e=>(set as (v:number)=>void)(parseInt(e.target.value))} className="w-full border rounded px-2 py-2">
              {colors.map((c,i)=><option key={c} value={i}>{c}</option>)}
            </select>
            <div className="mt-1 h-4 rounded" style={{backgroundColor:colorHex[val as number]}}/>
          </div>
        ))}
      </div>
      <button onClick={calculate} className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">Decode</button>
      {result && <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-500">Resistance Value</p>
        <p className="text-3xl font-bold text-red-700">{result}</p>
      </div>}
    </div>
  );
}