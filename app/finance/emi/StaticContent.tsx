const StaticContent = () => {
  const faqs = [
    { question: "What is EMI?", answer: "EMI stands for Equated Monthly Installment. It is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both the interest and principal every month so that the loan is paid off in full within a set number of years." },
    { question: "How is EMI calculated?", answer: "EMI = [P × R × (1+R)^N] / [(1+R)^N – 1], where P is the principal loan amount, R is the monthly interest rate (annual rate ÷ 12), and N is the number of monthly installments." },
    { question: "What factors affect EMI?", answer: "Three main factors affect your EMI: (1) Principal amount — the higher the loan, the higher the EMI. (2) Interest rate — a lower rate means lower EMI. (3) Loan tenure — longer tenure reduces EMI but increases total interest paid." },
    { question: "Can I reduce my EMI?", answer: "Yes. You can reduce your EMI by making a larger down payment to lower the principal, negotiating a lower interest rate, or choosing a longer repayment tenure. Making prepayments also reduces the outstanding principal and can lower future EMIs." },
    { question: "What is the difference between flat rate and reducing balance EMI?", answer: "Flat rate EMI calculates interest on the full principal throughout the loan tenure. Reducing balance EMI calculates interest only on the outstanding principal, which decreases each month. Reducing balance is more common and generally results in lower total interest." },
  ];
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Understanding EMI (Equated Monthly Installment)</h2>
      <p className="text-lg text-gray-700">An Equated Monthly Installment (EMI) is a fixed monthly payment that borrowers make to repay a loan. Whether you're financing a home, car, or personal expense, understanding EMI helps you plan your budget and compare loan offers effectively.</p>
      <p className="text-lg text-gray-700">Each EMI payment has two components: the <strong>interest portion</strong> (charged on the outstanding loan balance) and the <strong>principal portion</strong> (which reduces the outstanding debt). In the early months, most of the EMI goes toward interest; over time, a larger portion reduces the principal.</p>

      <h3 className="text-xl font-semibold text-gray-800">EMI Formula</h3>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-gray-800">
        EMI = [P × R × (1+R)^N] ÷ [(1+R)^N – 1]
      </div>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li><strong>P</strong> — Principal loan amount</li>
        <li><strong>R</strong> — Monthly interest rate (Annual rate ÷ 12 ÷ 100)</li>
        <li><strong>N</strong> — Total number of monthly payments</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800">EMI Comparison Table</h3>
      <p className="text-gray-700">Example: ₹5,00,000 loan at 10% annual interest</p>
      <div className="overflow-x-auto">
        <table className="table-auto border border-gray-300 text-center w-full">
          <thead className="bg-blue-100 text-gray-800">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Tenure</th>
              <th className="border border-gray-300 px-4 py-2">Monthly EMI</th>
              <th className="border border-gray-300 px-4 py-2">Total Payment</th>
              <th className="border border-gray-300 px-4 py-2">Total Interest</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr><td className="border border-gray-300 px-4 py-2">1 year</td><td className="border border-gray-300 px-4 py-2">₹43,954</td><td className="border border-gray-300 px-4 py-2">₹5,27,452</td><td className="border border-gray-300 px-4 py-2">₹27,452</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">3 years</td><td className="border border-gray-300 px-4 py-2">₹16,134</td><td className="border border-gray-300 px-4 py-2">₹5,80,819</td><td className="border border-gray-300 px-4 py-2">₹80,819</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">5 years</td><td className="border border-gray-300 px-4 py-2">₹10,624</td><td className="border border-gray-300 px-4 py-2">₹6,37,480</td><td className="border border-gray-300 px-4 py-2">₹1,37,480</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">FAQs about EMI</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="bg-gray-50 border border-blue-200 rounded-xl shadow-sm">
            <summary className="text-lg font-semibold text-blue-900 cursor-pointer px-6 py-4 hover:bg-blue-50 rounded-xl flex justify-between items-center">
              <span>{faq.question}</span>
              <svg className="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-6 pb-4 pt-2 text-gray-800 text-base">{faq.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
};
export default StaticContent;
