import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Perimeter Calculator – Calculate Perimeter of Any Shape | zenicalculator',
  description: 'Calculate the perimeter of rectangles, circles, triangles, polygons, and more. Free online perimeter calculator with all geometric formulas.',
  keywords: ["perimeter calculator", "calculate perimeter", "perimeter of a circle", "perimeter of rectangle"],
  openGraph: {
    title: 'Perimeter Calculator – Calculate Perimeter of Any Shape',
    description: 'Calculate the perimeter of rectangles, circles, triangles, polygons, and more. Free online perimeter calculator with all geometric formulas.',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perimeter Calculator – Calculate Perimeter of Any Shape',
    description: 'Calculate the perimeter of rectangles, circles, triangles, polygons, and more. Free online perimeter calculator with all geometric formulas.',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-3">Perimeter Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Calculate the perimeter or circumference of common shapes.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
