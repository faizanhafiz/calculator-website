'use client';
import { useState } from 'react';
export default function Calculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState<string|null>(null);
  function calculate() {
    const av=parseFloat(a),bv=parseFloat(b),cv=parseFloat(c);
    if(isNaN(av)||isNaN(bv)||isNaN(cv)) return;
    if(av===0){
      if(bv===0) return setResult('No solution or infinite solutions');
      setResult(`x = ${(-cv/bv).toFixed(4)}`);
      return;
    }
    const disc=bv*bv-4*av*cv;
    if(disc<0) return setResult('No real solutions (complex roots)');
    const x1=(-bv+Math.sqrt(disc))/(2*av), x2=(-bv-Math.sqrt(disc))/(2*av);
    setResult(disc===0?`x = ${x1.toFixed(4)}`:`x₁ = ${x1.toFixed(4)},  x₂ = ${x2.toFixed(4)}`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Equation Solver</h2>
      <p className="text-gray-600">Solve quadratic equations: <strong>ax² + bx + c = 0</strong></p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">a</label>
          <input type="number" value={a} onChange={e=>setA(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 1"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">b</label>
          <input type="number" value={b} onChange={e=>setB(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. -5"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">c</label>
          <input type="number" value={c} onChange={e=>setC(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 6"/></div>
      </div>
      <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Solve</button>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-blue-700">{result}</p>
      </div>}
    </div>
  );
}
