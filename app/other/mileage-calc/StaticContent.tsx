const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Mileage Reimbursement Calculator</h2>
      <p className="text-lg text-gray-700">A mileage reimbursement calculator computes the amount to reimburse an employee or claim as a tax deduction for business miles driven. The IRS sets a standard mileage rate each year, covering fuel, maintenance, and depreciation costs.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Calculating employee mileage reimbursement</li>
        <li>Estimating self-employment mileage deductions</li>
        <li>Medical and charitable mileage deductions</li>
        <li>Expense report preparation</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'What is the 2024 IRS mileage rate?', a: 'For 2024, the IRS standard mileage rate is 67 cents per mile for business use, 21 cents per mile for medical or moving purposes, and 14 cents per mile for charitable work. Rates are set annually by the IRS and may change each year.' },
          { q: 'Should I use the standard mileage rate or actual expenses?', a: 'The standard rate is simpler — just track your miles. Actual expenses (fuel, insurance, depreciation, maintenance) may yield a larger deduction if you drive a large, expensive vehicle or drive many miles. Compare both methods in your first year to choose optimally.' },
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
