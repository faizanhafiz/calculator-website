import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'GPA Calculator – Calculate Grade Point Average | zenicalculator',
  description: 'Calculate your semester and cumulative GPA from letter grades. Supports weighted GPA and multiple grading scales. Free online GPA calculator.',
  keywords: ["GPA calculator", "grade point average calculator", "cumulative GPA calculator", "college GPA calculator"],
  openGraph: {
    title: 'GPA Calculator – Calculate Grade Point Average',
    description: 'Calculate your semester and cumulative GPA from letter grades. Supports weighted GPA and multiple grading scales. Free online GPA calculator.',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPA Calculator – Calculate Grade Point Average',
    description: 'Calculate your semester and cumulative GPA from letter grades. Supports weighted GPA and multiple grading scales. Free online GPA calculator.',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">GPA Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Calculate your Grade Point Average (GPA) for any number of courses.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
