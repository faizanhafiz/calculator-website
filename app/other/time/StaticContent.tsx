const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Time Calculator: Add and Subtract Time</h2>
      <p className="text-lg text-gray-700">A time calculator adds or subtracts hours, minutes, and seconds to find elapsed time, total duration, or end time. It handles 12-hour (AM/PM) and 24-hour (military) formats and automatically carries over seconds to minutes and minutes to hours.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Adding up work hours for weekly totals</li>
        <li>Calculating total duration of a playlist or event</li>
        <li>Finding end time given start time and duration</li>
        <li>Converting between time formats</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How do I add up time in hours and minutes?', a: 'Convert everything to minutes, add, then convert back. Example: 2h 45m + 1h 30m = 165min + 90min = 255min = 4h 15min. Alternatively: add hours (3h), add minutes (75min = 1h 15min), combine for 4h 15min.' },
          { q: 'What is military time and how do I convert it?', a: 'Military (24-hour) time eliminates AM/PM confusion. For times from 1 PM onward, add 12 to the hour: 3 PM = 1500, 6:30 PM = 1830. For midnight = 0000, noon = 1200. To convert back: subtract 12 from hours 13–23.' },
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
