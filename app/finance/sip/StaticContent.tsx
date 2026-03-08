const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">What Is a SIP (Systematic Investment Plan)?</h2>
      <p className="text-lg text-gray-700">A Systematic Investment Plan (SIP) allows investors to invest a fixed amount regularly — typically monthly — in mutual funds or other investment vehicles. SIP calculators help you estimate the future value of your investments and understand how regular contributions, compounded over time, can build significant wealth.</p>

      <h3 className="text-xl font-semibold text-gray-800">SIP Calculator Formula</h3>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-gray-800 whitespace-pre-line">SIP Future Value = P × [(1+r)^n – 1] / r × (1+r)\n\nWhere P = monthly investment amount, r = monthly rate of return (annual rate ÷ 12), n = number of months</div>

      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: "What is the minimum amount for a SIP?", a: "Most mutual funds allow SIPs starting from as low as ₹500 per month. Some funds have even lower minimums. There is no maximum limit — you can invest as much as you want. Starting small and increasing contributions over time is a sound strategy." },
          { q: "Is SIP safe for investment?", a: "SIPs in mutual funds carry market risk — returns are not guaranteed and depend on fund performance. However, SIP reduces the risk of investing a lump sum at a market peak through Rupee Cost Averaging: you buy more units when prices are low and fewer when prices are high." },
          { q: "How does Rupee Cost Averaging work in SIP?", a: "Rupee Cost Averaging (RCA) means your fixed monthly investment buys more fund units when NAV is low and fewer when NAV is high. Over time, this averages out your cost per unit below the average price — a built-in benefit of regular SIP investing during volatile markets." },
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
