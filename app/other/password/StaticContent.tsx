const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-700">Password Generator: Create Strong, Secure Passwords</h2>
      <p className="text-lg text-gray-700">A password generator creates random, secure passwords that are resistant to brute-force attacks, dictionary attacks, and credential stuffing. Strong passwords use a combination of uppercase letters, lowercase letters, numbers, and special characters.</p>
      <h3 className="text-xl font-semibold text-gray-800">Common Uses</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Creating strong passwords for online accounts</li>
        <li>Generating unique passwords for each website</li>
        <li>Creating temporary passwords for shared accounts</li>
        <li>Meeting password complexity requirements</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'How long should a password be?', a: 'Security experts recommend at least 12 characters for personal accounts and 16+ for sensitive accounts (banking, email). Each additional character exponentially increases the time required to crack the password. A 16-character random password would take centuries to crack with current technology.' },
          { q: 'Should I use a password manager?', a: 'Yes. A password manager stores unique, complex passwords for every site so you only need to remember one master password. Leading options include Bitwarden (free, open-source), 1Password, and Dashlane. Never reuse passwords across sites.' },
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
