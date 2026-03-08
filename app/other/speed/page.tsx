import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Speed Distance Time Calculator – Calculate Speed or Distance | zenicalculator',
  description: 'Calculate speed, distance, or time using the physics formula. Supports mph, km/h, m/s, and more. Free online speed calculator.',
  keywords: ["speed calculator", "distance calculator", "speed distance time", "mph calculator"],
  openGraph: {
    title: 'Speed Distance Time Calculator – Calculate Speed or Distance',
    description: 'Calculate speed, distance, or time using the physics formula. Supports mph, km/h, m/s, and more. Free online speed calculator.',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speed Distance Time Calculator – Calculate Speed or Distance',
    description: 'Calculate speed, distance, or time using the physics formula. Supports mph, km/h, m/s, and more. Free online speed calculator.',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">Speed Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Calculate speed, distance, or time using the speed-distance-time formula.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
