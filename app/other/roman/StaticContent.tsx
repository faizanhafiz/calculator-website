const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Roman Numeral Converter</h2>
      <p className="text-lg text-gray-700">Roman numerals are a number system originating in ancient Rome that uses letter combinations to represent values. They are still used today for clock faces, movie sequels, book chapters, Super Bowl numbering, and formal documents. Our converter translates between Arabic numerals and Roman numerals instantly.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Converting years to Roman numerals for monuments and certificates</li>
        <li>Understanding Roman numerals on clocks and watches</li>
        <li>Movie, book, and event numbering (Super Bowl LIX)</li>
        <li>Learning and education</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'What are the basic Roman numeral symbols?', a: 'I=1, V=5, X=10, L=50, C=100, D=500, M=1000. Smaller numerals before a larger one are subtracted (IV=4, IX=9, XL=40, XC=90, CD=400, CM=900). Repeating a numeral up to 3 times adds its value (III=3, XXX=30).' },
          { q: 'What is the largest Roman numeral?', a: 'Standard Roman numerals go up to 3,999 (MMMCMXCIX). For larger numbers, a bar over a numeral multiplies it by 1,000 (V̄ = 5,000, X̄ = 10,000, M̄ = 1,000,000), though this is rarely used in modern contexts.' },
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
