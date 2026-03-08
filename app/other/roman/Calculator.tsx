'use client';
import { useState } from 'react';
export default function Calculator() {
  const [num, setNum] = useState('');
  const [romanInput, setRomanInput] = useState('');
  const [result, setResult] = useState<string|null>(null);
  function toRoman() {
    const n = parseInt(num);
    if (!n || n < 1 || n > 3999) return setResult('Enter a number between 1 and 3999');
    const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const sym = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    let r = '';
    let num2 = n;
    for (let i = 0; i < val.length; i++) {
      while (num2 >= val[i]) { r += sym[i]; num2 -= val[i]; }
    }
    setResult(`${n} = ${r}`);
  }
  function fromRoman() {
    const map:Record<string,number>={M:1000,D:500,C:100,L:50,X:10,V:5,I:1};
    let total=0;
    const s=romanInput.toUpperCase();
    for(let i=0;i<s.length;i++){
      const cur=map[s[i]]||0,next=map[s[i+1]]||0;
      total+=cur<next?-cur:cur;
    }
    setResult(`${romanInput.toUpperCase()} = ${total}`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-xl font-semibold text-purple-700">Roman Numeral Converter</h2>
      <div className="space-y-3">
        <p className="font-medium text-gray-700">Number → Roman</p>
        <div className="flex gap-3">
          <input type="number" value={num} onChange={e=>setNum(e.target.value)} className="border rounded px-3 py-2 w-40" placeholder="e.g. 2024" min="1" max="3999"/>
          <button onClick={toRoman} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Convert</button>
        </div>
      </div>
      <div className="space-y-3">
        <p className="font-medium text-gray-700">Roman → Number</p>
        <div className="flex gap-3">
          <input type="text" value={romanInput} onChange={e=>setRomanInput(e.target.value)} className="border rounded px-3 py-2 w-40" placeholder="e.g. MMXXIV"/>
          <button onClick={fromRoman} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Convert</button>
        </div>
      </div>
      {result && <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-purple-700">{result}</p>
      </div>}
    </div>
  );
}
