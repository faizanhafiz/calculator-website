import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'SIP Calculator – Systematic Investment Plan Returns | zenicalculator',
  description: 'Calculate the future value of your SIP investments. See how monthly contributions grow with compound returns over time using our free SIP calculator.',
  keywords: ["SIP calculator", "systematic investment plan", "mutual fund SIP", "SIP returns calculator"],
  openGraph: {
    title: 'SIP Calculator – zenicalculator',
    description: 'See how your monthly SIP investments grow over time. Calculate future returns instantly.',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIP Calculator – zenicalculator',
    description: 'See how your monthly SIP investments grow over time. Calculate future returns instantly.',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-3">SIP Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Calculate returns on your Systematic Investment Plan (SIP).</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
