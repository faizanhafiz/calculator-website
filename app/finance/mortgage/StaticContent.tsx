const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Understanding Your Mortgage</h2>
      <p className="text-lg text-gray-700">A mortgage is a long-term loan used to finance the purchase of real estate. Our mortgage calculator helps you estimate your monthly payment based on the loan amount, interest rate, and term. Understanding your mortgage payment helps you determine how much home you can afford and compare different loan scenarios.</p>

      <h3 className="text-xl font-semibold text-gray-800">Mortgage Calculator Formula</h3>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-gray-800 whitespace-pre-line">Monthly Payment = P × [r(1+r)^n] / [(1+r)^n – 1]\n\nWhere P = loan amount, r = monthly rate (annual rate ÷ 12), n = number of payments</div>

      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: "What does a mortgage payment include?", a: "A full mortgage payment (PITI) includes: Principal (loan repayment), Interest (lender's fee), Property Taxes (escrowed monthly), and Insurance (homeowner's plus PMI if applicable). Our calculator covers principal and interest; add 20–30% for taxes and insurance." },
          { q: "How does the down payment affect my mortgage?", a: "A larger down payment reduces your principal, lowering monthly payments and total interest paid. A down payment of 20% or more typically eliminates the need for Private Mortgage Insurance (PMI), which adds 0.5–1.5% to your annual costs." },
          { q: "What is an amortization schedule?", a: "An amortization schedule shows each monthly payment broken down into principal and interest. In the early years, most of each payment is interest. Over time, the principal portion grows and the interest shrinks, until the loan is fully paid off." },
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
