import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Percentage Calculator – Calculate % of a Number | zenicalculator',
  description: 'Calculate percentages instantly: find X% of Y, percentage change, percentage difference, and original value before a percentage. Free online percentage calculator.',
  keywords: ["percentage calculator", "calculate percentage", "percentage change calculator", "what percent of"],
  openGraph: {
    title: 'Percentage Calculator – Calculate % of a Number',
    description: 'Calculate percentages instantly: find X% of Y, percentage change, percentage difference, and original value before a percentage. Free online percentag',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Percentage Calculator – Calculate % of a Number',
    description: 'Calculate percentages instantly: find X% of Y, percentage change, percentage difference, and original value before a percentage. Free online percentag',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-3">Percentage Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Calculate percentages, percentage change, and more instantly.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
