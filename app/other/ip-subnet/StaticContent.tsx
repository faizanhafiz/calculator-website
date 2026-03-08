const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">IP Subnet Calculator</h2>
      <p className="text-lg text-gray-700">An IP subnet calculator helps network engineers and administrators divide an IP address space into smaller subnetworks. It computes the subnet mask, network address, broadcast address, and usable host range from a given IP address and prefix length (CIDR notation).</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Designing network segmentation for organizations</li>
        <li>Calculating host ranges for IP address allocation</li>
        <li>Troubleshooting network configuration issues</li>
        <li>Subnetting practice for networking certifications (CCNA, CompTIA Network+)</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'What is a subnet mask?', a: 'A subnet mask is a 32-bit number that divides an IP address into network and host portions. Common masks: /24 (255.255.255.0) = 254 hosts, /16 (255.255.0.0) = 65,534 hosts, /8 (255.0.0.0) = 16,777,214 hosts.' },
          { q: 'What is CIDR notation?', a: 'CIDR (Classless Inter-Domain Routing) notation expresses an IP address and its subnet mask as a single value using a slash. Example: 192.168.1.0/24 means the network is 192.168.1.0 with a 24-bit mask (255.255.255.0), allowing 254 usable host addresses.' },
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
