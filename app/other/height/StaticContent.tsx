const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Height Conversion Calculator</h2>
      <p className="text-lg text-gray-700">A height conversion calculator converts between different height units — feet and inches, centimeters, and meters. It is commonly used for medical records, travel, sports, and international communication where different measurement systems are used.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Converting height for medical forms and records</li>
        <li>Understanding height in different measurement systems</li>
        <li>Sports and athletics reporting</li>
        <li>International travel and immigration forms</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How do I convert feet and inches to centimeters?', a: 'First convert everything to inches (feet × 12 + inches), then multiply by 2.54. Example: 5 feet 9 inches = 69 inches × 2.54 = 175.26 cm.' },
          { q: 'What is the average height for adults?', a: 'The average height for adult men globally is approximately 5 ft 7 in (171 cm). For adult women, it is approximately 5 ft 3 in (161 cm). These vary significantly by country and ethnicity.' },
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
