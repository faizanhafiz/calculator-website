const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Square Footage Calculator</h2>
      <p className="text-lg text-gray-700">A square footage calculator computes the area of a space in square feet. It is commonly used in real estate, construction, interior design, and flooring to measure rooms, properties, and land. You can calculate square footage for rectangular, L-shaped, and other room configurations.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Measuring room size for flooring or carpet installation</li>
        <li>Calculating paint coverage for walls</li>
        <li>Real estate property area calculation</li>
        <li>Planning furniture arrangements and space utilization</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How do I calculate square footage of an L-shaped room?', a: 'Divide the L-shape into two rectangles. Calculate the area of each rectangle (length × width), then add them together. Example: Rectangle 1 is 10×12 ft (120 sq ft) and Rectangle 2 is 8×6 ft (48 sq ft): total = 168 sq ft.' },
          { q: 'How many square feet of paint do I need?', a: "One gallon of paint typically covers 350–400 sq ft with one coat. Measure each wall's width × height, add them together, subtract windows and doors (~21 sq ft each), then divide by coverage rate. Always buy 10% extra." },
          { q: "Is this calculator free to use?", a: "Yes. All calculators on zenicalculator.com are completely free with no registration required." }
        ].map((faq, idx) => (
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
