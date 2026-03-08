const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Hours Calculator: Calculate Time Between Hours</h2>
      <p className="text-lg text-gray-700">An hours calculator computes the total time worked or elapsed between a start time and end time. It handles both AM/PM and 24-hour (military) time formats, making it ideal for timesheets, payroll, scheduling, and project management.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Calculating total hours worked for payroll</li>
        <li>Tracking billable hours for freelancers</li>
        <li>Planning work schedules and shifts</li>
        <li>Calculating overtime hours</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How do I calculate overtime?', a: 'Standard overtime in the US is time worked beyond 40 hours per week, paid at 1.5× the regular rate. Some states also require daily overtime (beyond 8 hours/day). Use our calculator to sum daily hours, then identify the weekly total.' },
          { q: 'How do I handle lunch breaks in time calculations?', a: 'Subtract the break duration from total time worked. Example: Worked 8 AM to 5 PM (9 hours) with a 30-minute unpaid lunch = 8.5 hours paid time. Our calculator allows you to enter and subtract break time.' },
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
