'use client';
import { useState } from 'react';
type Item = {name:string,score:string,total:string,weight:string};
export default function Calculator() {
  const [items, setItems] = useState<Item[]>([{name:'',score:'',total:'100',weight:'100'}]);
  const [result, setResult] = useState<string|null>(null);
  function addItem(){setItems([...items,{name:'',score:'',total:'100',weight:''}]);}
  function update(i:number,key:keyof Item,val:string){const arr=[...items];arr[i]={...arr[i],[key]:val};setItems(arr);}
  function calculate(){
    let totalWeight=0,weightedScore=0;
    items.forEach(it=>{
      const s=parseFloat(it.score),t=parseFloat(it.total)||100,w=parseFloat(it.weight)||0;
      if(!isNaN(s)){weightedScore+=(s/t*100)*w;totalWeight+=w;}
    });
    if(totalWeight===0) return;
    const pct=weightedScore/totalWeight;
    const letter=pct>=90?'A':pct>=80?'B':pct>=70?'C':pct>=60?'D':'F';
    setResult(`${pct.toFixed(2)}% — Grade: ${letter}`);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-purple-700">Grade Calculator</h2>
      <div className="space-y-2">
        <div className="grid grid-cols-4 gap-2 text-xs font-medium text-gray-500">
          <span>Assignment</span><span>Score</span><span>Out of</span><span>Weight (%)</span>
        </div>
        {items.map((it,i)=>(
          <div key={i} className="grid grid-cols-4 gap-2">
            <input value={it.name} onChange={e=>update(i,'name',e.target.value)} className="border rounded px-2 py-1" placeholder={`Item ${i+1}`}/>
            <input type="number" value={it.score} onChange={e=>update(i,'score',e.target.value)} className="border rounded px-2 py-1" placeholder="Score"/>
            <input type="number" value={it.total} onChange={e=>update(i,'total',e.target.value)} className="border rounded px-2 py-1"/>
            <input type="number" value={it.weight} onChange={e=>update(i,'weight',e.target.value)} className="border rounded px-2 py-1" placeholder="%"/>
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <button onClick={addItem} className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">+ Add</button>
        <button onClick={calculate} className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Calculate</button>
      </div>
      {result && <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-purple-700">{result}</p>
      </div>}
    </div>
  );
}
