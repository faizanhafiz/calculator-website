const StaticContent = () => {
  const faqs = [
    { q: "How do I calculate what percent one number is of another?", a: "Divide the part by the whole and multiply by 100. Example: What percent is 30 of 150? → (30 ÷ 150) × 100 = 20%." },
    { q: "How do I calculate a percentage increase or decrease?", a: "Percentage Change = [(New Value – Old Value) ÷ Old Value] × 100. A positive result is an increase; a negative result is a decrease. Example: From 80 to 100 → (20 ÷ 80) × 100 = 25% increase." },
    { q: "How do I find the original value before a percentage was applied?", a: "Divide the final value by (1 + rate/100) for an increase, or (1 – rate/100) for a decrease. Example: If a price increased 20% to $120, original = 120 ÷ 1.20 = $100." },
    { q: "What is a percentage point vs. a percent change?", a: "A percentage point is an absolute difference between two percentages. Example: Going from 10% to 15% is a 5 percentage point increase, but a 50% relative increase. The distinction matters greatly in finance, economics, and statistics." },
  ];
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Percentage Calculations Explained</h2>
      <p className="text-lg text-gray-700">Percentages are one of the most practical math concepts in everyday life — used in shopping discounts, tax calculations, interest rates, test scores, and statistical analysis. A percentage expresses a number as a fraction of 100, making it easy to compare different quantities on a common scale.</p>

      <h3 className="text-xl font-semibold text-gray-800">Common Percentage Formulas</h3>
      <div className="overflow-x-auto">
        <table className="table-auto border border-gray-300 w-full text-left">
          <thead className="bg-blue-100 text-gray-800">
            <tr><th className="border border-gray-300 px-4 py-2">Calculation</th><th className="border border-gray-300 px-4 py-2">Formula</th><th className="border border-gray-300 px-4 py-2">Example</th></tr>
          </thead>
          <tbody className="text-gray-700">
            <tr><td className="border border-gray-300 px-4 py-2">X% of Y</td><td className="border border-gray-300 px-4 py-2">(X/100) × Y</td><td className="border border-gray-300 px-4 py-2">15% of 200 = 30</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">X is what % of Y?</td><td className="border border-gray-300 px-4 py-2">(X/Y) × 100</td><td className="border border-gray-300 px-4 py-2">30/200 × 100 = 15%</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">% Change</td><td className="border border-gray-300 px-4 py-2">[(New–Old)/Old] × 100</td><td className="border border-gray-300 px-4 py-2">(110–100)/100 × 100 = 10%</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">Original before % increase</td><td className="border border-gray-300 px-4 py-2">Final ÷ (1 + %/100)</td><td className="border border-gray-300 px-4 py-2">110 ÷ 1.10 = 100</td></tr>
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
