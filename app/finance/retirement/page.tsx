import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Retirement Calculator – How Much Do You Need to Retire? | zenicalculator',
  description: "Plan your retirement with our free calculator. Find out how much you need to save, whether you're on track, and how contributions affect your nest egg.",
  keywords: ["retirement calculator", "retirement savings calculator", "how much to retire", "401k calculator"],
  openGraph: {
    title: 'Retirement Calculator – zenicalculator',
    description: 'Calculate how much you need to retire and whether your savings are on track.',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retirement Calculator – zenicalculator',
    description: 'Calculate how much you need to retire and whether your savings are on track.',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">Retirement Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Estimate your retirement savings based on contributions and returns.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
