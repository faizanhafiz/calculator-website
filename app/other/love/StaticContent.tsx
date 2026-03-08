const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Love Calculator: How Compatible Are You?</h2>
      <p className="text-lg text-gray-700">A love compatibility calculator uses names, birth dates, or astrological data to generate a fun compatibility score. While purely for entertainment, these tools are a lighthearted way to explore personality compatibility and spark conversations about relationships.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Fun compatibility check for couples</li>
        <li>Ice-breaker activity at parties</li>
        <li>Entertainment and social media sharing</li>
        <li>Exploring astrology-based compatibility</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'Is a love calculator accurate?', a: 'Love calculators are intended for entertainment only and are not scientifically validated. Real relationship compatibility depends on shared values, communication, trust, and mutual respect — factors that cannot be measured by names or birthdays.' },
          { q: 'What makes relationships truly compatible?', a: 'Research by relationship scientists like Dr. John Gottman shows that successful couples share similar values, communicate respectfully during conflict, maintain a 5:1 ratio of positive to negative interactions, and build genuine friendship alongside romance.' },
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
