const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Voltage Drop Calculator</h2>
      <p className="text-lg text-gray-700">Voltage drop is the reduction in electrical potential (voltage) along a wire due to resistance. Excessive voltage drop causes equipment to malfunction, motors to overheat, and lights to dim. The NEC (National Electrical Code) recommends keeping voltage drop below 3% for branch circuits and 5% total for feeders plus branch circuits.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Sizing wire gauge for electrical circuits</li>
        <li>Long-run wiring for outbuildings, RVs, and marine applications</li>
        <li>LED lighting system design</li>
        <li>Industrial motor circuit planning</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How is voltage drop calculated?', a: 'Voltage Drop = (2 × Length × Current × Resistance per foot) for DC circuits. For AC single-phase: VD = (2 × L × I × R) / 1000, where L = one-way length in feet, I = current in amps, R = resistance from conductor tables. Wire resistance increases with length and decreases with larger gauge.' },
          { q: 'What wire gauge should I use?', a: 'Common wire gauges and ampacity: 14 AWG = 15A, 12 AWG = 20A, 10 AWG = 30A, 8 AWG = 40A, 6 AWG = 55A. For long runs, go up one or two gauge sizes to keep voltage drop under 3%. Use our calculator to find the optimal gauge.' },
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
