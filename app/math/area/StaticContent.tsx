const StaticContent = () => {
  const shapes = [
    { shape: "Rectangle", formula: "A = length × width", example: "5 × 3 = 15 sq units" },
    { shape: "Circle", formula: "A = π × r²", example: "π × 4² ≈ 50.27 sq units" },
    { shape: "Triangle", formula: "A = ½ × base × height", example: "½ × 6 × 4 = 12 sq units" },
    { shape: "Trapezoid", formula: "A = ½ × (a + b) × h", example: "½ × (3+5) × 4 = 16 sq units" },
    { shape: "Ellipse", formula: "A = π × a × b", example: "π × 3 × 2 ≈ 18.85 sq units" },
    { shape: "Square", formula: "A = side²", example: "5² = 25 sq units" },
  ];
  const faqs = [
    { q: "What is the difference between area and perimeter?", a: "Area is the amount of space inside a 2D shape, measured in square units (cm², m², ft²). Perimeter is the total length of the boundary of the shape, measured in linear units. Both are related to size but measure different properties." },
    { q: "How do I convert between area units?", a: "1 m² = 10,000 cm². 1 ft² = 144 in². 1 acre = 43,560 ft². 1 hectare = 10,000 m² = 2.471 acres. Multiply or divide carefully — area conversions involve squaring the linear conversion factor." },
    { q: "What is the area of an irregular shape?", a: "For irregular shapes, break the shape into recognizable components (rectangles, triangles, circles), calculate each area separately, then add them together. For curved irregular shapes, numerical integration or grid counting methods are used." },
  ];
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Area Formulas for Common Shapes</h2>
      <p className="text-lg text-gray-700">Area measures the amount of two-dimensional space enclosed within a shape. It is expressed in square units (square meters, square feet, square inches, etc.). Knowing how to calculate area is essential in architecture, construction, interior design, landscaping, and everyday problem-solving.</p>

      <div className="overflow-x-auto">
        <table className="table-auto border border-gray-300 w-full text-left">
          <thead className="bg-blue-100 text-gray-800">
            <tr><th className="border border-gray-300 px-4 py-2">Shape</th><th className="border border-gray-300 px-4 py-2">Formula</th><th className="border border-gray-300 px-4 py-2">Example</th></tr>
          </thead>
          <tbody className="text-gray-700">
            {shapes.map((row, i) => (
              <tr key={i}><td className="border border-gray-300 px-4 py-2 font-medium">{row.shape}</td><td className="border border-gray-300 px-4 py-2 font-mono">{row.formula}</td><td className="border border-gray-300 px-4 py-2">{row.example}</td></tr>
            ))}
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
