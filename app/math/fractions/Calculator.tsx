'use client';
import { useState } from 'react';
type Frac = {n:string,d:string};
export default function Calculator() {
  const [a, setA] = useState<Frac>({n:'',d:''});
  const [b, setB] = useState<Frac>({n:'',d:''});
  const [op, setOp] = useState('+');
  const [result, setResult] = useState<string|null>(null);
  function gcd(x:number,y:number):number{return y?gcd(y,x%y):x;}
  function calculate() {
    const an=parseInt(a.n),ad=parseInt(a.d),bn=parseInt(b.n),bd=parseInt(b.d);
    if(!an||!ad||!bn||!bd||ad===0||bd===0) return;
    let rn:number,rd:number;
    if(op==='+'){rn=an*bd+bn*ad;rd=ad*bd;}
    else if(op==='-'){rn=an*bd-bn*ad;rd=ad*bd;}
    else if(op==='×'){rn=an*bn;rd=ad*bd;}
    else{rn=an*bd;rd=ad*bn;}
    const g=gcd(Math.abs(rn),Math.abs(rd));
    setResult(`${rn/g} / ${rd/g}`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-purple-700">Fraction Calculator</h2>
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex flex-col items-center">
          <input type="number" value={a.n} onChange={e=>setA({...a,n:e.target.value})} className="w-20 border rounded px-2 py-1 text-center" placeholder="Num"/>
          <div className="border-t-2 border-gray-800 w-20 my-1"/>
          <input type="number" value={a.d} onChange={e=>setA({...a,d:e.target.value})} className="w-20 border rounded px-2 py-1 text-center" placeholder="Den"/>
        </div>
        <select value={op} onChange={e=>setOp(e.target.value)} className="border rounded px-3 py-2 text-xl">
          <option>+</option><option>-</option><option>×</option><option>÷</option>
        </select>
        <div className="flex flex-col items-center">
          <input type="number" value={b.n} onChange={e=>setB({...b,n:e.target.value})} className="w-20 border rounded px-2 py-1 text-center" placeholder="Num"/>
          <div className="border-t-2 border-gray-800 w-20 my-1"/>
          <input type="number" value={b.d} onChange={e=>setB({...b,d:e.target.value})} className="w-20 border rounded px-2 py-1 text-center" placeholder="Den"/>
        </div>
      </div>
      <button onClick={calculate} className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Calculate</button>
      {result && <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-500">Result</p>
        <p className="text-3xl font-bold text-purple-700">{result}</p>
      </div>}
    </div>
  );
}
