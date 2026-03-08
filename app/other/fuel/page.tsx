import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Fuel Cost Calculator – Trip Fuel Expense Estimator | zenicalculator',
  description: 'Estimate fuel costs for any trip. Enter distance, MPG, and fuel price to calculate exact travel expenses. Free online fuel cost calculator.',
  keywords: ["fuel cost calculator", "gas cost calculator", "trip fuel calculator", "cost per mile calculator"],
  openGraph: {
    title: 'Fuel Cost Calculator – Trip Fuel Expense Estimator',
    description: 'Estimate fuel costs for any trip. Enter distance, MPG, and fuel price to calculate exact travel expenses. Free online fuel cost calculator.',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fuel Cost Calculator – Trip Fuel Expense Estimator',
    description: 'Estimate fuel costs for any trip. Enter distance, MPG, and fuel price to calculate exact travel expenses. Free online fuel cost calculator.',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-3">Fuel Cost Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Calculate how much you'll spend on fuel for any trip.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
