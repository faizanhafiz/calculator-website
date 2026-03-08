'use client';
import { useState } from 'react';
type Course = {name:string,grade:string,credits:string};
export default function Calculator() {
  const [courses, setCourses] = useState<Course[]>([{name:'',grade:'4.0',credits:'3'}]);
  const [result, setResult] = useState<number|null>(null);
  const gradeMap:Record<string,number>={'4.0':4.0,'3.7':3.7,'3.3':3.3,'3.0':3.0,'2.7':2.7,'2.3':2.3,'2.0':2.0,'1.7':1.7,'1.3':1.3,'1.0':1.0,'0.0':0.0};
  function addCourse(){setCourses([...courses,{name:'',grade:'4.0',credits:'3'}]);}
  function update(i:number,key:keyof Course,val:string){const c=[...courses];c[i]={...c[i],[key]:val};setCourses(c);}
  function calculate(){
    let totalPoints=0,totalCredits=0;
    courses.forEach(c=>{const cr=parseFloat(c.credits)||0;totalPoints+=gradeMap[c.grade]*cr;totalCredits+=cr;});
    if(totalCredits>0) setResult(totalPoints/totalCredits);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">GPA Calculator</h2>
      <div className="space-y-2">
        {courses.map((c,i)=>(
          <div key={i} className="grid grid-cols-3 gap-2">
            <input value={c.name} onChange={e=>update(i,'name',e.target.value)} className="border rounded px-2 py-1" placeholder={`Course ${i+1}`}/>
            <select value={c.grade} onChange={e=>update(i,'grade',e.target.value)} className="border rounded px-2 py-1">
              {Object.keys(gradeMap).map(g=><option key={g} value={g}>{g}</option>)}
            </select>
            <input type="number" value={c.credits} onChange={e=>update(i,'credits',e.target.value)} className="border rounded px-2 py-1" placeholder="Credits"/>
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <button onClick={addCourse} className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">+ Add Course</button>
        <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Calculate GPA</button>
      </div>
      {result !== null && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-500">Your GPA</p>
        <p className="text-4xl font-bold text-blue-700">{result.toFixed(2)}</p>
      </div>}
    </div>
  );
}
