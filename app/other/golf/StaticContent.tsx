const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Golf Handicap Calculator</h2>
      <p className="text-lg text-gray-700">A golf handicap is a numerical measure of a golfer's potential ability, used to level the playing field so golfers of different skill levels can compete fairly. The World Handicap System (WHS), adopted globally in 2020, calculates your handicap index from your best recent scores.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Calculating your golf handicap index</li>
        <li>Determining course handicap for a specific course</li>
        <li>Net score calculations for tournaments</li>
        <li>Tracking golf improvement over time</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How is a golf handicap calculated?', a: 'Under the WHS: Score Differential = (Adjusted Gross Score - Course Rating) × 113 / Slope Rating. Your Handicap Index = the average of your best 8 Score Differentials from your last 20 rounds, multiplied by 0.96.' },
          { q: 'What is a course handicap?', a: 'Course Handicap converts your Handicap Index to strokes for a specific course. Formula: Course Handicap = Handicap Index × (Slope Rating / 113) + (Course Rating - Par). This is the number of strokes you receive during a round.' },
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
