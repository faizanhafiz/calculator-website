const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">What Is Future Value?</h2>
      <p className="text-lg text-gray-700">Future Value (FV) is the value of a current asset at a future date, based on an assumed rate of growth. Whether you're planning for retirement, evaluating an investment, or comparing savings options, knowing the future value of your money helps you make smarter financial decisions.</p>

      <h3 className="text-xl font-semibold text-gray-800">Future Value Calculator Formula</h3>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-gray-800 whitespace-pre-line">Future Value (FV) = PV × (1 + r)^n\n\nWhere PV = present value, r = interest rate per period, n = number of periods\nFor periodic contributions: FV = PMT × [(1+r)^n – 1] / r</div>

      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: "What is present value vs future value?", a: "Present value (PV) is what money is worth today. Future value (FV) is what that money will be worth at a specified time in the future, assuming a given rate of return. These concepts are inverses — if you know one, you can calculate the other." },
          { q: "How does inflation affect future value?", a: "Inflation reduces the purchasing power of future money. A future value of $100,000 in 30 years may only buy what $40,000 buys today (at 3% inflation). Use the real rate of return (nominal rate minus inflation) for a true picture of future purchasing power." },
          { q: "What is a good rate of return to use in future value calculations?", a: "For conservative estimates, use 4–5%. For moderate stock-market-based assumptions, 7% (historical S&P 500 average after inflation) is commonly used. Always run multiple scenarios (low, medium, high) to understand the range of possible outcomes." },
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
