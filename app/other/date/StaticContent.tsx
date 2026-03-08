const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Date Calculator: Find the Difference Between Dates</h2>
      <p className="text-lg text-gray-700">A date calculator helps you find the exact number of days, weeks, months, or years between two dates. It is useful for project planning, tracking deadlines, calculating ages, determining contract durations, and understanding time intervals in history.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Calculating days between two dates for project deadlines</li>
        <li>Finding how many days until an event</li>
        <li>Determining contract and subscription durations</li>
        <li>Historical date research</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How do I calculate the number of days between two dates?', a: 'Subtract the earlier date from the later date. Our calculator handles this automatically, accounting for different month lengths and leap years. The result is shown in days, weeks, months, and years.' },
          { q: 'What is a Julian date?', a: 'A Julian date (Julian Day Number) is a continuous count of days from January 1, 4713 BC. It is used in astronomy and scientific computing to simplify date arithmetic without worrying about calendar irregularities.' },
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
