const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Unit Conversion Made Easy</h2>
      <p className="text-lg text-gray-700">Unit conversion is the process of converting a measurement from one unit to another within the same dimension (length, mass, temperature, etc.). Accurate unit conversion is critical in science, engineering, cooking, construction, and international trade.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Converting metric to imperial units (km to miles, kg to lbs)</li>
        <li>Temperature conversion (Celsius to Fahrenheit)</li>
        <li>Cooking measurement conversions (cups to ml)</li>
        <li>Scientific unit conversions</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How do I convert Celsius to Fahrenheit?', a: 'Use the formula: F = (C × 9/5) + 32. Example: 25°C → (25 × 1.8) + 32 = 77°F. To convert Fahrenheit to Celsius: C = (F - 32) × 5/9.' },
          { q: 'How do I convert miles to kilometers?', a: 'Multiply miles by 1.60934. Example: 10 miles × 1.60934 = 16.09 km. To convert km to miles, multiply by 0.62137.' },
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
