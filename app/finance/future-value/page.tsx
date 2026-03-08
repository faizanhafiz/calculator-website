import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Future Value Calculator – Investment Growth Projection | zenicalculator',
  description: 'Calculate the future value of an investment or savings account. Project how money grows over time with different rates and contribution amounts.',
  keywords: ["future value calculator", "investment future value", "FV calculator", "savings growth calculator"],
  openGraph: {
    title: 'Future Value Calculator – zenicalculator',
    description: 'See the future value of your investments. Project growth with our easy FV calculator.',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Future Value Calculator – zenicalculator',
    description: 'See the future value of your investments. Project growth with our easy FV calculator.',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-3">Future Value Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Calculate the future value of an investment.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
