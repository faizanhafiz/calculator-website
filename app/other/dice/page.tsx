import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Dice Roller | zenicalculator',
  description: 'Roll any type of dice — d4, d6, d8, d10, d12, d20, and more.',
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-rose-700 mb-3">Dice Roller</h1>
        <p className="text-gray-700 text-base md:text-lg">Roll any type of dice — d4, d6, d8, d10, d12, d20, and more.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
