const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Sleep Calculator: Find Your Optimal Bedtime or Wake Time</h2>
      <p className="text-lg text-gray-700">A sleep calculator determines the best bedtime or wake-up time based on sleep cycles. Human sleep consists of 90-minute cycles of light sleep, deep sleep, and REM (Rapid Eye Movement) sleep. Waking at the end of a complete cycle — rather than in the middle — leads to feeling refreshed rather than groggy.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Finding the ideal bedtime for a target wake time</li>
        <li>Calculating how many sleep cycles you'll get</li>
        <li>Planning naps for optimal recovery</li>
        <li>Adjusting sleep schedule for shift work or jet lag</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How many hours of sleep do adults need?', a: 'The CDC and sleep experts recommend 7–9 hours for adults (18–64), 7–8 hours for seniors (65+), 8–10 hours for teenagers, and 9–12 hours for school-age children. Individual needs vary — some people function well on 6 hours; others need 9.' },
          { q: 'What is a sleep cycle?', a: 'A sleep cycle lasts approximately 90 minutes and includes: N1 (light sleep), N2 (intermediate sleep), N3 (deep/slow-wave sleep), and REM sleep. Deep sleep is critical for physical recovery; REM sleep is critical for memory consolidation and emotional processing.' },
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
