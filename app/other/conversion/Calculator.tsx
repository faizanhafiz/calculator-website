'use client';
import { useState } from 'react';
const conversions:{label:string,from:string,to:string,factor:number}[]=[
  {label:'Miles → Kilometers',from:'miles',to:'km',factor:1.60934},
  {label:'Kilometers → Miles',from:'km',to:'miles',factor:0.621371},
  {label:'Pounds → Kilograms',from:'lb',to:'kg',factor:0.453592},
  {label:'Kilograms → Pounds',from:'kg',to:'lb',factor:2.20462},
  {label:'Fahrenheit → Celsius',from:'°F',to:'°C',factor:0},
  {label:'Celsius → Fahrenheit',from:'°C',to:'°F',factor:0},
  {label:'Gallons → Liters',from:'gal',to:'L',factor:3.78541},
  {label:'Liters → Gallons',from:'L',to:'gal',factor:0.264172},
  {label:'Inches → Centimeters',from:'in',to:'cm',factor:2.54},
  {label:'Centimeters → Inches',from:'cm',to:'in',factor:0.393701},
  {label:'Feet → Meters',from:'ft',to:'m',factor:0.3048},
  {label:'Meters → Feet',from:'m',to:'ft',factor:3.28084},
  {label:'Acres → Square Meters',from:'acres',to:'m²',factor:4046.86},
];
export default function Calculator() {
  const [sel,setSel]=useState(0);const [val,setVal]=useState('');const [result,setResult]=useState<string|null>(null);
  function calculate(){
    const v=parseFloat(val),c=conversions[sel];if(isNaN(v)) return;
    let r:number;
    if(c.from==='°F') r=(v-32)*5/9;
    else if(c.from==='°C') r=v*9/5+32;
    else r=v*c.factor;
    setResult(`${v} ${c.from} = ${r.toFixed(4)} ${c.to}`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-purple-700">Unit Converter</h2>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Conversion Type</label>
        <select value={sel} onChange={e=>setSel(parseInt(e.target.value))} className="w-full border rounded px-3 py-2">
          {conversions.map((c,i)=><option key={i} value={i}>{c.label}</option>)}
        </select></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Value ({conversions[sel].from})</label>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} className="w-full md:w-64 border rounded px-3 py-2" placeholder="Enter value"/></div>
      <button onClick={calculate} className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Convert</button>
      {result && <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-purple-700">{result}</p>
      </div>}
    </div>
  );
}