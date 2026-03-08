'use client';
import { useState } from 'react';
const atomicWeights:Record<string,number>={H:1.008,He:4.003,Li:6.941,Be:9.012,B:10.811,C:12.011,N:14.007,O:15.999,F:18.998,Ne:20.18,Na:22.99,Mg:24.305,Al:26.982,Si:28.086,P:30.974,S:32.065,Cl:35.453,Ar:39.948,K:39.098,Ca:40.078,Fe:55.845,Cu:63.546,Zn:65.38,Br:79.904,Ag:107.868,I:126.904,Au:196.967};
export default function Calculator() {
  const [formula,setFormula]=useState('');const [result,setResult]=useState<string|null>(null);
  function calculate(){
    try{
      let total=0;
      const regex=/([A-Z][a-z]?)(\d*)/g;let match;
      let parsed=false;
      while((match=regex.exec(formula))!==null){
        const el=match[1],cnt=parseInt(match[2])||1;
        if(atomicWeights[el]===undefined) return setResult(`Unknown element: ${el}`);
        total+=atomicWeights[el]*cnt;parsed=true;
      }
      if(!parsed) return setResult('Invalid formula');
      setResult(`${formula}: ${total.toFixed(3)} g/mol`);
    }catch{setResult('Invalid formula');}
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Molecular Weight Calculator</h2>
      <p className="text-gray-600 text-sm">Enter a chemical formula (e.g., H2O, NaCl, C6H12O6)</p>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Chemical Formula</label>
        <input value={formula} onChange={e=>setFormula(e.target.value)} className="w-full md:w-64 border rounded px-3 py-2" placeholder="e.g. H2O"/></div>
      <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Calculate</button>
      {result && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-blue-700">{result}</p></div>}
    </div>
  );
}