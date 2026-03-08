'use client';
import { useState } from 'react';
export default function Calculator() {
  const [a1,setA1]=useState(''); const [b1,setB1]=useState(''); const [c1,setC1]=useState('');
  const [a2,setA2]=useState(''); const [b2,setB2]=useState(''); const [c2,setC2]=useState('');
  const [result, setResult] = useState<string|null>(null);
  function calculate() {
    const a=parseFloat(a1),b=parseFloat(b1),c=parseFloat(c1),d=parseFloat(a2),e=parseFloat(b2),f=parseFloat(c2);
    const det=a*e-b*d;
    if(det===0) return setResult('No unique solution (parallel or same lines)');
    const x=(c*e-b*f)/det, y=(a*f-c*d)/det;
    setResult(`x = ${x.toFixed(4)},  y = ${y.toFixed(4)}`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-green-700">Linear Equation Calculator</h2>
      <p className="text-gray-600">Solve system of 2 linear equations: <strong>a₁x + b₁y = c₁</strong> and <strong>a₂x + b₂y = c₂</strong></p>
      <div className="space-y-3">
        <p className="font-medium text-gray-700">Equation 1: a₁x + b₁y = c₁</p>
        <div className="grid grid-cols-3 gap-3">
          <input type="number" value={a1} onChange={e=>setA1(e.target.value)} className="border rounded px-3 py-2" placeholder="a₁"/>
          <input type="number" value={b1} onChange={e=>setB1(e.target.value)} className="border rounded px-3 py-2" placeholder="b₁"/>
          <input type="number" value={c1} onChange={e=>setC1(e.target.value)} className="border rounded px-3 py-2" placeholder="c₁"/>
        </div>
        <p className="font-medium text-gray-700">Equation 2: a₂x + b₂y = c₂</p>
        <div className="grid grid-cols-3 gap-3">
          <input type="number" value={a2} onChange={e=>setA2(e.target.value)} className="border rounded px-3 py-2" placeholder="a₂"/>
          <input type="number" value={b2} onChange={e=>setB2(e.target.value)} className="border rounded px-3 py-2" placeholder="b₂"/>
          <input type="number" value={c2} onChange={e=>setC2(e.target.value)} className="border rounded px-3 py-2" placeholder="c₂"/>
        </div>
      </div>
      <button onClick={calculate} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Solve</button>
      {result && <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-green-700">{result}</p>
      </div>}
    </div>
  );
}
