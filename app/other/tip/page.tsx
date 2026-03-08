import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Tip Calculator – Calculate Tip and Split Bill | zenicalculator',
  description: 'Calculate the exact tip amount and split the bill among friends. Supports custom tip percentages. Free online tip calculator for restaurants and services.',
  keywords: ["tip calculator", "how much to tip", "bill splitter", "restaurant tip calculator"],
  openGraph: {
    title: 'Tip Calculator – Calculate Tip and Split Bill',
    description: 'Calculate the exact tip amount and split the bill among friends. Supports custom tip percentages. Free online tip calculator for restaurants and servi',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tip Calculator – Calculate Tip and Split Bill',
    description: 'Calculate the exact tip amount and split the bill among friends. Supports custom tip percentages. Free online tip calculator for restaurants and servi',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-3">Tip Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Calculate tip amount and split the bill among multiple people.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
