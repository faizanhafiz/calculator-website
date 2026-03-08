const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Speed, Distance, and Time Calculator</h2>
      <p className="text-lg text-gray-700">Speed, distance, and time are the three fundamental quantities in motion problems. Knowing any two allows you to calculate the third using the formula: Speed = Distance ÷ Time. This calculator handles unit conversions and solves for any of the three variables.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Calculating average speed for a journey</li>
        <li>Estimating travel time based on distance and speed</li>
        <li>Converting between mph, km/h, m/s, and knots</li>
        <li>Physics and math problem solving</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How do I calculate average speed?', a: 'Average Speed = Total Distance ÷ Total Time. Example: A 300-mile trip taking 5 hours: 300 ÷ 5 = 60 mph average. Note: Average speed is not the average of two speeds if times were different.' },
          { q: 'How do I convert mph to km/h?', a: 'Multiply mph by 1.60934. Example: 60 mph × 1.60934 = 96.56 km/h. To convert km/h to mph, multiply by 0.62137. 100 km/h × 0.62137 = 62.14 mph.' },
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
