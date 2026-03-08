const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">How Equation Solvers Work</h2>
      <p className="text-lg text-gray-700">An equation solver is a powerful tool that finds the value(s) of unknown variables that make an equation true. From simple linear equations to complex systems, equation solvers help students, engineers, and professionals work through math problems quickly and accurately.</p>
      <p className="text-lg text-gray-700">
        Use the calculator above to perform calculations instantly. Our tool is designed for students, teachers, and professionals who need accurate results quickly. All calculations are performed in real time with no need for registration or software installation.
      </p>
      <h3 className="text-xl font-semibold text-gray-800">Tips for Best Results</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Enter all values carefully and double-check units before calculating.</li>
        <li>Use decimal notation for fractional values (e.g., 3.5 instead of 3 1/2).</li>
        <li>If the result seems unexpected, verify your inputs match the expected format.</li>
        <li>For complex problems, break them into smaller parts and solve step by step.</li>
      </ul>
      <h3 className="text-xl font-semibold text-gray-800">Why Use an Online Calculator?</h3>
      <p className="text-lg text-gray-700">
        Online calculators eliminate arithmetic errors, save time, and allow you to experiment with different values instantly. Whether you are a student checking homework, a professional making quick estimates, or someone solving a practical problem, our calculators provide fast and reliable answers.
      </p>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: "Is this calculator free to use?", a: "Yes, all calculators on zenicalculator.com are completely free. No login, subscription, or software download is required." },
          { q: "How accurate are the results?", a: "Our calculators use standard mathematical formulas and JavaScript floating-point arithmetic, which is accurate to 15-16 significant digits — more than sufficient for all practical purposes." },
          { q: "Can I use this on mobile?", a: "Yes, all our calculators are fully responsive and work on smartphones, tablets, and desktop computers." },
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
