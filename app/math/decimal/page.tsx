import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Decimal Calculator – Decimal Arithmetic & Conversion | zenicalculator',
  description: 'Perform decimal arithmetic and convert decimals to fractions or percentages. Our free decimal calculator handles addition, subtraction, multiplication, and division.',
  keywords: ["decimal calculator", "decimal to fraction", "decimal arithmetic", "decimal converter"],
  openGraph: {
    title: 'Decimal Calculator – Decimal Arithmetic & Conversion',
    description: 'Perform decimal arithmetic and convert decimals to fractions or percentages. Our free decimal calculator handles addition, subtraction, multiplication',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decimal Calculator – Decimal Arithmetic & Conversion',
    description: 'Perform decimal arithmetic and convert decimals to fractions or percentages. Our free decimal calculator handles addition, subtraction, multiplication',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">Decimal to Fraction</h1>
        <p className="text-gray-700 text-base md:text-lg">Convert any decimal number to a simplified fraction.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
