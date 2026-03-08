const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Density Calculator: Mass, Volume, and Density</h2>
      <p className="text-lg text-gray-700">Density is a physical property that describes how much mass is packed into a given volume. It is calculated as mass divided by volume (D = M/V) and is measured in units such as g/cm³, kg/m³, or lb/ft³. Density is fundamental in chemistry, physics, and engineering.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Identifying unknown materials by comparing to known densities</li>
        <li>Calculating whether an object will float or sink</li>
        <li>Material selection in engineering and manufacturing</li>
        <li>Mixing solutions in chemistry</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'What is the density of water?', a: 'Pure water has a density of 1.0 g/cm³ (or 1,000 kg/m³) at 4°C (39.2°F). Objects less dense than water float; objects more dense sink. Seawater is slightly denser (~1.025 g/cm³) due to dissolved salts.' },
          { q: 'How do I use density to identify a material?', a: "Calculate the density from the object's mass and volume, then compare to known densities. Gold is 19.3 g/cm³, iron is 7.87 g/cm³, aluminum is 2.7 g/cm³, and wood ranges from 0.3 to 0.9 g/cm³." },
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
