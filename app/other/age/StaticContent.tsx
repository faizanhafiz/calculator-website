const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">How to Calculate Your Exact Age</h2>
      <p className="text-lg text-gray-700">An age calculator determines your precise age in years, months, and days from your date of birth to today or any target date. This is useful for birthday planning, eligibility verification, insurance forms, medical records, and legal documentation.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2"><li>Verifying age eligibility for licenses, voting, or benefits</li><li>Calculating age for medical and insurance forms</li><li>Planning milestone birthday celebrations</li><li>Determining ages of historical figures</li></ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: "How is age calculated exactly?", a: "Age is calculated by finding the difference between two dates. The year difference gives base age; if the current month/day hasn't reached the birth month/day yet, one year is subtracted. The remaining months and days are then computed from the difference." },
          { q: "Can I calculate age between two past dates?", a: "Yes. Many age calculators allow you to set a custom 'as of' date instead of today, letting you find how old someone was at any specific point in history." },
          { q: "Is this calculator free?", a: "Yes. All tools on zenicalculator.com are completely free to use with no registration required." },
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
