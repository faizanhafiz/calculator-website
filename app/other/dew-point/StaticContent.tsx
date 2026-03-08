const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Dew Point Calculator</h2>
      <p className="text-lg text-gray-700">The dew point is the temperature at which air becomes saturated with water vapor and dew begins to form. A dew point calculator uses temperature and relative humidity to compute this value, which is important for meteorology, HVAC, industrial processes, and understanding comfort levels.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Weather forecasting and meteorology</li>
        <li>HVAC system design and humidity control</li>
        <li>Preventing condensation in industrial environments</li>
        <li>Assessing outdoor comfort and fog risk</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'What is a comfortable dew point?', a: 'Dew points below 55°F (13°C) feel comfortable and dry. Between 55–65°F feels somewhat humid. Above 65°F feels oppressive; above 75°F is extremely humid and can be dangerous. Most people feel most comfortable with dew points around 50°F.' },
          { q: 'How is dew point different from relative humidity?', a: "Relative humidity (RH) is the percentage of moisture in the air relative to the maximum it can hold at that temperature. Dew point is an absolute measure — it doesn't change as temperature changes (unless actual moisture changes). Dew point is a more reliable comfort indicator." },
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
