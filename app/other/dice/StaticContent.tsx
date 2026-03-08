const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Virtual Dice Roller</h2>
      <p className="text-lg text-gray-700">A virtual dice roller simulates the random roll of one or more dice with any number of sides (d4, d6, d8, d10, d12, d20, d100, and custom). It uses cryptographically secure random number generation to ensure fair results, making it suitable for board games, tabletop RPGs, classroom activities, and decision-making.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Tabletop RPGs (D&D, Pathfinder) requiring various dice types</li>
        <li>Board games when physical dice are unavailable</li>
        <li>Classroom probability demonstrations</li>
        <li>Random decision-making and selection</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'Is a virtual dice roll truly random?', a: "Our dice roller uses JavaScript's cryptographically secure random number generator (window.crypto.getRandomValues), which produces statistically uniform results indistinguishable from physical dice in all practical applications." },
          { q: 'What does 2d6 mean?', a: "'2d6' is standard tabletop RPG notation meaning 'roll 2 six-sided dice.' The format is [number of dice]d[sides]. Common examples: 1d20 (one 20-sided die), 3d6 (three six-sided dice), 1d100 (percentile die)." },
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
