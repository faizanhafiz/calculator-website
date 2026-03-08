const StaticContent = () => {
  const faqs = [
    {
      question: "What is compound interest?",
      answer: "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. Unlike simple interest, it grows exponentially over time, making it a powerful wealth-building tool.",
    },
    {
      question: "How is compound interest calculated?",
      answer: "The formula is: A = P(1 + r/n)^(nt), where P is the principal, r is the annual interest rate (decimal), n is the number of times interest compounds per year, and t is the time in years.",
    },
    {
      question: "What is the best compounding frequency?",
      answer: "The more frequently interest compounds, the more you earn. Daily compounding yields slightly more than monthly, which yields more than quarterly or annually. However, the differences are smaller than you might expect.",
    },
    {
      question: "How does compound interest differ from simple interest?",
      answer: "Simple interest is calculated only on the principal, giving linear growth. Compound interest is calculated on principal plus accumulated interest, giving exponential growth that accelerates over time.",
    },
    {
      question: "What is the Rule of 72?",
      answer: "The Rule of 72 is a quick mental math shortcut: divide 72 by the annual interest rate to estimate the number of years it takes for an investment to double. For example, at 6% annual interest, an investment doubles roughly every 12 years.",
    },
  ];

  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">What Is Compound Interest?</h2>
      <p className="text-lg text-gray-700">
        Compound interest is widely regarded as one of the most powerful forces in personal finance. Unlike simple interest — which is earned only on the original principal — compound interest is earned on both the principal and previously accumulated interest. This creates a snowball effect: the longer money stays invested, the faster it grows.
      </p>
      <p className="text-lg text-gray-700">
        Albert Einstein reportedly called compound interest the "eighth wonder of the world." Whether or not he said it, the math proves the point. A single $10,000 investment at 7% annual interest compounded monthly grows to over $76,000 in 30 years — without adding a single extra dollar.
      </p>

      <h3 className="text-xl font-semibold text-gray-800">Compound Interest Formula</h3>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-gray-800">
        A = P × (1 + r/n)^(n × t)
      </div>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li><strong>A</strong> — Final amount (principal + interest)</li>
        <li><strong>P</strong> — Principal (initial investment)</li>
        <li><strong>r</strong> — Annual interest rate (as a decimal, e.g., 5% = 0.05)</li>
        <li><strong>n</strong> — Compounding frequency per year (12 = monthly)</li>
        <li><strong>t</strong> — Time in years</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800">Compounding Frequency Comparison</h3>
      <p className="text-gray-700">For a $10,000 principal at 6% annual rate over 10 years:</p>
      <div className="overflow-x-auto">
        <table className="table-auto border border-gray-300 text-center w-full">
          <thead className="bg-blue-100 text-gray-800">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Frequency</th>
              <th className="border border-gray-300 px-4 py-2">Final Amount</th>
              <th className="border border-gray-300 px-4 py-2">Interest Earned</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr><td className="border border-gray-300 px-4 py-2">Annually</td><td className="border border-gray-300 px-4 py-2">$17,908.48</td><td className="border border-gray-300 px-4 py-2">$7,908.48</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">Quarterly</td><td className="border border-gray-300 px-4 py-2">$18,061.11</td><td className="border border-gray-300 px-4 py-2">$8,061.11</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">Monthly</td><td className="border border-gray-300 px-4 py-2">$18,193.97</td><td className="border border-gray-300 px-4 py-2">$8,193.97</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">Daily</td><td className="border border-gray-300 px-4 py-2">$18,220.40</td><td className="border border-gray-300 px-4 py-2">$8,220.40</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-gray-800">Where Is Compound Interest Used?</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Savings accounts and CDs:</strong> Banks compound interest on deposits, growing your balance over time.</li>
        <li><strong>Investment accounts:</strong> Returns on stocks, index funds, and ETFs compound over decades.</li>
        <li><strong>Retirement accounts (401k, IRA):</strong> Long investment horizons maximize the compounding effect.</li>
        <li><strong>Loans and credit cards:</strong> Compound interest works against you when you carry a balance.</li>
      </ul>

      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">FAQs about Compound Interest</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="bg-gray-50 border border-blue-200 rounded-xl shadow-sm">
            <summary className="text-lg font-semibold text-blue-900 cursor-pointer px-6 py-4 hover:bg-blue-50 rounded-xl flex justify-between items-center">
              <span>{faq.question}</span>
              <svg className="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-4 pt-2 text-gray-800 text-base">{faq.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default StaticContent;
