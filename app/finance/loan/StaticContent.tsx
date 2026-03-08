const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">How Loan Calculations Work</h2>
      <p className="text-lg text-gray-700">A loan calculator helps you determine your monthly payment, total amount paid, and total interest cost for any type of installment loan — personal loans, auto loans, student loans, and more. Knowing these figures before borrowing helps you budget effectively and compare loan offers.</p>

      <h3 className="text-xl font-semibold text-gray-800">Loan Calculator Formula</h3>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-gray-800 whitespace-pre-line">Monthly Payment = L × [i(1+i)^n] / [(1+i)^n – 1]\n\nWhere L = loan amount, i = monthly interest rate, n = total monthly payments</div>

      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: "What is a good interest rate for a personal loan?", a: "Personal loan rates typically range from 6% to 36% APR depending on your credit score. Borrowers with excellent credit (720+) qualify for rates under 10%. Rates above 20% are considered high — consider improving credit or choosing a secured loan for better terms." },
          { q: "How can I pay off my loan faster?", a: "Make bi-weekly payments instead of monthly (results in one extra payment per year), round up payments, or make occasional lump-sum payments toward the principal. Even small extra payments can significantly reduce your total interest and payoff time." },
          { q: "What is the difference between APR and interest rate?", a: "The interest rate is the cost of borrowing the principal. APR (Annual Percentage Rate) includes the interest rate plus additional fees (origination fees, broker fees, etc.), making it a more complete measure of the true cost of the loan." },
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
