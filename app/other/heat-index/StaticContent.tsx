const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Heat Index Calculator: What Does It Feel Like?</h2>
      <p className="text-lg text-gray-700">The heat index (also called 'feels like' temperature) combines air temperature and relative humidity to describe how hot it actually feels to the human body. High humidity reduces the body's ability to cool itself through sweating, making the perceived temperature much higher than the actual air temperature.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Understanding outdoor safety during hot weather</li>
        <li>Planning outdoor events, sports, and activities</li>
        <li>Assessing heat stress risk for workers</li>
        <li>Weather reporting and meteorology</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'What are heat index danger levels?', a: 'Caution: 80–90°F (fatigue possible). Extreme Caution: 90–103°F (heat cramps/exhaustion possible). Danger: 103–124°F (heat cramps/exhaustion likely). Extreme Danger: 125°F+ (heatstroke highly likely). Stay hydrated and limit outdoor activity when the heat index is high.' },
          { q: 'How is the heat index calculated?', a: 'The NWS uses a multi-variable regression equation developed by Steadman (1979) with temperature and relative humidity as inputs. The formula includes 9 terms and is most accurate for temperatures above 80°F and relative humidity above 40%.' },
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
