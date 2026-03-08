import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Date Calculator – Days Between Dates | zenicalculator',
  description: 'Calculate the exact number of days, weeks, months, or years between two dates. Free date difference calculator for planning and scheduling.',
  keywords: ["date calculator", "days between dates", "date difference calculator", "how many days until"],
  openGraph: {
    title: 'Date Calculator – Days Between Dates',
    description: 'Calculate the exact number of days, weeks, months, or years between two dates. Free date difference calculator for planning and scheduling.',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Date Calculator – Days Between Dates',
    description: 'Calculate the exact number of days, weeks, months, or years between two dates. Free date difference calculator for planning and scheduling.',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">Date Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Calculate the difference between two dates in days, weeks, and months.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
