const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">What Day of the Week Calculator</h2>
      <p className="text-lg text-gray-700">This calculator determines the day of the week for any date — past, present, or future. It uses the Gregorian calendar and is accurate for all dates from October 15, 1582 onwards (when the Gregorian calendar was adopted).</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Finding what day of the week a birthday or anniversary falls on</li>
        <li>Historical research and date verification</li>
        <li>Planning future events on specific days</li>
        <li>Calculating recurring weekly schedules</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How is the day of the week calculated mathematically?', a: "The most common algorithm is Zeller's Congruence, which uses modular arithmetic on the year, month, and day to produce a number 0–6 representing the day of the week. Our calculator uses this method internally." },
          { q: 'What was the most common birthday day of the week historically?', a: 'Studies of US birth records show Tuesday and Wednesday are the most common birth days, while Sunday and Saturday have the fewest births — likely due to elective C-sections and inductions being scheduled on weekdays.' },
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
