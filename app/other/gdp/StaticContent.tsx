const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">GDP Calculator: Understanding Gross Domestic Product</h2>
      <p className="text-lg text-gray-700">Gross Domestic Product (GDP) is the total monetary value of all goods and services produced within a country's borders in a specific period. It is the most widely used measure of economic size and growth. Our GDP calculator helps compute GDP using the expenditure approach: GDP = C + I + G + (X - M).</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Economics education and research</li>
        <li>Comparing economic size of countries</li>
        <li>Calculating GDP per capita</li>
        <li>Understanding economic growth rates</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'What are the components of GDP?', a: 'GDP = C + I + G + NX. C = Consumer spending (largest component, ~70% in US). I = Business investment. G = Government spending. NX = Net exports (Exports - Imports). If imports exceed exports, NX is negative.' },
          { q: 'What is the difference between GDP and GNP?', a: "GDP measures output produced within a country's borders regardless of who produces it. GNP (Gross National Product) measures output produced by a country's residents regardless of where they are located. GNP = GDP + income earned abroad - income paid to foreigners." },
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
