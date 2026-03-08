const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Horsepower Calculator</h2>
      <p className="text-lg text-gray-700">Horsepower (HP) is a unit of power that measures the rate of work — specifically, how quickly a machine can do work. Originally defined by James Watt to compare steam engine power to horses, it is now used to rate engines, electric motors, and power tools.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Comparing engine power in vehicles</li>
        <li>Sizing electric motors for industrial applications</li>
        <li>Understanding power requirements for tools</li>
        <li>Converting between HP and watts or kilowatts</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How many watts is 1 horsepower?', a: '1 mechanical horsepower = 745.7 watts. 1 metric horsepower = 735.5 watts. 1 boiler horsepower = 9,810 watts. In most everyday contexts, 1 HP ≈ 746 watts is used.' },
          { q: 'What is the difference between BHP, WHP, and HP?', a: 'HP (horsepower) is a general measure. BHP (brake horsepower) is measured at the engine output shaft. WHP (wheel horsepower) is measured at the wheels, accounting for drivetrain losses (typically 15–20% less than BHP). WHP represents actual power delivered to the road.' },
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
