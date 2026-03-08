import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'EMI Calculator – Loan EMI Monthly Payment | zenicalculator',
  description: 'Calculate your loan EMI (Equated Monthly Installment) instantly. Find monthly payments, total interest, and total amount payable for home, car, and personal loans.',
  keywords: ["EMI calculator", "loan EMI calculator", "monthly installment calculator", "home loan EMI"],
  openGraph: {
    title: 'EMI Calculator – zenicalculator',
    description: 'Calculate your exact monthly EMI for any loan. Enter principal, interest rate, and tenure for instant results.',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMI Calculator – zenicalculator',
    description: 'Calculate your exact monthly EMI for any loan. Enter principal, interest rate, and tenure for instant results.',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">EMI Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Calculate your Equated Monthly Installment (EMI) for any loan.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
