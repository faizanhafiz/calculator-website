const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Mulch Calculator: How Much Mulch Do You Need?</h2>
      <p className="text-lg text-gray-700">A mulch calculator estimates how many cubic yards or bags of mulch you need for your garden beds, landscaping, or tree rings. Proper mulching conserves moisture, suppresses weeds, regulates soil temperature, and improves soil health as it decomposes.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Garden bed and border mulching</li>
        <li>Tree ring and shrub mulching</li>
        <li>Playground and path mulching</li>
        <li>Erosion control on slopes</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How deep should mulch be?', a: "Apply 2–3 inches of mulch for most garden beds. Too little (under 2 inches) won't control weeds effectively; too much (over 4 inches) can suffocate plant roots and promote disease. Keep mulch 2–3 inches away from plant stems and tree trunks." },
          { q: 'How much mulch is in a cubic yard?', a: 'One cubic yard of mulch covers approximately 108 square feet at 3 inches deep (or 162 sq ft at 2 inches deep). A standard 2 cubic foot bag covers about 8 sq ft at 3 inches. Bulk mulch by the yard is more economical for large projects.' },
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
