'use client';
import { useState } from 'react';
export default function Calculator() {
  const [decimal, setDecimal] = useState('');
  const [result, setResult] = useState<string|null>(null);
  function gcd(a:number,b:number):number{return b?gcd(b,a%b):a;}
  function calculate() {
    const d=parseFloat(decimal);
    if(isNaN(d)) return;
    const decimals=(decimal.split('.')[1]||'').length;
    const denom=Math.pow(10,decimals);
    const numer=Math.round(d*denom);
    const g=gcd(Math.abs(numer),denom);
    setResult(`${numer/g} / ${denom/g}`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Decimal to Fraction</h2>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Decimal Number</label>
        <input type="number" value={decimal} onChange={e=>setDecimal(e.target.value)} className="w-full md:w-64 border rounded px-3 py-2" placeholder="e.g. 0.75" step="any"/></div>
      <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Convert</button>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-500">Fraction</p>
        <p className="text-3xl font-bold text-blue-700">{result}</p>
      </div>}
    </div>
  );
}
