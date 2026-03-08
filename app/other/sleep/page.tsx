import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Sleep Calculator – Best Bedtime and Wake Time | zenicalculator',
  description: 'Find your optimal bedtime or wake-up time based on 90-minute sleep cycles. Wake up refreshed with our free sleep cycle calculator.',
  keywords: ["sleep calculator", "sleep cycle calculator", "bedtime calculator", "best wake up time"],
  openGraph: {
    title: 'Sleep Calculator – Best Bedtime and Wake Time',
    description: 'Find your optimal bedtime or wake-up time based on 90-minute sleep cycles. Wake up refreshed with our free sleep cycle calculator.',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sleep Calculator – Best Bedtime and Wake Time',
    description: 'Find your optimal bedtime or wake-up time based on 90-minute sleep cycles. Wake up refreshed with our free sleep cycle calculator.',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">Sleep Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Find the best times to sleep or wake up based on sleep cycles.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
