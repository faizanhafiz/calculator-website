import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Fraction Calculator – Add, Subtract, Multiply, Divide Fractions | zenicalculator',
  description: 'Perform fraction arithmetic instantly. Add, subtract, multiply, and divide fractions with step-by-step solutions using our free fraction calculator.',
  keywords: ["fraction calculator", "add fractions", "fraction simplifier", "mixed number calculator"],
  openGraph: {
    title: 'Fraction Calculator – Add, Subtract, Multiply, Divide Fractions',
    description: 'Perform fraction arithmetic instantly. Add, subtract, multiply, and divide fractions with step-by-step solutions using our free fraction calculator.',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fraction Calculator – Add, Subtract, Multiply, Divide Fractions',
    description: 'Perform fraction arithmetic instantly. Add, subtract, multiply, and divide fractions with step-by-step solutions using our free fraction calculator.',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-3">Fraction Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Add, subtract, multiply, and divide fractions with step-by-step results.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
