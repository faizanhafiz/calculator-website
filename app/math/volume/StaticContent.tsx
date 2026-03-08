const StaticContent = () => {
  const shapes = [
    { shape: "Cube", formula: "V = s³", example: "s=3 → 27 cubic units" },
    { shape: "Rectangular Box", formula: "V = l × w × h", example: "4×3×2 = 24 cubic units" },
    { shape: "Sphere", formula: "V = (4/3)πr³", example: "r=3 → ≈113.1 cubic units" },
    { shape: "Cylinder", formula: "V = πr²h", example: "r=2, h=5 → ≈62.8 cubic units" },
    { shape: "Cone", formula: "V = (1/3)πr²h", example: "r=3, h=4 → ≈37.7 cubic units" },
    { shape: "Pyramid", formula: "V = (1/3) × base area × h", example: "Base 6², h=5 → 60 cubic units" },
  ];
  const faqs = [
    { q: "What is the difference between volume and surface area?", a: "Volume is the amount of three-dimensional space a shape occupies (measured in cubic units). Surface area is the total area of all outer faces of the shape (measured in square units). A shipping box has both: volume determines capacity; surface area determines how much cardboard is needed." },
    { q: "How do I convert between volume units?", a: "1 liter = 1,000 cm³ = 0.001 m³. 1 gallon (US) ≈ 3.785 liters ≈ 231 in³. 1 ft³ = 7.481 gallons = 28.317 liters. Use our unit conversion calculator for quick conversions." },
    { q: "How is volume used in real life?", a: "Volume calculations are used to determine how much liquid a container holds, how much concrete is needed for a construction project, how much air an HVAC system must condition, the capacity of shipping containers, and how much material is needed to fill a space." },
  ];
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Volume Formulas for 3D Shapes</h2>
      <p className="text-lg text-gray-700">Volume is the measure of the three-dimensional space occupied by a solid object. It is expressed in cubic units (cm³, m³, in³, ft³). Volume calculations are fundamental in engineering, construction, medicine, cooking, and many scientific fields.</p>
      <div className="overflow-x-auto">
        <table className="table-auto border border-gray-300 w-full text-left">
          <thead className="bg-blue-100 text-gray-800">
            <tr><th className="border border-gray-300 px-4 py-2">Shape</th><th className="border border-gray-300 px-4 py-2">Formula</th><th className="border border-gray-300 px-4 py-2">Example</th></tr>
          </thead>
          <tbody className="text-gray-700">
            {shapes.map((row, i) => <tr key={i}><td className="border border-gray-300 px-4 py-2 font-medium">{row.shape}</td><td className="border border-gray-300 px-4 py-2 font-mono">{row.formula}</td><td className="border border-gray-300 px-4 py-2">{row.example}</td></tr>)}
          </tbody>
        </table>
      </div>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="bg-gray-50 border border-blue-200 rounded-xl shadow-sm">
            <summary className="text-lg font-semibold text-blue-900 cursor-pointer px-6 py-4 hover:bg-blue-50 rounded-xl flex justify-between items-center">
              <span>{faq.q}</span>
              <svg className="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-6 pb-4 pt-2 text-gray-800 text-base">{faq.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
};
export default StaticContent;
