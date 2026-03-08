const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Time Card Calculator: Calculate Hours Worked</h2>
      <p className="text-lg text-gray-700">A time card calculator computes total hours worked per day and week from punch-in and punch-out times. It automatically calculates overtime (hours over 40/week) and supports multiple shifts with break deductions, making payroll processing faster and more accurate.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Weekly timesheet calculation for payroll</li>
        <li>Identifying overtime for hourly employees</li>
        <li>Tracking billable hours for contractors</li>
        <li>Verifying time records for compliance</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How is overtime calculated?', a: "Federal law (FLSA) requires time-and-a-half pay for hours worked over 40 in a workweek. Some states (California, Alaska) also require daily overtime for hours over 8/day or double-time for hours over 12/day. Check your state's specific overtime rules." },
          { q: 'What is the difference between gross and net hours?', a: 'Gross hours are total time from clock-in to clock-out. Net hours are gross hours minus unpaid break time. Example: Clock in 8 AM, clock out 5 PM (9 gross hours), minus 30-minute unpaid lunch = 8.5 net hours.' },
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
