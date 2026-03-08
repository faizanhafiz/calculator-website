const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Tire Size Calculator</h2>
      <p className="text-lg text-gray-700">A tire size calculator converts between different tire size formats and calculates the overall diameter, sidewall height, and circumference of a tire. Understanding tire dimensions helps when comparing replacement options, calculating speedometer accuracy, and selecting appropriate wheel/tire combinations.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Converting tire sizes when considering replacement options</li>
        <li>Checking speedometer accuracy after changing tire sizes</li>
        <li>Comparing overall diameter of different tire sizes</li>
        <li>Planning lifted truck or lowered vehicle fitments</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How do I read a tire size like 225/55R17?', a: '225 = section width in mm (tire width). 55 = aspect ratio (sidewall height is 55% of width). R = radial construction. 17 = wheel diameter in inches. So: 225mm wide, sidewall height = 225 × 0.55 = 123.75mm, fits a 17-inch wheel.' },
          { q: 'How does tire size affect speedometer?', a: "A larger diameter tire travels more distance per revolution, making your speedometer read slower than actual speed. A smaller tire does the opposite. A 3% larger tire means your speedometer shows 60 mph when you're actually going 61.8 mph." },
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
