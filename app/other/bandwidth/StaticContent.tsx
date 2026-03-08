const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">What Is Bandwidth and How Is It Calculated?</h2>
      <p className="text-lg text-gray-700">Bandwidth refers to the maximum data transfer rate of a network connection, measured in bits per second (bps), kilobits (Kbps), megabits (Mbps), or gigabits (Gbps). A bandwidth calculator helps estimate file transfer times and data usage based on connection speed.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Estimating how long a file download or upload will take</li>
        <li>Planning internet capacity for offices and events</li>
        <li>Comparing ISP plans by real-world performance</li>
        <li>Calculating video streaming data requirements</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'What is the difference between bandwidth and speed?', a: 'Bandwidth is the maximum capacity of a connection; speed is how fast data actually transfers in practice. Real-world speed is often 60–80% of advertised bandwidth due to network overhead, congestion, and hardware limitations.' },
          { q: 'How do I convert Mbps to MB/s?', a: 'Divide Mbps by 8 to get MB/s (megabytes per second). Example: 100 Mbps ÷ 8 = 12.5 MB/s. This conversion is important because internet speeds are measured in bits, but file sizes are measured in bytes.' },
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
