const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">How to Calculate Concrete Volume</h2>
      <p className="text-lg text-gray-700">Concrete calculators estimate the volume of concrete needed for slabs, footings, columns, and other structures. Getting the quantity right prevents material waste and project delays. Concrete is typically ordered in cubic yards or cubic meters.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Driveways, patios, and sidewalk slabs</li>
        <li>Foundation footings and walls</li>
        <li>Concrete columns and posts</li>
        <li>Steps and stairs</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How much does a yard of concrete weigh?', a: 'A cubic yard of concrete weighs approximately 3,900–4,050 lbs (about 2 tons). Weight varies slightly based on the mix design and aggregate used. This is important for delivery truck load limits.' },
          { q: 'How much concrete should I order extra?', a: 'Always order 5–10% more concrete than your calculation to account for spillage, over-excavation, and uneven subgrades. Running short and having to order a second load is expensive and may cause cold joints.' },
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
