const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Tile Calculator: How Many Tiles Do You Need?</h2>
      <p className="text-lg text-gray-700">A tile calculator estimates the number of tiles needed for a floor, wall, or backsplash project. It accounts for tile size, area to cover, and a waste factor (10–15% extra) for cuts, breakage, and future replacements.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Floor tile installation (bathroom, kitchen, living room)</li>
        <li>Wall and backsplash tiling</li>
        <li>Outdoor patio and pool tiling</li>
        <li>Calculating grout and adhesive quantities</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How much extra tile should I order?', a: 'Order 10% extra for simple rectangular rooms with straight cuts. Order 15% extra for diagonal layouts or complex cuts around obstacles. Always keep leftover tiles for future repairs — finding matching tiles years later can be difficult or impossible.' },
          { q: 'How do I calculate grout quantity?', a: 'Grout coverage depends on tile size and grout joint width. As a rough estimate: one 25 lb bag of grout covers about 100–150 sq ft for 12×12 tiles with 1/8-inch joints, or 50–75 sq ft for smaller mosaic tiles with wider joints.' },
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
