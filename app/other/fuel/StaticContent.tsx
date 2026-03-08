const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Fuel Cost Calculator</h2>
      <p className="text-lg text-gray-700">A fuel cost calculator estimates how much you will spend on fuel for a trip or over a period of time. It factors in distance, fuel efficiency (MPG or L/100km), and the current fuel price to give you a clear cost estimate for budgeting and planning.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Planning road trip fuel budgets</li>
        <li>Comparing fuel costs of different vehicles</li>
        <li>Calculating fleet vehicle fuel expenses</li>
        <li>Estimating monthly commuting costs</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How do I calculate fuel cost for a trip?', a: 'Fuel Cost = (Distance ÷ Fuel Efficiency) × Fuel Price. Example: 300-mile trip in a car getting 30 MPG at \\$3.50/gallon: (300 ÷ 30) × 3.50 = 10 gallons × \\$3.50 = \\$35.' },
          { q: 'What is the difference between MPG and L/100km?', a: 'MPG (miles per gallon) measures how far you can travel per unit of fuel — higher is better. L/100km measures how much fuel you use per 100 km — lower is better. To convert: 235.21 ÷ MPG = L/100km.' },
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
