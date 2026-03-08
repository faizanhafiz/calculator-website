const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Ohm's Law Calculator</h2>
      <p className="text-lg text-gray-700">Ohm's Law defines the fundamental relationship between voltage (V), current (I), and resistance (R) in an electrical circuit: V = I × R. This law, discovered by Georg Simon Ohm in 1827, is the foundation of circuit analysis and is used in electronics, electrical engineering, and physics.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Calculating unknown voltage, current, or resistance in a circuit</li>
        <li>Sizing resistors for LED circuits</li>
        <li>Troubleshooting electrical problems</li>
        <li>Electronics hobbyist projects (Arduino, Raspberry Pi)</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: "What are the three forms of Ohm's Law?", a: "Ohm's Law can be arranged three ways: V = I × R (voltage = current × resistance), I = V ÷ R (current = voltage ÷ resistance), R = V ÷ I (resistance = voltage ÷ current). Know any two values and you can calculate the third." },
          { q: "What is power in relation to Ohm's Law?", a: "Power (P, in watts) extends Ohm's Law: P = V × I = I² × R = V² ÷ R. These formulas are used to size components properly and prevent overheating. A resistor must be rated for the power it will dissipate." },
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
