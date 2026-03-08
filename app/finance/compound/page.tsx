import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Compound Interest Calculator – Grow Your Investment | zenicalculator',
  description: 'Use our free compound interest calculator to see how your investment grows over time with daily, monthly, or annual compounding. Includes principal, rate, and time analysis.',
  keywords: ["compound interest calculator", "compound interest formula", "investment growth calculator", "compounding frequency calculator"],
  openGraph: {
    title: 'Compound Interest Calculator – zenicalculator',
    description: 'See how compound interest grows your savings over time. Enter principal, rate, and years to get instant results.',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compound Interest Calculator – zenicalculator',
    description: 'See how compound interest grows your savings over time. Enter principal, rate, and years to get instant results.',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-3">Compound Interest Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Calculate how your investment grows with compound interest over time.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
