const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Roofing Calculator: Estimate Materials for Your Roof</h2>
      <p className="text-lg text-gray-700">A roofing calculator estimates the number of shingles, felt paper, and ridge caps needed for a roofing project. Roofing materials are sold in 'squares' — one square covers 100 square feet. Accurate estimates prevent costly material shortages or expensive overages.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Estimating shingles for new roof installation</li>
        <li>Planning roof replacement material costs</li>
        <li>Calculating materials for roof additions</li>
        <li>Contractor bids and project planning</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'What is a roofing square?', a: 'One roofing square = 100 square feet of roof area. A 2,000 sq ft home might have 25–30 squares of roofing, depending on the pitch (slope). Most residential shingle bundles cover 1/3 square, so 3 bundles = 1 square.' },
          { q: 'How do I account for roof pitch in calculations?', a: 'Roof pitch (slope) increases the actual roof surface area compared to the footprint. A steep 12/12 pitch (45°) has 41% more surface area than a flat roof. Use a pitch multiplier: 4/12 = 1.054, 6/12 = 1.118, 8/12 = 1.202, 12/12 = 1.414.' },
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
