const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Grade Calculator</h2>
      <p className="text-lg text-gray-700">A grade calculator determines your current grade or the score needed on future assignments to achieve a target grade. It supports weighted grading systems where different assignment types (tests, homework, projects) carry different percentages of the final grade.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Calculating final grade from multiple assignments</li>
        <li>Determining the minimum score needed on a final exam</li>
        <li>Understanding how upcoming tests will affect your grade</li>
        <li>Comparing grading system impacts</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How do I calculate my grade with weighted categories?', a: "Multiply each category's average by its weight (as a decimal), then sum the results. Example: Tests 40% (avg 82), Homework 30% (avg 95), Projects 30% (avg 88): 82×0.4 + 95×0.3 + 88×0.3 = 32.8 + 28.5 + 26.4 = 87.7." },
          { q: 'What score do I need on the final to get an A?', a: 'Use the formula: Required Score = (Target Grade − Current Grade × Current Weight) ÷ Final Weight. If your target is 90%, you have 85% with 80% of the course complete, and the final is worth 20%: (90 − 85×0.8) ÷ 0.2 = (90 − 68) ÷ 0.2 = 110. This means an A is not achievable.' },
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
