const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">How to Calculate a Tip</h2>
      <p className="text-lg text-gray-700">A tip calculator helps you determine how much to tip at restaurants, hotels, salons, and other service businesses. It also splits the bill and tip amount among multiple people, making group dining simple and fair.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2"><li>Calculating restaurant tips (standard 15–20%)</li><li>Splitting bills evenly among a group</li><li>Determining tip amounts for taxi and rideshare drivers</li><li>Hotel and valet service gratuities</li></ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: "What is the standard tip percentage?", a: "In the US, the standard tip is 15–20% for restaurant service. 15% for adequate service, 18% for good service, 20%+ for excellent service. For other services: bartenders 15–20%, taxi drivers 10–15%, hotel housekeeping $2–5/night." },
          { q: "How do I split a bill with tip among a group?", a: "Add the tip to the total bill first, then divide by the number of people. Example: $80 bill + 20% tip = $96 total ÷ 4 people = $24 per person." },
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
