const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Engine Horsepower Calculator</h2>
      <p className="text-lg text-gray-700">Engine horsepower can be estimated using several methods: from torque and RPM, from trap speed at the drag strip, or using the Engine HP formula based on elapsed time and vehicle weight. Our calculator uses the most common methods to estimate brake horsepower (BHP) or wheel horsepower (WHP).</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Estimating engine power from drag race performance</li>
        <li>Converting torque and RPM to horsepower</li>
        <li>Comparing engine output across vehicles</li>
        <li>Automotive enthusiast and racing applications</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'What is the formula to calculate HP from torque?', a: 'HP = (Torque × RPM) / 5,252. This formula works because 1 horsepower equals 5,252 ft-lb/min. Example: 300 ft-lb of torque at 4,000 RPM: (300 × 4000) / 5252 = 228.5 HP. Torque and HP curves always cross at 5,252 RPM.' },
          { q: 'What is the ET (elapsed time) method?', a: 'Developed by empirical testing at drag strips: HP = Weight × (Speed / 234)³. Example: A 3,000 lb car running a 12.5-second quarter mile at 110 mph: HP ≈ 3000 × (110/234)³ ≈ 312 HP. This method provides a useful estimate from drag strip timing data.' },
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
