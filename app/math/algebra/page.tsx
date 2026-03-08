import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Algebra Calculator – Solve Algebraic Expressions | zenicalculator',
  description: 'Solve algebraic expressions and equations online with our free algebra calculator. Supports variables, exponents, and multi-step equations.',
  keywords: ["algebra calculator", "algebraic expression calculator", "solve for x calculator", "algebra solver"],
  openGraph: {
    title: 'Algebra Calculator – Solve Algebraic Expressions',
    description: 'Solve algebraic expressions and equations online with our free algebra calculator. Supports variables, exponents, and multi-step equations.',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Algebra Calculator – Solve Algebraic Expressions',
    description: 'Solve algebraic expressions and equations online with our free algebra calculator. Supports variables, exponents, and multi-step equations.',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-3">Algebra Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Solve linear algebra equations quickly and accurately.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
