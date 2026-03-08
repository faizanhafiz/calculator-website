const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Gravel Calculator: How Much Gravel Do You Need?</h2>
      <p className="text-lg text-gray-700">A gravel calculator estimates the amount of gravel, crushed stone, or decorative rock needed for driveways, garden paths, landscaping projects, or drainage applications. Gravel is typically measured in cubic yards, cubic feet, or tons.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Calculating gravel for driveways and parking areas</li>
        <li>Estimating decorative stone for garden paths</li>
        <li>Planning drainage gravel for French drains</li>
        <li>Landscaping and ground cover projects</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How deep should gravel be for a driveway?', a: 'For a standard residential driveway, lay 4 inches of gravel base plus 2 inches of surface gravel (6 inches total). High-traffic or commercial driveways may need 8–12 inches. A compacted sub-base improves longevity significantly.' },
          { q: 'How much does a ton of gravel cover?', a: 'One ton of gravel covers approximately 100 square feet at 2 inches deep, or about 50 square feet at 4 inches deep. Coverage varies by gravel type and particle size. Order 10% extra to account for waste.' },
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
