const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Stair Calculator: Rise, Run, and Number of Steps</h2>
      <p className="text-lg text-gray-700">A stair calculator helps contractors, builders, and DIYers design safe and comfortable staircases. It calculates the number of steps, individual rise (step height), and run (step depth) based on total rise height and desired proportions — ensuring stairs meet building codes and ergonomic standards.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Planning deck and porch stairs</li>
        <li>Interior staircase design and renovation</li>
        <li>Meeting building code requirements</li>
        <li>Calculating materials for stair construction</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'What are standard stair dimensions?', a: 'International Residential Code (IRC) standards: Maximum riser height = 7.75 inches. Minimum tread depth = 10 inches. The comfort formula: 2 × Rise + Run = 25–27 inches. A common comfortable stair: 7-inch rise, 11-inch run (2×7+11 = 25).' },
          { q: 'How do I calculate the number of steps?', a: "Divide the total rise (floor-to-floor height in inches) by the desired riser height. Example: 120 inches total rise ÷ 7.5 inches per step = 16 steps. If the result isn't a whole number, adjust the riser height slightly so all steps are equal." },
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
