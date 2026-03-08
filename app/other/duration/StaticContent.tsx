const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Duration Calculator</h2>
      <p className="text-lg text-gray-700">A duration calculator finds the total length of time between a start and end point, or calculates the end time from a start time and duration. It handles hours, minutes, and seconds for scheduling, timesheet management, and planning.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Calculating shift duration for payroll</li>
        <li>Timing events, presentations, and workouts</li>
        <li>Planning schedules with multiple time blocks</li>
        <li>Music and video production timing</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How do I add hours and minutes together?', a: 'Convert all values to minutes, sum them, then convert back. Example: 1h 45m + 2h 30m = 105 + 150 = 255 minutes = 4h 15m.' },
          { q: 'What if my duration spans midnight?', a: 'Add 24 hours to the end time before subtracting the start time. Example: Start 10 PM, end 6 AM → 6 AM + 24h = 30:00 − 22:00 = 8 hours.' },
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
