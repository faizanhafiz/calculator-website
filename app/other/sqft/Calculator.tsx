'use client';
import { useState } from 'react';
type Room = {name:string,l:string,w:string};
export default function Calculator() {
  const [rooms,setRooms]=useState<Room[]>([{name:'Room 1',l:'',w:''}]);
  const [unit,setUnit]=useState('ft');
  const [result,setResult]=useState<number|null>(null);
  function addRoom(){setRooms([...rooms,{name:`Room ${rooms.length+1}`,l:'',w:''}]);}
  function update(i:number,k:keyof Room,v:string){const r=[...rooms];r[i]={...r[i],[k]:v};setRooms(r);}
  function calculate(){
    const total=rooms.reduce((sum,r)=>{
      const l=parseFloat(r.l)||0,w=parseFloat(r.w)||0;
      return sum+l*w;
    },0);
    setResult(total);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-green-700">Square Footage Calculator</h2>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
        <select value={unit} onChange={e=>setUnit(e.target.value)} className="border rounded px-3 py-2">
          <option value="ft">Feet</option><option value="m">Meters</option><option value="yd">Yards</option>
        </select></div>
      <div className="space-y-2">
        {rooms.map((r,i)=>(
          <div key={i} className="grid grid-cols-3 gap-2">
            <input value={r.name} onChange={e=>update(i,'name',e.target.value)} className="border rounded px-2 py-1" placeholder="Room name"/>
            <input type="number" value={r.l} onChange={e=>update(i,'l',e.target.value)} className="border rounded px-2 py-1" placeholder={`Length (${unit})`}/>
            <input type="number" value={r.w} onChange={e=>update(i,'w',e.target.value)} className="border rounded px-2 py-1" placeholder={`Width (${unit})`}/>
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <button onClick={addRoom} className="bg-gray-200 text-gray-700 px-4 py-2 rounded">+ Add Room</button>
        <button onClick={calculate} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Calculate</button>
      </div>
      {result !== null && <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-500">Total Area</p>
        <p className="text-3xl font-bold text-green-700">{result.toFixed(2)} sq {unit}</p>
      </div>}
    </div>
  );
}