import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Loan Calculator – Monthly Payment & Total Interest | zenicalculator',
  description: 'Calculate your monthly loan payment, total interest paid, and total cost of any loan. Works for personal loans, auto loans, and student loans.',
  keywords: ["loan calculator", "loan payment calculator", "personal loan calculator", "auto loan calculator"],
  openGraph: {
    title: 'Loan Calculator – zenicalculator',
    description: 'Find your monthly loan payment and total interest for any type of installment loan.',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Calculator – zenicalculator',
    description: 'Find your monthly loan payment and total interest for any type of installment loan.',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">Loan Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Calculate your monthly loan payments, total payment, and interest.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
