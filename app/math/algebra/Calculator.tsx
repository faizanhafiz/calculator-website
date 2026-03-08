'use client';
import { useState } from 'react';
export default function Calculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState<string|null>(null);
  function calculate() {
    // solve ax + b = c => x = (c-b)/a
    const av=parseFloat(a),bv=parseFloat(b),cv=parseFloat(c);
    if(!av) return setResult('Coefficient a cannot be 0');
    const x=(cv-bv)/av;
    setResult(`x = ${x.toFixed(4)}`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-purple-700">Algebra Calculator</h2>
      <p className="text-gray-600">Solve linear equations of the form: <strong>ax + b = c</strong></p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Coefficient a</label>
          <input type="number" value={a} onChange={e=>setA(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 2"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Constant b</label>
          <input type="number" value={b} onChange={e=>setB(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 3"/></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Result c</label>
          <input type="number" value={c} onChange={e=>setC(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 7"/></div>
      </div>
      <button onClick={calculate} className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Solve</button>
      {result && <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
        <p className="text-3xl font-bold text-purple-700">{result}</p>
      </div>}
    </div>
  );
}
