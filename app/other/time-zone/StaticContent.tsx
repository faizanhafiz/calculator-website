const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Time Zone Converter</h2>
      <p className="text-lg text-gray-700">A time zone converter translates a time from one time zone to another. With 24 standard time zones and many regional variations (including half-hour and 45-minute offsets), converting times accurately is essential for international business, travel, remote work, and global scheduling.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Scheduling international meetings and calls</li>
        <li>Converting flight arrival times</li>
        <li>Remote team collaboration across time zones</li>
        <li>Planning international travel itineraries</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'What is UTC?', a: 'UTC (Coordinated Universal Time) is the primary time standard by which the world regulates clocks. All time zones are defined as offsets from UTC (e.g., EST = UTC-5, IST = UTC+5:30). UTC does not observe daylight saving time.' },
          { q: 'How do I handle Daylight Saving Time in conversions?', a: 'DST shifts clocks forward by 1 hour in spring and back in fall. Not all countries observe DST, and those that do change on different dates. Our converter uses current DST rules automatically, but verify for future dates when DST boundaries matter.' },
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
