const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Bra Size Calculator</h2>
      <p className="text-lg text-gray-700">A bra size calculator determines your best-fitting bra size from two measurements: band circumference (ribcage below the bust) and bust circumference (fullest part of the chest). Finding the correct size improves comfort, support, and posture. Note that sizing varies between brands and countries.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Finding the right bra size when shopping online</li>
        <li>Converting bra sizes between US, UK, EU, and AU systems</li>
        <li>Updating size after body changes</li>
        <li>Maternity and nursing bra sizing</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How do I measure my bra size?', a: 'Band size: measure snugly around your ribcage just below your bust; round to the nearest even number. Cup size: measure around the fullest part of your bust; subtract band size from bust measurement. Each inch = one cup size (1" = A, 2" = B, 3" = C, 4" = D, etc.).' },
          { q: 'Why do bra sizes vary between brands?', a: "There is no universal standardization in bra manufacturing. A 34B in one brand may fit like a 34C in another due to differences in cup depth, underwire width, and band stretch. Sister sizing (34B = 36A = 32C in cup volume) can help find alternatives when your exact size isn't available." },
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
