const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Resistor Color Code Calculator</h2>
      <p className="text-lg text-gray-700">Resistors use colored bands to indicate their resistance value and tolerance. A resistor color code calculator decodes these bands to find the exact resistance (in ohms) and tolerance percentage, or encodes a resistance value into its color band combination.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Reading resistor values from color bands in electronics projects</li>
        <li>Ordering the correct resistors for a circuit</li>
        <li>Electronics education and learning</li>
        <li>Quality control and verification in manufacturing</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How do I read a 4-band resistor?', a: '4-band resistors: Band 1 = first digit, Band 2 = second digit, Band 3 = multiplier (×10^n), Band 4 = tolerance. Example: Brown (1), Black (0), Red (×100), Gold (±5%) = 1,000 Ω ±5% (1 kΩ).' },
          { q: 'What does tolerance mean on a resistor?', a: 'Tolerance indicates how close the actual resistance is to the marked value. Gold band = ±5%, Silver = ±10%, No band = ±20%. A 1kΩ ±5% resistor has an actual value between 950Ω and 1,050Ω. For precision circuits, use 1% tolerance (brown band) resistors.' },
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
