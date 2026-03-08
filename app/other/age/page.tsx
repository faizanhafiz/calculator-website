import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Age Calculator – Calculate Exact Age in Years, Months, Days | zenicalculator',
  description: 'Find your exact age in years, months, weeks, and days from your date of birth. Free online age calculator with precise results.',
  keywords: ["age calculator", "how old am I", "age calculator by birthday", "exact age calculator"],
  openGraph: {
    title: 'Age Calculator – Calculate Exact Age in Years, Months, Days',
    description: 'Find your exact age in years, months, weeks, and days from your date of birth. Free online age calculator with precise results.',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Age Calculator – Calculate Exact Age in Years, Months, Days',
    description: 'Find your exact age in years, months, weeks, and days from your date of birth. Free online age calculator with precise results.',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">Age Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Calculate your exact age in years, months, and days.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
