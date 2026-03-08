const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Electricity Cost Calculator</h2>
      <p className="text-lg text-gray-700">An electricity cost calculator estimates how much it costs to run electrical appliances and devices based on wattage, hours of use, and your electricity rate (kWh price). Understanding energy consumption helps reduce utility bills and make informed decisions about appliances.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Calculating the monthly cost of running an air conditioner</li>
        <li>Estimating EV (electric vehicle) charging costs</li>
        <li>Comparing energy efficiency of different appliances</li>
        <li>Identifying which devices consume the most electricity</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How is electricity cost calculated?', a: 'Electricity cost = (Watts ÷ 1000) × Hours × Price per kWh. Example: A 1,500W space heater running 8 hours/day at \\$0.13/kWh costs: (1500 ÷ 1000) × 8 × 0.13 = \\$1.56/day or about \\$47/month.' },
          { q: 'What is a kilowatt-hour (kWh)?', a: 'One kilowatt-hour is the energy used by a 1,000-watt device running for one hour. It is the unit used by utility companies to measure and bill electricity. The average US household uses about 900 kWh per month.' },
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
