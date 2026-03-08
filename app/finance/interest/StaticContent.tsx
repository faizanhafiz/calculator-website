const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">What Is Simple Interest?</h2>
      <p className="text-lg text-gray-700">Simple interest is the most straightforward way to calculate interest on a loan or investment. It is calculated only on the original principal — not on any accumulated interest. While most modern financial products use compound interest, simple interest is still used in short-term loans, auto loans, and some savings instruments.</p>

      <h3 className="text-xl font-semibold text-gray-800">Simple Interest Calculator Formula</h3>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-gray-800 whitespace-pre-line">Simple Interest (SI) = P × R × T\n\nWhere P = principal amount, R = annual interest rate (decimal), T = time in years\nFinal Amount = P + SI</div>

      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: "When is simple interest used?", a: "Simple interest is commonly used in short-term loans (car loans, personal installment loans), U.S. Treasury bills, and some savings bonds. It's less common for long-term investments or mortgages where compound interest is standard." },
          { q: "How is simple interest different from compound interest?", a: "Simple interest is calculated only on the original principal, giving linear growth. Compound interest is calculated on principal plus accumulated interest, giving exponential growth. Over time, compound interest grows much faster." },
          { q: "Is simple interest good for borrowers?", a: "Yes, simple interest is generally better for borrowers because you pay less total interest compared to compound interest loans of the same rate and term. It is worse for savers and investors, since compound interest grows wealth faster." },
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
