import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Linear Equation Calculator – Solve Linear Equations | zenicalculator',
  description: 'Solve linear equations with one or two variables instantly. Our free linear equation calculator shows step-by-step solutions.',
  keywords: ["linear equation calculator", "solve linear equation", "linear equation solver", "equation with one variable"],
  openGraph: {
    title: 'Linear Equation Calculator – Solve Linear Equations',
    description: 'Solve linear equations with one or two variables instantly. Our free linear equation calculator shows step-by-step solutions.',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linear Equation Calculator – Solve Linear Equations',
    description: 'Solve linear equations with one or two variables instantly. Our free linear equation calculator shows step-by-step solutions.',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-3">Linear Equation Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Solve systems of two linear equations simultaneously.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
