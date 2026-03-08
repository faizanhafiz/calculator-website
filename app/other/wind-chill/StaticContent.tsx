const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Wind Chill Calculator: How Cold Does It Feel?</h2>
      <p className="text-lg text-gray-700">Wind chill describes how cold the air feels on exposed skin due to the combination of air temperature and wind speed. Wind removes the thin layer of warm air that naturally surrounds your body, accelerating heat loss. Our wind chill calculator uses the official NWS/Environment Canada formula adopted in 2001.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Outdoor safety assessment during cold weather</li>
        <li>Planning cold-weather activities and sports</li>
        <li>Occupational safety for outdoor workers</li>
        <li>Meteorological reporting</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'At what wind chill is frostbite dangerous?', a: 'Frostbite risk increases significantly below -15°F (-26°C) wind chill. At -20°F (-29°C) with 30 mph wind (wind chill ≈ -46°F), exposed skin can freeze in under 30 minutes. At -35°C wind chill, frostbite can occur in 10 minutes. Cover all exposed skin when wind chills are severe.' },
          { q: 'What is the wind chill formula?', a: 'The NWS wind chill formula: Wind Chill (°F) = 35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16), where T = air temperature (°F) and V = wind speed (mph). Valid for temperatures ≤ 50°F and wind speeds ≥ 3 mph.' },
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
