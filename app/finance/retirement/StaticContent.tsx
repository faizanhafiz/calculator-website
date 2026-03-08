const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Planning for a Secure Retirement</h2>
      <p className="text-lg text-gray-700">Retirement planning is one of the most important financial tasks you will undertake. A retirement calculator helps estimate how much you need to save, whether your current savings are on track, and how different contribution rates, investment returns, and retirement ages affect your outcome.</p>

      <h3 className="text-xl font-semibold text-gray-800">Retirement Calculator Formula</h3>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-gray-800 whitespace-pre-line">Required Nest Egg = Annual Expenses × 25 (based on the 4% Rule)\nProjected Savings = Current Savings × (1+r)^years + Annual Contribution × [(1+r)^years – 1] / r</div>

      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: "How much money do I need to retire?", a: "A common rule of thumb is the 4% Rule: you need 25 times your annual expenses saved to retire safely. For example, if you need $60,000 per year, you need $1.5 million. This allows you to withdraw 4% annually with a high probability of your savings lasting 30+ years." },
          { q: "What is the best age to start saving for retirement?", a: "The earlier the better. Starting at 25 vs. 35 can more than double your final savings due to compound interest. Even small contributions in your 20s create a significant head start. If you start late, increase your contribution rate and consider working a few extra years." },
          { q: "What accounts should I use for retirement savings?", a: "Maximize tax-advantaged accounts first: 401(k) or 403(b) up to the employer match (free money), then max out an IRA (Traditional or Roth depending on your tax situation). After that, contribute more to your 401(k) up to the annual limit, then taxable brokerage accounts." },
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
