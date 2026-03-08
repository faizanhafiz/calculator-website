const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Mileage Calculator: Miles Per Gallon (MPG)</h2>
      <p className="text-lg text-gray-700">A mileage calculator determines your vehicle's fuel efficiency in miles per gallon (MPG) or liters per 100 km (L/100km). Knowing your vehicle's actual fuel economy helps you budget for fuel costs, compare vehicles, and identify if your car needs maintenance.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Calculating actual MPG after a fill-up</li>
        <li>Comparing fuel efficiency between vehicles</li>
        <li>Identifying declining fuel economy (maintenance signal)</li>
        <li>Estimating monthly fuel costs</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How do I calculate my MPG?', a: 'Fill your tank, reset the trip odometer, drive normally, then fill up again. MPG = Miles driven ÷ Gallons used. Example: 300 miles driven, used 10 gallons: 300 ÷ 10 = 30 MPG.' },
          { q: 'Why is my actual MPG lower than the EPA rating?', a: 'EPA ratings are from controlled lab tests. Real-world MPG is typically 15–25% lower due to aggressive driving, highway vs. city mix, air conditioning use, cargo weight, tire pressure, and temperature. Cold weather significantly reduces MPG, especially for hybrids and EVs.' },
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
