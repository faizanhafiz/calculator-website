const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">GPA Calculator: Calculate Your Grade Point Average</h2>
      <p className="text-lg text-gray-700">A GPA (Grade Point Average) calculator converts letter grades to grade points and computes your weighted average across courses. GPA is used by schools, colleges, and employers to evaluate academic performance. Understanding your GPA helps you track progress and plan for scholarships, admissions, and career goals.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Calculating semester and cumulative GPA</li>
        <li>Planning grades needed to reach a target GPA</li>
        <li>Converting between letter grades and grade points</li>
        <li>Graduate school and scholarship GPA requirements</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'What is a 4.0 GPA scale?', a: 'On the standard 4.0 scale: A = 4.0, A- = 3.7, B+ = 3.3, B = 3.0, B- = 2.7, C+ = 2.3, C = 2.0, C- = 1.7, D = 1.0, F = 0. Weighted GPAs can exceed 4.0 for AP, IB, or honors courses.' },
          { q: 'What GPA is needed for graduate school?', a: 'Most graduate programs require a minimum 3.0 GPA. Competitive programs (law, medical, top MBA) typically prefer 3.5+. GPA is one factor; GRE/GMAT scores, research experience, and recommendations also matter significantly.' },
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
