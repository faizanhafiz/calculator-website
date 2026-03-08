const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Molarity Calculator for Chemistry Solutions</h2>
      <p className="text-lg text-gray-700">Molarity (M) is a measure of the concentration of a chemical solution, expressed as moles of solute per liter of solution. A molarity calculator is essential in chemistry labs for preparing solutions of precise concentrations for experiments, titrations, and pharmaceutical applications.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Preparing laboratory solutions of known concentration</li>
        <li>Titration calculations</li>
        <li>Pharmaceutical drug concentration calculations</li>
        <li>Dilution calculations (C1V1 = C2V2)</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How is molarity calculated?', a: 'Molarity (M) = Moles of solute ÷ Liters of solution. To find moles from mass: Moles = Mass (g) ÷ Molar Mass (g/mol). Example: Dissolving 58.44 g of NaCl (molar mass 58.44 g/mol) in 1 liter of water gives a 1 M NaCl solution.' },
          { q: 'What is the dilution formula?', a: 'C1 × V1 = C2 × V2, where C = concentration (molarity) and V = volume. To dilute a 10 M solution to 1 M with a final volume of 1 liter: V1 = (1 M × 1 L) ÷ 10 M = 0.1 L. Take 100 mL of the 10 M solution and add water to reach 1 liter.' },
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
