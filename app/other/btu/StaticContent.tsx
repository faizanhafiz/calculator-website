const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">What Is a BTU and How Is It Used?</h2>
      <p className="text-lg text-gray-700">BTU (British Thermal Unit) is a unit of heat energy — specifically, the amount of energy needed to raise the temperature of one pound of water by one degree Fahrenheit. BTU ratings are used to size air conditioners, heaters, and furnaces for rooms and buildings.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Sizing air conditioners for rooms (BTU per square foot)</li>
        <li>Selecting the right furnace or boiler</li>
        <li>Comparing heater outputs</li>
        <li>Planning HVAC systems for commercial buildings</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How many BTUs do I need to cool a room?', a: 'A general rule: multiply room square footage by 20 for an estimate. A 200 sq ft room needs ~4,000 BTU; a 500 sq ft room needs ~10,000 BTU. Adjust upward for sunny rooms, high ceilings, or many occupants.' },
          { q: 'What is the difference between BTU and BTU/hr?', a: 'BTU measures total energy; BTU/hr (BTU per hour) measures power — the rate of energy delivery. Air conditioners and heaters are rated in BTU/hr. A 12,000 BTU/hr unit delivers 12,000 BTU of heating or cooling per hour.' },
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
