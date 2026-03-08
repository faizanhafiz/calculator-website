const StaticContent = () => {
  const faqs = [
    { q: "How do I add or subtract fractions?", a: "To add or subtract fractions, find a common denominator. Convert each fraction so the denominators match, then add or subtract the numerators. Example: 1/3 + 1/4 = 4/12 + 3/12 = 7/12. Always simplify the result." },
    { q: "How do I multiply fractions?", a: "Multiply the numerators together and multiply the denominators together. Example: 2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2. Simplify cross-cancel before multiplying for easier arithmetic." },
    { q: "How do I divide fractions?", a: "To divide fractions, multiply the first fraction by the reciprocal (flip) of the second. Example: 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6. The phrase 'Keep, Change, Flip' helps remember the steps." },
    { q: "How do I convert a fraction to a decimal?", a: "Divide the numerator by the denominator. Example: 3/4 = 3 ÷ 4 = 0.75. To convert back to a fraction, write the decimal as a fraction with a power of 10 in the denominator, then simplify." },
    { q: "What is a mixed number and how do I convert it?", a: "A mixed number combines a whole number and a fraction (e.g., 2 3/4). To convert to an improper fraction: multiply the whole number by the denominator, add the numerator, and put the result over the original denominator. 2 3/4 = (2×4+3)/4 = 11/4." },
  ];
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Working with Fractions</h2>
      <p className="text-lg text-gray-700">Fractions represent parts of a whole. A fraction has a numerator (top number) and a denominator (bottom number). For example, 3/4 means 3 out of 4 equal parts. Fractions are used everywhere — in cooking recipes, measuring lengths, calculating discounts, and understanding probabilities.</p>
      <h3 className="text-xl font-semibold text-gray-800">Key Fraction Operations</h3>
      <div className="overflow-x-auto">
        <table className="table-auto border border-gray-300 w-full text-left">
          <thead className="bg-blue-100 text-gray-800">
            <tr><th className="border border-gray-300 px-4 py-2">Operation</th><th className="border border-gray-300 px-4 py-2">Rule</th><th className="border border-gray-300 px-4 py-2">Example</th></tr>
          </thead>
          <tbody className="text-gray-700">
            <tr><td className="border border-gray-300 px-4 py-2">Addition</td><td className="border border-gray-300 px-4 py-2">Common denominator, add numerators</td><td className="border border-gray-300 px-4 py-2">1/4 + 1/2 = 3/4</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">Subtraction</td><td className="border border-gray-300 px-4 py-2">Common denominator, subtract numerators</td><td className="border border-gray-300 px-4 py-2">3/4 − 1/4 = 2/4 = 1/2</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">Multiplication</td><td className="border border-gray-300 px-4 py-2">Multiply numerators, multiply denominators</td><td className="border border-gray-300 px-4 py-2">2/3 × 3/4 = 6/12 = 1/2</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">Division</td><td className="border border-gray-300 px-4 py-2">Multiply by reciprocal of divisor</td><td className="border border-gray-300 px-4 py-2">2/3 ÷ 4/5 = 2/3 × 5/4 = 5/6</td></tr>
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
