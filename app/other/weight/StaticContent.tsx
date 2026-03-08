const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Weight Conversion Calculator</h2>
      <p className="text-lg text-gray-700">A weight conversion calculator converts between units of mass/weight including kilograms, pounds, grams, ounces, stones, and metric tons. Accurate weight conversion is needed for international shipping, medical dosing, cooking, fitness tracking, and scientific work.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Converting body weight between kg and lbs for fitness tracking</li>
        <li>Shipping and freight weight calculations</li>
        <li>Cooking and recipe measurement conversion</li>
        <li>International health and medical records</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How do I convert pounds to kilograms?', a: 'Multiply pounds by 0.453592. Example: 180 lbs × 0.453592 = 81.65 kg. To convert kg to lbs, multiply by 2.20462. Example: 75 kg × 2.20462 = 165.35 lbs.' },
          { q: 'What is a stone in weight?', a: 'A stone is a British unit of weight equal to 14 pounds (6.35 kg). It is commonly used in the UK and Ireland to express body weight. For example, 11 stone = 11 × 14 = 154 pounds = 69.85 kg.' },
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
