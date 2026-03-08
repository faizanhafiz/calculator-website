const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Mass and Weight Conversion Calculator</h2>
      <p className="text-lg text-gray-700">Mass is the amount of matter in an object, while weight is the force of gravity acting on that mass. Our mass converter helps you convert between grams, kilograms, pounds, ounces, tons, and other units used in everyday life, science, and commerce.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Converting between metric and imperial weight units</li>
        <li>Recipe ingredient measurements</li>
        <li>Shipping and logistics weight calculations</li>
        <li>Scientific research and laboratory work</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'What is the difference between mass and weight?', a: 'Mass is constant regardless of location and is measured in kilograms (SI unit). Weight is a force (mass × gravitational acceleration) and changes with gravity. On the Moon, your mass is the same but you weigh 1/6 as much. In everyday use, the terms are used interchangeably.' },
          { q: 'How do I convert pounds to kilograms?', a: 'Multiply pounds by 0.453592. Example: 150 lbs × 0.453592 = 68.04 kg. To convert kg to lbs, multiply by 2.20462. Example: 70 kg × 2.20462 = 154.3 lbs.' },
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
