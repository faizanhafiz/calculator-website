const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Day Counter: Count Days from Any Date</h2>
      <p className="text-lg text-gray-700">A day counter calculates the number of days from a starting date to an ending date, or counts days forward or backward from today. It is widely used for tracking countdowns, deadlines, anniversaries, and day-specific planning.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Counting down to a wedding, vacation, or event</li>
        <li>Tracking project timelines and deadlines</li>
        <li>Calculating how long ago an event occurred</li>
        <li>Legal and financial date calculations</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How do I count only business days?', a: 'Business days exclude weekends (Saturday and Sunday) and public holidays. To count business days, our calculator skips Saturdays and Sundays automatically. Manually subtract any public holidays in your country.' },
          { q: 'Does the calculator account for leap years?', a: 'Yes. Leap years add one extra day (February 29) every 4 years (with century year exceptions). Our calculator handles leap years automatically for accurate results.' },
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
